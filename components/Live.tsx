import { TwitchEmbed, TwitchChat, TwitchEmbedInstance } from "react-twitch-embed";
import Button from "../components/Button";
import LiveItem from "../components/Liveitem";
import { useRef } from "react";
// Import des react icons
import { AiFillPlaySquare, AiFillStar } from "react-icons/ai";
import { MdReplayCircleFilled } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Live() {
  const embed = useRef<TwitchEmbedInstance>();

  const handleReady = (e:  TwitchEmbedInstance) => {
    embed.current = e;
  };
  return (
    <>
      <div className="bg-secondary_blue md:flex md:justify-start md:mt-16">
        <Button
          class="text-lg uppercase"
          icon={AiFillPlaySquare}
          iconClass="text-2xl"
        >
          Dioscure - Offline
        </Button>
      </div>
      <section className="flex flex-col justify-center m-auto md:flex-row">
        <TwitchEmbed
          channel="dioscure"
          autoplay={true}
          muted
          width={"100%"}
          height={600}
          allowFullscreen
          withChat={false}
          darkMode
          hideControls={false}
          onVideoReady={handleReady}
        />
        <TwitchChat channel="dioscure" height={600} width={"100%"} darkMode />
      </section>
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
