import { supabase } from "../utils/supabaseClient";
import TournamentItem from "./TournamentItem";
import { useState, useEffect } from "react";
// Import des react icons
import { GoCalendar } from "react-icons/go";
import { GiOfficeChair } from "react-icons/gi";

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
      <section className="p-6 cursor-default md:p-8">
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
      <section className="p-6 md:p-8">
        <ul className="flex gap-4 font-bold text-base md:text-lg">
          <TournamentItem text="Description" />
          <TournamentItem text="Equipes" />
          <TournamentItem text="Inscription" />
        </ul>
        <span className="text-sm md:text-lg">{tournament?.description}</span>
      </section>
    </>
  );
}
