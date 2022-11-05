import React, { useState, useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from "./config/ThemeContext";
import theme from "./config/theme";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);
  return (
    <ThemeContext.Provider value={mode === true ? theme.light : theme.dark}>
      <NavigationContainer theme={mode === true ? DefaultTheme : DarkTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
