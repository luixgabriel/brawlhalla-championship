import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

interface PointsCardProps {
  imageUri: string;
  initialPoints: number;
  name: string;
}

const PointsCard = ({ imageUri, initialPoints, name }: PointsCardProps) => {
  const [points, setPoints] = useState<number>(initialPoints);

  const handleIncrement = () => setPoints(points + 1);
  const handleDecrement = () => setPoints(points - 1);

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
            className="text-white text-xl  text-center mt-2"
            style={{ fontFamily: "BlackOpsOne_400Regular" }}
          >
            {name}
          </Text>
          <View className="bg-primary flex flex-row w-[140px] p-1 items-center justify-center mt-2">
            <TouchableOpacity className="mr-5 px-4" onPress={handleDecrement}>
              <Text className="text-white text-lg font-bold">-</Text>
            </TouchableOpacity>
            <Text className="text-white text-lg font-bold">{points}</Text>
            <TouchableOpacity className="ml-5 px-4" onPress={handleIncrement}>
              <Text className="text-white text-lg font-bold">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PointsCard;
