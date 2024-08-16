import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { brawnLogo, championCrown, copyAndPaste } from "../../constants/icons";

export default function Champion() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-7 pb-5 flex items-center">
        <Image
          source={brawnLogo}
          resizeMode="contain"
          className="w-[400] h-[150px]"
        />
      </View>
      <View className="flex-1 items-center">
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
              uri: "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
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
            Luix
          </Text>
        </View>
        <View className="border-2 rounded-lg border-primary mt-7 w-[80%] p-3 flex flex-row justify-between">
          <Text className="font-bold text-lg">18643721760</Text>
          <Image
            source={copyAndPaste}
            resizeMode="contain"
            className="w-[30px] h-[30px]"
          />
        </View>
        <View className="mt-4 flex items-center px-7">
          <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-md">
            Parabéns, Luix!
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
      </View>
    </SafeAreaView>
  );
}
