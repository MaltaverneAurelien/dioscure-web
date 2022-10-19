import { BrowserView, MobileView } from "react-device-detect";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchEmbedInstance,
} from "react-twitch-embed";
import LiveItem from "../components/Liveitem";
import Button from "../components/Button";
import { useRef } from "react";
// Import des react icons
import { AiFillPlaySquare, AiFillStar } from "react-icons/ai";
import { MdReplayCircleFilled } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Live() {
  const embed = useRef<TwitchEmbedInstance>();

  const handleReady = (e: TwitchEmbedInstance) => {
    embed.current = e;
  };

  return (
    <>
      <div className="bg-secondary_blue container m-auto">
        <Button
          class="text-lg uppercase items-center"
          icon={AiFillPlaySquare}
          iconClass="text-2xl"
        >
          Twitch.TV - Dioscure
        </Button>
      </div>
      <BrowserView>
        <section className="flex justify-center">
          <TwitchEmbed
            channel="dioscure"
            allowFullscreen
            autoplay={true}
            muted={true}
            width={1050}
            height={650}
            withChat={false}
            darkMode={true}
            hideControls={false}
            onVideoReady={handleReady}
          />
          <TwitchChat channel="dioscure" width={350} height={650} darkMode />
        </section>
      </BrowserView>
      <MobileView>
        <section className="flex flex-col">
          <TwitchEmbed
            channel="dioscure"
            autoplay={true}
            muted
            width={500}
            height={600}
            allowFullscreen
            withChat={false}
            darkMode
            hideControls={false}
            onVideoReady={handleReady}
          />
          <TwitchChat channel="dioscure" height={600} width={100} darkMode />
        </section>
      </MobileView>
      <section className="md:flex md:justify-center md:gap-7 md:container md:m-auto md:py-10">
        <LiveItem href="/" icon={AiFillHeart} text="Follow">
          Suis la chaîne pour ne rien manquer
        </LiveItem>
        <LiveItem href="/" icon={AiFillStar} text="S'abonner">
          Abonne-toi et obtiens pleins d'avantages
        </LiveItem>
        <LiveItem
          href="https://www.twitch.tv/dioscure/videos"
          icon={MdReplayCircleFilled}
          text="Replay"
        >
          Accède aux rediffusions des lives
        </LiveItem>
        <LiveItem
          href="https://discord.gg/9vSKPJUTN8"
          icon={BsDiscord}
          text="Discord"
        >
          Rejoins le discord et ne manque aucune actualité
        </LiveItem>
        <LiveItem
          href="https://dixper.gg/dioscure"
          icon={IoGameController}
          text="Dixper"
        >
          Accède a Dixper pour intéragir avec Dioscure
        </LiveItem>
      </section>
    </>
  );
}
