import { supabase } from "../utils/supabaseClient";
import Button from "../components/Button";
import { useEffect, useState, useContext } from "react";
import SessionContext from "../context/context";
// Import des react icons
import { GoCalendar } from "react-icons/go";
import { GiOfficeChair } from "react-icons/gi";

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
    fetchTournament();
  }, []);

  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

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
        <div className="flex gap-4 font-bold text-lg">
          <span>Description</span>
          <span>Equipes</span>
          <span className="text-orange">{team?.name} #{team?.id}</span>
        </div>
        <span>{tournament?.description}</span>
      </section>
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
                <label htmlFor="team_name">Team Name</label>
                <input
                  type="text"
                  name="team_name"
                  className="text-black"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <button>Create Team</button>
              </form>
            )}
            {showJoinForm === true && (
              <form
                className="flex flex-col gap-y-4 w-1/3"
                onSubmit={handleJoin}
              >
                <label htmlFor="team_name">Team ID</label>
                <input
                  type="text"
                  name="team_id"
                  className="text-black"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                />
                <button>Join Team</button>
              </form>
            )}
          </div>
        </section>
      )}
    </>
  );
}
