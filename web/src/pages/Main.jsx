import { Navigate } from "react-router-dom";
import { useLocalStorage } from 'react-use';
import imageCover from "../assets/imagem/img.png";
import { Header } from "../components/Header";
import logo from "../assets/logo/logo-fundo-vinho.svg";

export function Main() {
  const [auth] = useLocalStorage('auth', {})
  
  if(auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">
      <Header variant={logo}/>
      <div className="container max-w-4xl flex-1 p-4 flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        
        <div className="md:flex-1 flex justify-center">
          <img src={imageCover} alt="Imagem Capa" className="w-full max-w-md" />
        </div>

        <div className="flex md:flex-1 flex-col space-y-6">
          <h1 className="text-3xl text-center font-bold md:text-left">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>
          <a href="/register" className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl text-center">
            Criar minha conta
          </a>
          <a href="/login" className="text-white border border-white text-xl px-8 py-4 rounded-xl text-center">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  );
}
