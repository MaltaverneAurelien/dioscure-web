import { supabase } from "../utils/supabaseClient";
import TournamentItem from "./TournamentItem";
import { useState, useEffect } from "react";
// Import des react icons
import { GiOfficeChair } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";

export default function TournamentHeader() {
  const [tournament, setTournament] = useState<any>(null);

  async function fetchTournament() {
    // TODO: Recuperer le dernier tournois qui n'est pas encore joué (date > mtn)
    const { data } = await supabase.from("tournament").select("*");
    if (!data) return;
    setTournament(data[0]);
  }

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
      <section className="px-2 md:px-10">
        <ul className="flex gap-x-3 font-bold text-base md:text-lg md:gap-x-8">
          <TournamentItem href="/tournament" text="Description" />
          <TournamentItem href="/tournament/teams" text="Equipes" />
          <TournamentItem href="/tournament/inscription" text="S'inscrire" />
        </ul>
      </section>
    </>
  );
}
