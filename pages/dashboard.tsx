import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  // TODO: Page accessible uniquement aux admins
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

    console.log(data)

    if (!data) return;

    setTournaments(data);
  }

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <section className="p-5 h-96">

      <div className="flex gap-x-4 uppercase font-semibold">
        {tournaments.map((t) => (
          <div>
            <a href={"/tournament/" + t.id} key={t.id}>{t.name}</a>
            <ul>
              {t.teams.map((team: any) => (
                <li key={team.id} className="ml-8">
                  <p>{team.name}</p>
                  <ul>
                    {team.members.map((m: any) => (
                      <li key={m.id+team.id} className="ml-8">{m.user}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href="/tournament/create" className="bg-dark_blue px-4 py-1 rounded">
        Creer un tournoi
      </a>
    </section>
  );
}
