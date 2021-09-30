import type { AppProps } from "next/app";
import "../styles/globals.css";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mock/msw/handlers");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
