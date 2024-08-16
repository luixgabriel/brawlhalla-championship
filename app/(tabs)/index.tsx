import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import brawlhallaApi from "../../lib/brawlhallaApi";
import LegendCard from "@/components/legendCard";
import { brawnLogo } from "@/constants/icons";
import ConfirmationModal from "../../components/confirmationModal";
import ContainerDefault from "../../components/ContainerDefault";

export default function HomeScreen() {
  const [legends, setLegends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [selectedLegend, setSelectedLegend] = useState<any>({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectLegend = (item: any) => {
    if (name.trim() !== "" && pixKey.trim() !== "") {
      setModalVisible(true);
    }
    setSelectedLegend(item);
  };

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

  const checkAndShowModal = () => {
    if (
      name.trim() !== "" &&
      pixKey.trim() !== "" &&
      selectedLegend.legend_id
    ) {
      setModalVisible(true);
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
          className="w-[400px] h-[150px]"
        />
      </View>
      <View className="px-4">
        <TextInput
          placeholder="Seu Nome"
          className="border-2 border-primary p-2 mb-4 rounded-full font-medium px-5"
          placeholderTextColor="#730065"
          onChangeText={(text) => setName(text)}
          value={name}
          onBlur={checkAndShowModal} // Verifica ao sair do campo
        />
        <TextInput
          placeholder="Chave Pix"
          className="border-2 border-primary p-2 mb-4 rounded-full font-medium px-5"
          placeholderTextColor="#730065"
          onChangeText={(text) => setPixKey(text)}
          value={pixKey}
          onBlur={checkAndShowModal} // Verifica ao sair do campo
        />
      </View>
      <View className="flex-1 items-center mt-1 px-4">
        <Text
          className=" my-2 text-md"
          style={{ fontFamily: "BlackOpsOne_400Regular" }}
        >
          Escolha seu campeão favorito
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView className="border-2 border-primary rounded-md w-full">
            <View className="flex-row flex-wrap items-center justify-center">
              {legends.map((item: any) => (
                <TouchableOpacity
                  key={item.legend_id}
                  className={`w-[75px] h-[80px] p-2 flex items-center justify-center rounded-md mt-1 ${
                    selectedLegend.legend_id === item.legend_id
                      ? "bg-[#30f1dd]"
                      : "bg-transparent"
                  }`}
                  onPress={() => handleSelectLegend(item)}
                >
                  <LegendCard imageUrl={item.thumbnail} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </View>

      <ConfirmationModal
        visible={modalVisible}
        name={name}
        pixKey={pixKey}
        selectedLegend={selectedLegend}
        onClose={() => setModalVisible(false)}
      />
    </ContainerDefault>
  );
}
