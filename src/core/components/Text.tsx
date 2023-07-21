import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import {
  useTheme,
  Text as TextRNE,
  TextProps as TextPropsRNE,
} from "@rneui/themed";

import FONTS from "core/constants/Fonts";
import Box, { BoxProps } from "core/components/Box";

export interface TextProps extends BoxProps, TextPropsRNE {
  label?: boolean;
  bold?: boolean;
  style?: any;
  customStyle?: StyleProp<TextStyle>;
}

function Text(props: TextProps) {
  const { theme } = useTheme();

  const style = {
    fontFamily:
      props.label === true || props.bold === true
        ? FONTS.SEMI_BOLD
        : FONTS.REGULAR,
    fontSize: props.label === true ? 14 : 16,
    color: props.label === true ? theme.colors.secondary : theme.colors.black,
  };

  return (
    <Box {...props}>
      <TextRNE
        {...props}
        h1Style={styles.h1Style}
        h2Style={styles.h2Style}
        h3Style={styles.h3Style}
        h4Style={styles.h4Style}
        style={[style, props.customStyle]}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  h1Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 48,
  },
  h2Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 32,
  },
  h3Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 24,
  },
  h4Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 16,
  },
});

export default Text;
