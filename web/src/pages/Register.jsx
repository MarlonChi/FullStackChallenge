import { Header } from "../components/Header";
import logo from "../assets/logo/logo-fundo-branco.svg";
import { Input } from "../components/Input";
import { Icons } from "../components/Icons";

export function Register() {
  return (
    <>
      <div className="flex justify-center p-4 border-b border-red-300">
        <Header variant={logo} />
      </div>
      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icons name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>
        <form className="p-4 space-y-6">
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            label="Seu nome"
          />

          <Input
            name="username"
            type="text"
            placeholder="Crie um nome de usuário"
            label="Seu username"
          />

          <Input
            name="email"
            type="text"
            placeholder="Digite seu melhor e-mail"
            label="Seu e-mail"
          />

          <Input
            name="password"
            type="password"
            placeholder="Crie uma senha"
            label="Sua senha"
          />

          <a
            href="/dashboard"
            className="block w-full text-white bg-red-500 px-6 py-3 rounded-xl text-center"
          >
            Criar minha conta
          </a>
        </form>
      </main>
    </>
  );
}