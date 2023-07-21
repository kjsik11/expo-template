import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import Box from "core/components/Box";
import Text from "core/components/Text";

function ModalScreenContent() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text h3>Modal Screen</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Box>
  );
}

export default ModalScreenContent;
