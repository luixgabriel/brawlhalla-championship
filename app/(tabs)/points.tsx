import { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContainerDefault from "../../components/ContainerDefault";

export default function Points() {
  const [points, setPoints] = useState(2);
  return (
    <ContainerDefault>
      <View className="mt-7 flex items-center">
        <Text
          style={{ fontFamily: "Poppins_700Bold_Italic" }}
          className="text-lg text-primary"
        >
          Pontuação
        </Text>
        <View className="h-[180px] w-[250px] rounded-2xl overflow-hidden mt-5">
          <ImageBackground
            className="h-full w-full"
            source={{
              uri: "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
            }} // Substitua pelo URL da sua imagem ou importe uma local
          >
            <View className="bg-black opacity-70 h-[180px] w-[250px]" />
            <View className="w-full h-full z-10 absolute flex items-center">
              <Image
                source={{
                  uri: "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
                }}
                resizeMode="contain"
                className="w-[70px] h-[70px] rounded-full mt-3"
              />
              <View className="bg-primary flex flex-row w-[140px] p-1 items-center justify-center mt-4">
                <TouchableOpacity
                  className="mr-5 px-4"
                  onPress={() => setPoints(points + 1)}
                >
                  <Text className="text-white text-lg font-bold">-</Text>
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold">{points}</Text>
                <TouchableOpacity className="ml-5">
                  <Text className="text-white text-lg font-bold px-4">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ContainerDefault>
  );
}
