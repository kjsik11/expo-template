import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={styles.icon} {...props} />;
}

const styles = StyleSheet.create({
  icon: { marginBottom: -3 },
});

export default TabBarIcon;
