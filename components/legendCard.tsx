import { brawnLogo } from "@/constants/icons";
import { Image } from "react-native";

interface LegendCardProps {
  imageUrl: string;
}

export default function LegendCard({ imageUrl }: LegendCardProps) {
  const invalidImages = [
    "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_IniuitM-1.png",
    "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_Corsair.png",
    "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_Thief.png",
  ];

  if (!imageUrl || invalidImages.includes(imageUrl)) {
    return (
      <Image
        source={brawnLogo}
        resizeMode="contain"
        className="w-[70px] h-[70px]"
      />
    );
  } else {
    return (
      <Image
        source={{ uri: imageUrl }}
        resizeMode="contain"
        className="w-[70px] h-[70px]"
      />
    );
  }
}
