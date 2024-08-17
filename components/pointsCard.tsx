import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import championshipApi from "../lib/championshipApi";

interface PointsCardProps {
  id: string;
  imageUri: string;
  initialPoints: number;
  name: string;
}

const PointsCard = ({ imageUri, initialPoints, name, id }: PointsCardProps) => {
  const [points, setPoints] = useState(initialPoints);
  const [loading, setLoading] = useState(false);

  const handleIncrement = async () => {
    setLoading(true);
    try {
      await championshipApi.patch(`users/add-victory/${id}`);
      setPoints((prevPoints) => prevPoints + 1);
    } catch (error) {
      console.error("Error increasing wins:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDecrement = async () => {
    setLoading(true);
    try {
      await championshipApi.patch(`users/remove-victory/${id}`);
      setPoints((prevPoints) => Math.max(prevPoints - 1, 0));
    } catch (error) {
      console.error("Error decreasing wins:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="h-[180px] w-[250px] rounded-2xl overflow-hidden mt-5">
      <ImageBackground className="h-full w-full" source={{ uri: imageUri }}>
        <View className="bg-black opacity-70 h-full w-full" />
        <View className="w-full h-full z-10 absolute flex items-center">
          <Image
            source={{ uri: imageUri }}
            resizeMode="contain"
            className="w-[70px] h-[70px] rounded-full mt-3"
          />
          <Text
            className="text-white text-xl text-center mt-2"
            style={{ fontFamily: "BlackOpsOne_400Regular" }}
          >
            {name}
          </Text>
          {loading ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            <View className="bg-primary flex flex-row w-[140px] p-1 items-center justify-center mt-2">
              <TouchableOpacity className="mr-5 px-4" onPress={handleDecrement}>
                <Text className="text-white text-lg font-bold">-</Text>
              </TouchableOpacity>
              <Text className="text-white text-lg font-bold">{points}</Text>
              <TouchableOpacity className="ml-5 px-4" onPress={handleIncrement}>
                <Text className="text-white text-lg font-bold">+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default PointsCard;
