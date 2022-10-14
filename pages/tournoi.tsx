import { supabase } from "../utils/supabaseClient";
import Button from "../components/Button";
import { useEffect, useState, useContext } from "react";
import SessionContext from "../context/context";

export default function Tournoi() {
  const [tournament, setTournament] = useState<any>(null);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");

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

  useEffect(() => {
    fetchTournament();
  }, []);

  async function handleCreate(e: any) {
    e.preventDefault();

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
      user: session?.user.id,
      team: team.id
    });


    setTeamName("")
  }

  async function handleJoin(e: any) {
    e.preventDefault()

    // TODO: Handle Join faire un select sur Team, si la condition est bonne, on ajoute user dans team_user (doc supabase js, where)
  }

  return (
    <>
      <section className="p-5 h-96">
        <div className="flex gap-x-4 text-white uppercase font-semibold">
          {tournament?.name}
        </div>
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
                onChange={(e) => setTeamName(e.target.value)}
              />
              <button>Create Team</button>
            </form>
          )}
          {showJoinForm === true && (
            <form className="flex flex-col gap-y-4 w-1/3" onSubmit={handleJoin}>
              <label htmlFor="team_name">Team ID</label>
              <input
                type="text"
                name="team_id"
                className="text-black"
                onChange={(e) => setTeamId(e.target.value)}
              />
              <button>Join Team</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
