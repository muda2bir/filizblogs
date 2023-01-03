import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Loader />
      <Component {...pageProps} />
    </Layout>
  );
}

function Loader() {
  const router: NextRouter = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  if (loading) {
    return (
      <>
        <div className="loader_parent">
          <Image
            src="/loader.svg"
            alt="loading....."
            width="160"
            height="160"
          />
        </div>
      </>
    );
  } else {
    return null;
  }
}
