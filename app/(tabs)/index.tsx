import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import brawlhallaApi from "../../lib/brawlhallaApi";
import LegendCard from "@/components/legendCard";
import { brawnLogo } from "@/constants/icons";
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
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-7 pb-5 flex items-center">
        <Image
          source={brawnLogo}
          resizeMode="contain"
          className="w-[500px] h-[200px]"
        />
      </View>
      <View className="px-4">
        <TextInput
          placeholder="Seu Nome"
          className="border-2 border-primary p-2 mb-4 rounded-full font-medium px-5"
          placeholderTextColor="#730065"
        />
        <TextInput
          placeholder="Chave Pix"
          className="border-2 border-primary p-2 mb-4 rounded-full font-medium px-5"
          placeholderTextColor="#730065"
        />
      </View>
      <View className="flex-1 items-center mt-6 px-4">
        <Text style={{ fontFamily: "BlackOpsOne_400Regular" }} className="my-2">
          Escolha seu campeão favorito
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView className="border-2 border-primary  rounded-md w-full">
            <View className="flex-row gap-2 flex-wrap items-center justify-center py-2">
              {legends.map((item: any) => (
                <View key={item.legend_id} className="w-[70px]">
                  <LegendCard imageUrl={item.thumbnail} />
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
