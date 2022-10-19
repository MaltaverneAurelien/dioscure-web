import { useEffect, useState, useContext } from "react";
import { supabase } from "../utils/supabaseClient";
import SessionContext from "../context/context";
import Button from "../components/Button";
import { IoFileTray } from "react-icons/io5";

export default function TournamentInscription() {
  const { session } = useContext(SessionContext);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [tournament, setTournament] = useState<any>(null);
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");
  const [team, setTeam] = useState<any>(null);

  function createClick() {
    setShowCreateForm(true);
    setShowJoinForm(false);
  }
  function joinClick() {
    setShowJoinForm(true);
    setShowCreateForm(false);
  }

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

  async function leaveClick() {
    await supabase
      .from("team_users")
      .delete()
      .eq("team", team.id)
      .eq("users", session?.user.id);

    const { data } = await supabase
      .from("team_users")
      .select()
      .eq("team", team.id);
    
    if (data?.length === 0) {
      await supabase.from("team").delete().eq("id", team.id);
    }
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

  useEffect(() => {
    if (session && tournament) fetchTeam();
  }, [session, tournament]);

  useEffect(() => {
    fetchTournament();
  }, []);

  return (
    <>
      {team === null && (
        <section className="py-4 md:py-8">
          <div className="flex justify-center gap-x-4 md:w-auto">
            <div>
              <Button
                class="text-sm rounded-sm border justify-center text-white bg-yellow hover:bg-dark_yellow md:px-8 md:text-lg md:w-72"
                onClick={createClick}
              >
                Créer une équipe
              </Button>
            </div>
            <div>
              <Button
                class="text-sm rounded-sm border justify-center text-white bg-yellow hover:bg-dark_yellow md:px-8 md:text-lg md:w-72"
                onClick={joinClick}
              >
                Rejoindre une équipe
              </Button>
            </div>
          </div>
          <div className="flex justify-center p-6">
            {showCreateForm === true && (
              <form
                onSubmit={handleCreate}
                className="flex flex-col gap-y-4 mb-8 md:w-1/3"
              >
                <label htmlFor="team_name" className="font-semibold">
                  Nom d'équipe :
                </label>
                <input
                  type="text"
                  name="team_name"
                  className="text-dark_blue rounded-md p-1.5 font-medium shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Equipe"
                />
                <div className="flex justify-center">
                  <Button class="rounded-lg text-base w-20 justify-center bg-red_purple hover:bg-dark_red_purple md:w-28 md:text-lg">
                    Valider
                  </Button>
                </div>
              </form>
            )}
            {showJoinForm === true && (
              <form
                className="flex flex-col gap-y-4 mb-8 md:w-1/3"
                onSubmit={handleJoin}
              >
                <label htmlFor="team_name" className="font-semibold">
                  ID de l'équipe :
                </label>
                <input
                  type="text"
                  name="team_id"
                  className="text-dark_blue rounded-md p-1.5 font-medium shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  placeholder="#15"
                />
                <div className="flex justify-center">
                  <Button class="rounded-lg text-base w-20 justify-center bg-red_purple hover:bg-dark_red_purple md:w-28 md:text-lg">
                    Valider
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}
      {team !== null && (
        <section>
          <p className="flex justify-center font-semibold">Mon équipe :</p>
          <div className="flex justify-center md:gap-x-8 md:my-8">
            <Button
              class="rounded-lg text-base w-20 justify-center bg-red_purple hover:bg-dark_red_purple md:w-28 md:text-lg"
              onClick={leaveClick}
            >
              Quitter
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
