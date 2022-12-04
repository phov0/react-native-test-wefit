import React from "react";
import BottomRouter from "./Bottom.router";
import { createStackNavigator } from "@react-navigation/stack";

import { Splash } from "../flows/splash";
import Details from "../flows/repositories/details";
import theme from "../styles/theme";

export type StackRootParamList = {
  Splash: undefined;
  BottomRouter: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<StackRootParamList>();

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomRouter"
        component={BottomRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: theme.colors.BLACK,
          },
          headerTintColor: theme.colors.WHITE,
          headerTitleStyle: {
            fontFamily: theme.fonts.MEDIUM,
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}
