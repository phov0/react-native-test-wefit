import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "../components/Header";
import Home from "../flows/repositories/home";
import Favorites from "../flows/favorites";
import { AntDesign, Entypo} from "@expo/vector-icons";
import { useRepository } from "../hooks/useRepository";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header title="WeFit" onPress={toggleUserSelectionModal} />,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.REGULAR_2,
          fontSize: 14
        },
        tabBarStyle:{
          height:70,
          paddingTop: 6,
          paddingHorizontal: 12,
          paddingBottom:8
        },
        tabBarActiveTintColor: theme.colors.BLUE,
        tabBarInactiveTintColor: theme.colors.BLACK_4
      }}
    >
      <Tab.Screen
        name="Repositórios"
        component={Home}
        options={{
          tabBarIcon:({size,color}) => (
            <AntDesign name={"github"} size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon:({size,color}) => (
            <Entypo name={"star"} size={size} color={color}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}
