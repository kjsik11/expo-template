import React from "react";

import PATHS from "navigation/constants/Paths";
import TabBarIcon from "navigation/components/TabBarIcon";

import SettingsScreenContent from "./SettingsScreenContent";

const SettingsScreen = {
  name: PATHS.BottomTab.Settings,
  component: SettingsScreenContent,
  options: {
    title: "Settings",
    tabBarIcon: ({ color }: { color: string }) => (
      <TabBarIcon name="code" color={color} />
    ),
  },
};

export default SettingsScreen;
