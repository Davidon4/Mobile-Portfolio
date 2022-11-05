import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";
import Experience from "../screens/Experience";
import PersonalInfo from "../screens/PersonalInfo";
import SocialMedia from "../screens/SocialMedia";
import Home from "../screens/Home";
import HeaderTab from "./HeaderTab";

const Stack = createNativeStackNavigator();

export default function ScreenStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: "center",
            headerRight: () => <HeaderTab />,
          }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            headerTitleAlign: "center",
            title: "PersonalInfo",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleAlign: "center",
            title: "About Me",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="SocialMedia"
          component={SocialMedia}
          options={{
            headerTitleAlign: "center",
            title: "SocialMedia",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Experience"
          component={Experience}
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            title: "Experience",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
