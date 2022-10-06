import { Icons } from "../components/Icons";
import { MatchCard } from "../components/MatchCard";
import { DateSelect } from "../components/DateSelect";

import logo from "../assets/logo/logo-fundo-vinho.svg";

export function Dashboard() {
  return (
    <>
      <header className="bg-red-500 text-white p-2">
        <div className="container max-w-3xl flex justify-between">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
          <a href="/profile">
            <Icons name="profile" className="w-10" />
          </a>
        </div>
      </header>

      <main>
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Olá Marlon</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect />

          <div className="space-y-4">
            <MatchCard
              timeA={{ slug: "sui", name: "Suiça" }}
              timeB={{ slug: "cam", name: "Camarões" }}
              match={{ time: "7:00" }}
            />

            <MatchCard
              timeA={{ slug: "uru", name: "Uruguai" }}
              timeB={{ slug: "cor", name: "Correia" }}
              match={{ time: "7:00" }}
            />

            <MatchCard
              timeA={{ slug: "por", name: "Portugal" }}
              timeB={{ slug: "gan", name: "Gana" }}
              match={{ time: "7:00" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
