import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider as JotaiProvider } from "jotai";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Pretendard Variable": require("../src/assets/fonts/PretendardVariable.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  return <JotaiProvider>{loaded && <RootLayoutNav />}</JotaiProvider>;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <View style={styles.appStyle}>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appStyle: {
    fontFamily: "Pretendard Variable",
    flex: 1,
  },
});
