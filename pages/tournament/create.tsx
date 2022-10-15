import { supabase } from "../../utils/supabaseClient";
import Button from "../../components/Button";
import { useState } from "react";

export default function CreateTournament() {
  // TODO: Page accessible uniquement aux admins
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [date, setDate] = useState("");
  const [max_team, setMaxTeam] = useState(16);
  const [game, setGame] = useState("");

  async function createTournament(e: any) {
    e.preventDefault();
    const { data, error } = await supabase.from("tournament").insert({
      name,
      description,
      rules,
      date: new Date(date).toISOString().toLocaleString(),
      max_team,
      game,
    });
  }
  return (
    <section className="p-4 md:p-6">
      <h1 className="text-2xl mb-4">Nouveau tournoi</h1>
      <form
        className="flex flex-col gap-y-4 text-sm p-4 md:p-8 md:text-base"
        onSubmit={createTournament}
      >
        <label className="font-semibold">
          Quel est le nom de votre tournoi ?
        </label>
        <input
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="font-semibold">Quand commence-t-il ?</label>
        <input
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          type="date"
          name="date"
          id=""
          value={date}
          onChange={(e) => setDate((e.target as any).value)}
        />
        <label className="font-semibold">Ajoutez une description ?</label>
        <textarea
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label className="font-semibold">Ajoutez des règles ?</label>
        <textarea
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          name="rules"
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        ></textarea>
        <label className="font-semibold">
          Combien de joueurs ou d’équipes voulez-vous ?
        </label>
        <input
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          type="number"
          name="max_team"
          id=""
          value={max_team}
          onChange={(e) => setMaxTeam((e.target as any).value)}
        />
        <label className="font-semibold">
          Quel est le jeu de votre tournoi ?
        </label>
        <input
          className="text-dark_blue rounded-md p-1.5 shadow-lg focus:outline-none focus:ring focus:ring-red_purple"
          type="text"
          name="game"
          id=""
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
        <div className="flex justify-center mt-6">
          <Button class="rounded-lg text-base w-20 justify-center bg-red_purple hover:bg-dark_red_purple md:w-28 md:text-lg">
            Créer
          </Button>
        </div>
      </form>
    </section>
  );
}
