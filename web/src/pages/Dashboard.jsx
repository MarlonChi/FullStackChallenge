import { Icons } from "../components/Icons";
import logo from "../assets/logo/logo-fundo-vinho.svg";

export function Dashboard() {
  return (
    <div className="">
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl flex justify-between">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
          <a href="/profile">
            <Icons name="profile" className="w-10" />
          </a>
        </div>
      </header>

      <main>
        <section id="header" className="bg-red-500 text-white p-4">
          <div className="container max-w-3xl space-y-2">
            <span>Olá Marlon</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content">
          conteúdo
        </section>

      </main>
    </div>
  );
}
