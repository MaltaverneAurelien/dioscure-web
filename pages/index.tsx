import Head from "next/head";
import React, { useRef } from "react";
import { TwitchEmbed, TwitchChat } from "react-twitch-embed";
import Button from "../components/Button";
import { AiFillPlaySquare } from "react-icons/ai";

export default function Home() {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

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
      <div className="flex text-white container m-auto">
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
      <section className="flex text-white container m-auto h-auto">
        <ul className="flex container justify-center gap-20 py-8">
          <li className="relative">
            <Button
              class="text-base uppercase"
              iconClass="text-6xl p-4 bg-light_blue"
              icon={AiFillPlaySquare}
            >
              Follow
            </Button>
            <p className="absolute left-20 top-9 text-xs">
              Suis la chaîne pour ne rien manquer
            </p>
          </li>
          <li className="relative">
            <Button
              class="text-base uppercase"
              iconClass="text-6xl p-4 bg-light_blue"
              icon={AiFillPlaySquare}
            >
              S'abonner
            </Button>
            <p className="absolute left-20 top-9 text-xs">
              Abonne-toi et obtiens pleins d'avantages
            </p>
          </li>
          <li className="relative">
            <Button
              class="text-base uppercase"
              iconClass="text-6xl p-4 bg-light_blue"
              icon={AiFillPlaySquare}
            >
              Replay
            </Button>
            <p className="absolute left-20 top-9 text-xs">
              Accède aux rediffusions des lives
            </p>
          </li>
          <li className="relative">
            <Button
              class="text-base uppercase"
              iconClass="text-6xl p-4 bg-light_blue"
              icon={AiFillPlaySquare}
            >
              Discord
            </Button>
            <p className="absolute left-20 top-9 text-xs">
              Rejoins le discord et ne manque aucune actualité
            </p>
          </li>
          <li className="relative">
            <Button
              class="text-base uppercase"
              iconClass="text-6xl p-4 bg-light_blue"
              icon={AiFillPlaySquare}
            >
              Dixper
            </Button>
            <p className="absolute left-20 top-9 text-xs">
              Accède a Dixper pour intéragir avec Dioscure
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
