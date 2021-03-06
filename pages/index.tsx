import type { NextPage } from "next";
import Head from "next/head";
import SiteNavigation from "../common/SiteNavigation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chance Embrey-Farquhar</title>
        <meta
          name="description"
          content="home page for Chance Embrey-Farquhar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SiteNavigation />
      </header>
    </div>
  );
};

export default Home;
