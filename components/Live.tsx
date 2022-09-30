import { TwitchEmbed, TwitchChat } from "react-twitch-embed";
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
  const embed = useRef();

  const handleReady = (e) => {
    embed.current = e;
  };
  return (
    <>
      <div className="flex text-white container m-auto bg-secondary_blue mt-16">
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
      <section className="flex justify-center gap-7 container m-auto py-10">
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
