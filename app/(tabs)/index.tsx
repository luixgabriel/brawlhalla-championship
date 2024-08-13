import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full bg-purple-400">
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
      <View className="bg-yellow-200 flex items-center mt-6">
        <Text>Escolha seu campeão favorito</Text>
        <ScrollView>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
