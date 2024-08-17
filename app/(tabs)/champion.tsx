import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { brawnLogo, championCrown, copyAndPaste } from "../../constants/icons";
import ContainerDefault from "../../components/ContainerDefault";
import { useEffect, useState } from "react";
import championshipApi from "../../lib/championshipApi";
import Toast from "react-native-toast-message";

export default function Champion() {
  const [champion, setChampion] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const copyPixKeyToClipboard = async (pix_key: string) => {
    await Clipboard.setStringAsync(pix_key);
    Toast.show({
      type: "success",
      text1: "Chave PIX copiada para a área de transferência.",
    });
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await championshipApi.get("championship/last-champion");
      console.log("Champion Data:", response.data);
      setChampion(response.data);
    } catch (error) {
      console.error("Failed to load champion:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ContainerDefault>
      <View className="mt-7 pb-5 flex items-center">
        <Image
          source={brawnLogo}
          resizeMode="contain"
          className="w-[400] h-[150px]"
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#730065" />
      ) : (
        <View className="flex-1 items-center">
          {champion && champion.champion ? (
            <>
              <Text
                style={{ fontFamily: "Poppins_700Bold_Italic" }}
                className="text-lg text-primary"
              >
                Último Campeão:
              </Text>
              <View className="mt-2">
                <Image
                  source={championCrown}
                  resizeMode="contain"
                  className="w-[50px] h-[50px]"
                />
                <Image
                  source={{
                    uri:
                      champion.champion.avatar_url ||
                      "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
                  }}
                  resizeMode="contain"
                  className="w-[100px] h-[100px] rounded-full bg-slate-300"
                />
              </View>
              <View className="bg-primary h-[30px] w-[150px] flex justify-center items-center mx-2 mt-4">
                <Text
                  style={{ fontFamily: "BlackOpsOne_400Regular" }}
                  className="text-lg px-2 text-white"
                >
                  {champion.champion.name}
                </Text>
              </View>
              <View className="border-2 rounded-lg border-primary mt-7 w-[80%] p-3 flex flex-row justify-between">
                <Text className="font-bold text-lg">
                  {champion.champion.pix_key}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    copyPixKeyToClipboard(champion.champion.pix_key)
                  }
                >
                  <Image
                    source={copyAndPaste}
                    resizeMode="contain"
                    className="w-[30px] h-[30px]"
                  />
                </TouchableOpacity>
              </View>
              <View className="mt-4 flex items-center px-7">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="text-md"
                >
                  {`Parabéns, ${champion.champion.name}!`}
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="text-center mt-3"
                >
                  Você está de parabéns por liderar o nosso ranking quinzenal no
                  campeonato interno da Markts!
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_700Bold_Italic" }}
                  className="text-lg text-primary mt-4 text-center"
                >
                  Tempo restante para finalização do campeonato atual.
                </Text>
              </View>
            </>
          ) : (
            <Text>Dados do campeão não encontrados</Text>
          )}
        </View>
      )}
    </ContainerDefault>
  );
}
