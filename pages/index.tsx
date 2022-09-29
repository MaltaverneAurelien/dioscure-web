import Head from "next/head";
import React, { useRef } from "react";
import { TwitchEmbed, TwitchChat } from "react-twitch-embed";
import Button from "../components/Button";
import LiveItem from "../components/Liveitem";
// Import des react icons
import { AiFillPlaySquare, AiFillStar } from "react-icons/ai";
import { MdReplayCircleFilled } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  const embed = useRef();

  const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <>
      <Head>
        <title key="title">DioscureTV</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex text-white container m-auto bg-medium_blue mt-5">
        <Button
          class="text-lg uppercase"
          icon={AiFillPlaySquare}
          iconClass="text-2xl"
        >
          Dioscure - Offline
        </Button>
      </div>
      <section className="container flex m-auto">
        <TwitchEmbed
          channel="dioscure"
          width={1250}
          height={600}
          autoplay={true}
          muted
          allowFullscreen
          withChat={false}
          darkMode
          hideControls={false}
          onVideoReady={handleReady}
        />
        <TwitchChat channel="dioscure" height={600} width={300} darkMode />
      </section>
      <section className="flex justify-center gap-7 container m-auto">
        <LiveItem href="/" icon={AiFillHeart} text="Follow">
          Suis la chaîne pour ne rien manquer
        </LiveItem>
        <LiveItem href="/" icon={AiFillStar} text="S'abonner">
          Abonne-toi et obtiens pleins d'avantages
        </LiveItem>
        <LiveItem href="https://www.twitch.tv/dioscure/videos" icon={MdReplayCircleFilled} text="Replay">
          Accède aux rediffusions des lives
        </LiveItem>
        <LiveItem href="https://discord.gg/9vSKPJUTN8" icon={BsDiscord} text="Discord">
          Rejoins le discord et ne manque aucune actualité
        </LiveItem>
        <LiveItem href="https://dixper.gg/dioscure" icon={IoGameController} text="Dixper">
          Accède a Dixper pour intéragir avec Dioscure
        </LiveItem>
      </section>
    </>
  );
}
