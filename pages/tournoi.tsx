import TournamentHeader from "../components/TournamentHeader";
import { useEffect, useState, useContext } from "react";
import { supabase } from "../utils/supabaseClient";
import SessionContext from "../context/context";
import Button from "../components/Button";

export default function Tournoi() {
  const [tournament, setTournament] = useState<any>(null);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");
  const [team, setTeam] = useState<any>(null);

  const { session } = useContext(SessionContext);

  function createClick() {
    setShowCreateForm(true);
    setShowJoinForm(false);
  }
  function joinClick() {
    setShowJoinForm(true);
    setShowCreateForm(false);
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

  async function handleCreate(e: any) {
    e.preventDefault();
    console.log(teamName);
    const { data: team } = await supabase
      .from("team")
      .insert({
        name: teamName,
        tournament: tournament.id,
      })
      .select()
      .single();

    if (!team) return alert("wtf");

    const { data: team_member } = await supabase.from("team_users").insert({
      users: session?.user.id,
      team: team.id,
    });

    setTeamName("");
    setTeam(team);
  }

  async function handleJoin(e: any) {
    e.preventDefault();
    const { data: team } = await supabase
      .from("team")
      .select()
      .eq("id", teamId)
      .single();

    if (!team) return;

    const { data: team_member } = await supabase.from("team_users").insert({
      users: session?.user.id,
      team: team.id,
    });

    setTeamId("");
    setTeam(team);
  }

  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

  return (
    <>
      <TournamentHeader />

      {team === null && (
        <section>
          <div className="flex justify-center gap-x-8">
            <Button
              class="bg-orange text-lg font-bold uppercase p-3"
              onClick={createClick}
            >
              CREER
            </Button>
            <Button
              class="bg-orange text-lg font-bold uppercase p-3"
              onClick={joinClick}
            >
              REJOINDRE
            </Button>
          </div>
          <div className="flex justify-center">
            {showCreateForm === true && (
              <form
                onSubmit={handleCreate}
                className="flex flex-col gap-y-4 w-1/3"
              >
                <label htmlFor="team_name">Nom d'équipe :</label>
                <input
                  type="text"
                  name="team_name"
                  className="text-black"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <button>Crée</button>
              </form>
            )}
            {showJoinForm === true && (
              <form
                className="flex flex-col gap-y-4 w-1/3"
                onSubmit={handleJoin}
              >
                <label htmlFor="team_name">ID de l'équipe :</label>
                <input
                  type="text"
                  name="team_id"
                  className="text-black"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                />
                <button>Rejoindre</button>
              </form>
            )}
          </div>
        </section>
      )}
    </>
  );
}
