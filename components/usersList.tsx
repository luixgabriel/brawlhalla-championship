import { Image, ScrollView, Text, View } from "react-native";
import { Users } from "../types/usersType";

export default function UsersList({ avatar, name, victorys }: Users) {
  function getVictoryBarWidth() {
    const maxVictorys = 10;
    const maxWidth = 100;

    if (victorys < 0) victorys = 0;
    if (victorys > maxVictorys) victorys = maxVictorys;

    return (victorys / maxVictorys) * maxWidth;
  }

  const displayName = victorys <= 3 ? `${name.slice(0, -3)}...` : name;

  return (
    <View className="pr-32 pl-10 w-full">
      <View className="flex my-3 flex-row items-center w-full">
        <Image
          source={{ uri: avatar }}
          resizeMode="contain"
          className="w-[60px] h-[60px] rounded-full"
        />
        <View
          style={{ width: `${getVictoryBarWidth()}%` }}
          className="bg-primary h-[30px] flex justify-center mx-2"
        >
          <Text
            style={{ fontFamily: "BlackOpsOne_400Regular" }}
            className="text-lg px-2 text-white"
          >
            {displayName}
          </Text>
        </View>
      </View>
    </View>
  );
}
