import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import championshipApi from "../lib/championshipApi";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

type ConfirmationModalProps = {
  visible: boolean;
  name: string;
  pixKey: string;
  selectedLegend: { thumbnail: string };
  onClose: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  name,
  pixKey,
  selectedLegend,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleCreateUser = async () => {
    setLoading(true);
    try {
      await championshipApi.post("users", {
        name,
        pix_key: pixKey,
        avatar_url: selectedLegend.thumbnail,
      });
      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: "Você está participando do campeonato!",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
      router.push("/ranking");
      onClose();
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        className="flex-1 justify-center items-center bg-black"
        style={{ backgroundColor: "rgba(84, 87, 92, 0.548)" }}
      >
        <View className="bg-white p-5 rounded-md border-2 border-primary w-[80%] h-[400px] flex items-center">
          <Image
            source={{
              uri: selectedLegend.thumbnail,
            }}
            resizeMode="contain"
            className="w-[120px] h-[120px] rounded-full bg-slate-300 mt-5 border-2 border-primary"
          />
          <Text
            className="mt-4 text-xl text-primary mb-1"
            style={{ fontFamily: "BlackOpsOne_400Regular" }}
          >
            {name}
          </Text>
          <Text className="mb-4 text-lg text-primary font-bold"> {pixKey}</Text>
          <Text className="mt-8 text-slate-400">
            Suas informações estão corretas?
          </Text>
          <View className="flex flex-row w-[90%] justify-center mt-3">
            {loading ? (
              <ActivityIndicator size="large" color="#730065" />
            ) : (
              <>
                <Pressable
                  className="border-2 border-primary w-[120px] p-2 rounded-md mr-3"
                  onPress={handleCreateUser}
                >
                  <Text className="text-green-600 font-bold text-center">
                    SIM
                  </Text>
                </Pressable>
                <Pressable
                  className="border-2 border-primary w-[120px] p-2 rounded-md"
                  onPress={onClose}
                >
                  <Text className="text-red-600 font-bold text-center">
                    EDITAR
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
