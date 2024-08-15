import { Image, ScrollView, Text, View } from "react-native";
import { Users } from "../types/usersType";

export default function UsersList({ avatar, id, name, victorys }: Users) {
  return (
    <View>
      <View className="flex my-3 flex-row items-center">
        <Image
          source={{ uri: avatar }}
          resizeMode="contain"
          className="w-[60px] h-[60px] rounded-full"
        />
        <View className="bg-primary h-[30px] w-[100px] flex justify-center mx-2">
          <Text className="text-md px-2">{name}</Text>
        </View>
      </View>
    </View>
  );
}
