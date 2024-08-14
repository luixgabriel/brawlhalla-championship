import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import brawlhallaApi from "../../lib/brawlhallaApi";

export default function HomeScreen() {
  const [legends, setLegends] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const champions = await brawlhallaApi.get("/legends/all");
      setLegends(champions.data.data);
    } catch (error) {
      console.error("Error fetching legends:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-purple-400">
      <View className="bg-green-300 mt-10 h-[200px]">
        <Text className="text-red-500">Oi</Text>
      </View>
      <View className="px-4">
        <TextInput
          placeholder="Seu Nome"
          className="border border-gray-300 p-2 mb-4 rounded"
        />
        <TextInput
          placeholder="Chave Pix"
          className="border border-gray-300 p-2 rounded"
        />
      </View>
      <View className="bg-yellow-200 flex-1 items-center mt-6 px-4">
        <Text style={{ fontFamily: "BlackOpsOne_400Regular" }}>
          Escolha seu campeão favorito
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView className="border-2 border-black w-full">
            <View className="flex-row gap-2 flex-wrap items-center justify-center py-2">
              {legends.map((item: any) => (
                <View
                  key={item.legend_id}
                  className="border-2 border-red-400 w-[70px]"
                >
                  <Text>{item.bio_name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
