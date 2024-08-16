import { Children, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerDefaultProps {
  children: ReactNode;
}

export default function ContainerDefault({ children }: ContainerDefaultProps) {
  return <SafeAreaView className="flex-1 bg-white">{children}</SafeAreaView>;
}
