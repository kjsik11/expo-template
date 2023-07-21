import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotFoundScreen from "core/screens/NotFoundScreen";

import { RootStackParamList } from "navigation/types";
import PATHS from "navigation/constants/Paths";
import BottomTabNavigator from "navigation/navigators/BottomTabNavigator";

import ModalScreen from "screens/ModalScreen";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PATHS.Root}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen {...NotFoundScreen} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen {...ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
