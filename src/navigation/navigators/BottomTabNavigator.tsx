import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RootTabParamList } from "navigation/types";

import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={HomeScreen.name}>
      <BottomTab.Screen {...HomeScreen} />
      <BottomTab.Screen {...SettingsScreen} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
