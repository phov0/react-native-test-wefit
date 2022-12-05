import React, { useEffect } from "react";
import { Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";

export const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BottomRouter");
    }, 2000);
  }, []);

  return (
    <Container>
      <Logo />
    </Container>
  );
};
