import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "@redux/store";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

const reduxApp = wrapper.withRedux(MyApp);
export default appWithTranslation(reduxApp);
