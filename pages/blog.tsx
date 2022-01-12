import type { NextPage } from "next";
import Head from "next/head";
import BlogPost from "../blog/BlogPost";
import SiteNavigation from "../common/SiteNavigation";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chance&apos;s Blog</title>
        <meta
          name="description"
          content="personal blog Chance Embrey-Farquhar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SiteNavigation />
      </header>
      <main>
        <BlogPost />
      </main>
    </div>
  );
};

export default Blog;
