import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {},
  components: {
    Card: {
      lineWidth: 6,
      borderRadius: 8,
    },
    Typography: {
      fontFamily: "Inter",
      fontSize: 24,
      fontSizeHeading1: 48,
      fontSizeHeading2: 40,
      fontSizeHeading3: 36,
      fontWeightStrong: 700,
    },
  },
};

export default theme;
