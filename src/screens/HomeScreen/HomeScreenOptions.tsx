import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { RootTabScreenProps } from "navigation/types";
import PATHS from "navigation/constants/Paths";
import TabBarIcon from "navigation/components/TabBarIcon";

const HomeScreenOptions = ({ navigation }: RootTabScreenProps<"Home">) => ({
  title: "Home",
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon name="code" color={color} />
  ),
  headerRight: () => (
    <Pressable
      onPress={() => navigation.navigate(PATHS.Modal)}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome name="info-circle" size={25} style={styles.tabOneIcon} />
    </Pressable>
  ),
});

const styles = StyleSheet.create({
  tabOneIcon: { marginRight: 15 },
});

export default HomeScreenOptions;
