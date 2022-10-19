import { useState, useEffect,useContext } from "react";
import { supabase } from "../utils/supabaseClient";
import SessionContext from "../context/context";
import TournamentItem from "./TournamentItem";
// Import des react icons
import { GiOfficeChair } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";

export default function TournamentHeader() {
  const [tournament, setTournament] = useState<any>(null);
  const { session } = useContext(SessionContext);
  const [team, setTeam] = useState<any>(null);

  async function fetchTournament() {
    // TODO: Recuperer le dernier tournois qui n'est pas encore joué (date > mtn)
    const { data } = await supabase.from("tournament").select("*");

    if (!data) return;
    setTournament(data[0]);
  }

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
  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

  useEffect(() => {
    fetchTournament();
  }, []);

  return (
    <>
      <section className="p-6 cursor-default md:px-8 md:py-12">
        <span className="uppercase md:text-base">{tournament?.game}</span>
        <h1 className="font-semibold italic text-lg md:text-2xl">
          {tournament?.name}
        </h1>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <GoCalendar />
            {tournament?.date}
          </span>
          <span className="flex items-center gap-1">
            <GiOfficeChair />
            {tournament?.max_team}
          </span>
        </div>
      </section>
      <section className="bg-dark_blue px-2 bg-opacity-50 md:py-2 md:px-10">
        <ul className="flex gap-x-3 font-bold text-base md:text-lg md:gap-x-8">
          <TournamentItem href="/tournament" text="Description" />
          <TournamentItem href="/tournament/teams" text="Participants" />
          {team === null && (
            <TournamentItem href="/tournament/inscription" text="S'inscrire" />
          )}
          {team !== null && (
            <TournamentItem href="/tournament/inscription" text="Se désinscrire" />
          )}
        </ul>
      </section>
    </>
  );
}
