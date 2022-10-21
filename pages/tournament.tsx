import TournamentSocials from "../components/TournamentSocials";
import TournamentHeader from "../components/TournamentHeader";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../utils/supabaseClient";
import SessionContext from "../context/context";
// Import des react icons
import { BsTwitch, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

export default function Tournoi() {
  const { session } = useContext(SessionContext);
  const [tournament, setTournament] = useState<any>(null);
  const [team, setTeam] = useState<any>(null);

  async function fetchTeam() {
    const { data } = await supabase
      .from("team_users")
      .select(
        `
        *,
        team (
          *
        )
      `
      )
      .eq("team.tournament", tournament.id)
      .eq("users", session?.user.id)
      .single();

    if (!data) return;

    setTeam(data.team);
  }

  async function fetchTournament() {
    // TODO: Recuperer le dernier tournois qui n'est pas encore joué (date > mtn)
    const { data } = await supabase.from("tournament").select("*");
    if (!data) return;
    setTournament(data[0]);
  }

  useEffect(() => {
    fetchTournament();
  }, []);

  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

  return (
    <>
      <TournamentHeader />
      <section className="p-6">
        <span className="text-sm md:text-lg">{tournament?.description}</span>
      </section>
      <section className="p-6">
        <h2 className="text-sm md:text-lg">Mes réseaux :</h2>
        <div className="py-3">
          <TournamentSocials
            href="https://discord.gg/9vSKPJUTN8"
            icon={FaDiscord}
            text="Rejoins le Discord"
          />
          <TournamentSocials
            href="https://www.twitch.tv/dioscure"
            icon={BsTwitch}
            text="Mon Twitch"
          />
          <TournamentSocials
            href="https://twitter.com/Dioscure_"
            icon={BsTwitter}
            text="Mon Twitter"
          />
        </div>
      </section>
      <section className="p-6">
        <span className="text-sm md:text-lg">{tournament?.rules}</span>
      </section>
    </>
  );
}
