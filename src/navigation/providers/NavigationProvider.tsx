/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import useColorScheme from "core/hooks/useColorScheme";

import LINKING from "navigation/constants/Linking";
import RootNavigator from "navigation/navigators/RootNavigator";

function NavigationProvider() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      linking={LINKING}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export default NavigationProvider;
