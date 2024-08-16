import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { brawnLogo } from "../../constants/icons";
import users from "../../data/users";
import UsersList from "../../components/usersList";
import ContainerDefault from "../../components/ContainerDefault";

export default function Ranking() {
  return (
    <ContainerDefault>
      <View className="mt-7 pb-5 flex items-center">
        <Image
          source={brawnLogo}
          resizeMode="contain"
          className="w-[400px] h-[150px]"
        />
      </View>
      <View className=" flex items-center">
        <Text
          style={{ fontFamily: "Poppins_700Bold_Italic" }}
          className="text-lg text-primary"
        >
          Ranking Wins
        </Text>
      </View>
      <ScrollView>
        <View className="flex-1 items-center">
          {users.map((item) => (
            <UsersList
              id={item.id}
              avatar={item.avatar}
              name={item.name}
              key={item.id}
              victorys={item.victorys}
            />
          ))}
        </View>
      </ScrollView>
    </ContainerDefault>
  );
}
