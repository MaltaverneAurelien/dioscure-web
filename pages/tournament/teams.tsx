import TournamentHeader from "../../components/TournamentHeader";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Teams() {
  const [tournaments, setTournaments] = useState<any[]>([]);

  async function fetchTournaments() {
    // TODO: Add users to query
    const { data, error } = await supabase.from("tournament").select(`
        id,
        name,
        teams:team (
          id,
          name,
          members:team_users (
            id,
            user:users
          )
        ) 
      `);

    console.log(data);

    if (!data) return;

    setTournaments(data);
  }

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <>
      <TournamentHeader />
      <section className="px-2 py-4 cursor-default md:px-6 md:py-8">
        {tournaments.map((t) => (
          <ul className="flex flex-wrap">
            {t.teams.map((team: any) => (
              <li key={team.id} className="flex flex-col rounded-2xl m-4 border bg-dark_blue transition-all duration-500 hover:bg-white hover:text-dark_blue hover:border-dark_blue">
                <p className="p-2 font-semibold">Equipe : {team.name} #{team.id}</p>
                <ul className="flex gap-x-4 p-2">
                  {team.members.map((m: any) => (
                    <li key={m.id + team.id} className="flex flex-col">
                      <p className="italic">Joueur :</p>
                      <p className="font-semibold">{m.user}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ))}
      </section>
    </>
  );
}
