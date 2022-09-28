import Head from "next/head";
import React, { useRef } from "react";
import SessionContext from "../context/context";
import { TwitchEmbed, TwitchChat } from "react-twitch-embed";
import { useContext } from "react";

export default function Home() {
  const { session } = useContext(SessionContext);
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  const handleReady = (e) => {
    embed.current = e;
  };

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
      <div className="">
        <div className="">Online</div>
        <div className="">Offline</div>
      </div>
      <section className="flex mt-10 items-center h-auto">
        <TwitchEmbed
          className="flex items-center gap-4 ml-4 font-semibold text-white"
          channel="dioscure"
          autoplay
          muted
          withChat
          darkMode={false}
          hideControls
          onVideoReady={handleReady}
        />
        <TwitchChat
          className="flex items-center gap-4 ml-4 font-semibold text-white"
          channel="dioscure"
          darkMode
        />
      </section>
    </>
  );
}
