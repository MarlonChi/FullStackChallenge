import { Icons } from "../components/Icons";
import { MatchCard } from "../components/MatchCard";
import { DateSelect } from "../components/DateSelect";
import logo from "../assets/logo/logo-fundo-vinho.svg";

export function Profile() {
  return (
    <>
      <header className="bg-red-500 text-white p-2">
        <div className="container max-w-3xl flex justify-center">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard">
              <Icons name="back" className="w-10" />
            </a>
            <h3 className="text-2xl font-bold">Marlon Chiodelli</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

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
