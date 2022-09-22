import Head from "next/head";
import SessionContext from "../context/context";
import { useContext } from "react";

export default function Home() {
  const { session } = useContext(SessionContext);

  return (
    <>
      <Head>
        <title key="title">DioscureTV</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <section className="h-20 flex items-center">
        <div className="flex ml-4 items-center text-white font-semibold gap-4">
          <img
            src={session?.user.user_metadata.avatar_url}
            className="w-12 rounded-full"
          /> Dioscure TV - Stream Rocket League
        </div>
      </section>
    </>
  );
}
