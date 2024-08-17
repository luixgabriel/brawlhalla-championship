import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContainerDefault from "../../components/ContainerDefault";
import PointsCard from "../../components/pointsCard";
import championshipApi from "../../lib/championshipApi";
import { useFocusEffect } from "expo-router";

export default function Points() {
  const [points, setPoints] = useState(2);
  const [users, setUsers] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await championshipApi.get("users");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );
  return (
    <ContainerDefault>
      <ScrollView>
        <View className="mt-7 flex items-center">
          <Text
            style={{ fontFamily: "Poppins_700Bold_Italic" }}
            className="text-lg text-primary"
          >
            Pontuação
          </Text>
          {loading ? (
            <ActivityIndicator size="large" color="#730065" />
          ) : (
            <View className="flex-1 items-center">
              {users.length > 0 &&
                users.map((item: any) => (
                  <PointsCard
                    imageUri={item.avatar_url}
                    initialPoints={item.victorys}
                    name={item.name}
                    key={item.id}
                  />
                ))}
            </View>
          )}
        </View>
      </ScrollView>
    </ContainerDefault>
  );
}
