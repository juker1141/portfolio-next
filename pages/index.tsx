import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
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
        <meta property="og:image" content="/og-image.png" />

        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <title>Ryu&apos;s Portfolio</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/d973d1ccea.js"
        crossOrigin="anonymous"
      />
      <div className="text-3xl font-mono font-bold">你好阿旅行者ˇ324234234</div>
    </div>
  );
};

export default Home;
