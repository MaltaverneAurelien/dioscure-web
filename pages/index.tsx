import SessionContext from "../context/context";
import { useContext } from "react";
import Head from "next/head";

export default function Home() {
  const { session } = useContext(SessionContext);

  return (
    <>
    <Head>
        <title key="title">DioscureTV</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
  );
}