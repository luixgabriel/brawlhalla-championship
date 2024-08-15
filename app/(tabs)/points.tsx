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

export default function Points() {
  return (
    <SafeAreaView className="flex-1 bg-white">
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
                className="w-[70px] h-[70px] rounded-full"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}
