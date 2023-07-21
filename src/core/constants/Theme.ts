import { createTheme } from "@rneui/themed";

import COLORS from "core/constants/Colors";

export const THEME_MODE_DEFAULT = "light";

const THEME = createTheme({
  lightColors: {
    primary: "red",
  },
  darkColors: COLORS.dark,
  mode: THEME_MODE_DEFAULT,
});

export default THEME;
