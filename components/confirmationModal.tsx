import React from "react";
import { Modal, View, Text, Pressable } from "react-native";

type ConfirmationModalProps = {
  visible: boolean;
  name: string;
  pixKey: string;
  selectedLegend: { name: string };
  onClose: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  name,
  pixKey,
  selectedLegend,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center">
        <View className="bg-white p-5 rounded-md shadow-md w-[80%]">
          <Text className="text-lg font-bold mb-4">Confirmação</Text>
          <Text className="mb-4">Nome: {name}</Text>
          <Text className="mb-4">Chave Pix: {pixKey}</Text>
          <Text className="mb-4">Lenda Selecionada: {selectedLegend.name}</Text>
          <Pressable className="bg-blue-500 p-2 rounded-full" onPress={onClose}>
            <Text className="text-white text-center">Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
