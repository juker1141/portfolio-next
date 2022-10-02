import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

import Header from "@comp/Header";
import Main from "@comp/Main";
import Footer from "@comp/Footer";
import GuideButton from "@comp/GuideButton";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Hello! welcome to my portfolio" />
        <meta property="og:title" content="Ryu's Portfolio" />
        <meta property="og:type" content="portfolio" />
        <meta
          property="og:description"
          content="Hello! welcome to my portfolio"
        />
        <meta
          property="og:url"
          content="https://ryu-juker1141.herokuapp.com/"
        />
        <meta property="og:image" content="/images/og-image.png" />

        <link rel="apple-touch-icon" href="/images/logo192.png" />

        <link rel="manifest" href="/images/manifest.json" />

        <title>Ryu&apos;s Portfolio</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/d973d1ccea.js"
        crossOrigin="anonymous"
      />
      <div className="p-2 lg:p-5 text-blue-900 w-full h-full overflow-y-auto relative font-default">
        <div className="fixed top-0 w-full pt-2 lg:pt-5 bg-white z-20" />
        <Header />
        <Main />
        <Footer />
        <GuideButton />
        <div className="fixed bottom-0 w-full pb-2 lg:pb-5 bg-white z-20" />
      </div>
    </div>
  );
};

export default HomePage;
