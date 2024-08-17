import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { brawnLogo } from "../../constants/icons";
import ContainerDefault from "../../components/ContainerDefault";
import { useCallback, useEffect, useState } from "react";
import { Users } from "../../types/usersType";
import UsersList from "../../components/usersList";
import championshipApi from "../../lib/championshipApi";
import { useFocusEffect } from "expo-router";

export default function Ranking() {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true); // Inicializa com true

  const loadData = async () => {
    setLoading(true); // Começa o carregamento
    try {
      const response = await championshipApi.get("users");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false); // Termina o carregamento
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Disparar a request quando a tela ganhar o foco
      loadData();
    }, [])
  );

  return (
    <ContainerDefault>
      <View className="mt-7 pb-5 flex items-center">
        <Image
          source={brawnLogo}
          resizeMode="contain"
          className="w-[400px] h-[150px]"
        />
      </View>
      <View className="flex items-center">
        <Text
          style={{ fontFamily: "Poppins_700Bold_Italic" }}
          className="text-lg text-primary"
        >
          Ranking Wins
        </Text>
      </View>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#730065" />
        ) : (
          <View className="flex-1 items-center">
            {users.length > 0 &&
              users.map((item: any) => (
                <UsersList
                  avatar_url={item.avatar_url}
                  name={item.name}
                  key={item.id}
                  victorys={item.victorys}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </ContainerDefault>
  );
}
