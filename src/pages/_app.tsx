import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

import "@/styles/globals.css";
import theme from "themes/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
