import "../styles/global.scss";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
