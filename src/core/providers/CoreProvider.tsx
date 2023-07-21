import React from "react";
import { ViewProps } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@rneui/themed";

import THEME from "core/constants/Theme";
import useCachedResources from "core/hooks/useCachedResources";

interface CoreProviderProps extends ViewProps {}

function CoreProvider({ children }: CoreProviderProps) {
  const isLoadingComplete = useCachedResources();
  if (isLoadingComplete === false) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={THEME}>
        {children}

        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default CoreProvider;
