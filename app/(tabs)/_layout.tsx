import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { Image, Text, View } from "react-native";
import {
  ChampionIcon,
  ParticipateIcon,
  PointsIcon,
  RankingIcon,
} from "@/constants/icons";

interface TabIconProps {
  icon: any;
  color: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor="#FFFFFF"
        className="w-8 h-8"
      />
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#730065",
          borderTopColor: "#730065",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={ParticipateIcon} color={color} focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={RankingIcon} color={color} focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="points"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={PointsIcon} color={color} focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="champion"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={ChampionIcon} color={color} focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
