import { Image, ScrollView, Text, View } from "react-native";
import { Users } from "../types/usersType";

interface UsersListProps {
  avatar_url: string;
  name: string;
  victorys: number;
}

export default function UsersList({
  avatar_url,
  name,
  victorys,
}: UsersListProps) {

  function getVictoryBarWidth() {
    const maxVictorys = 20;
    const maxWidth = 100;

    if (victorys < 0) victorys = 0;

    return (Math.min(victorys, maxVictorys) / maxVictorys) * maxWidth;
  }

  const displayName = victorys <= 3 ? `${name.slice(0, -3)}...` : name;

  return (
    <View className="pr-32 pl-10 w-full">
      <View className="flex my-3 flex-row items-center w-full">
        <Image
          source={{ uri: avatar_url }}
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
        <Text className="text-lg font-bold">
          {victorys === 0 ? name : victorys}
        </Text>
      </View>
    </View>
  );
}
