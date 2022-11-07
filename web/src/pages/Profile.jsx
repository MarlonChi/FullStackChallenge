import { useState, useEffect } from 'react';
import { useLocalStorage, useAsyncFn } from 'react-use';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { format, formatISO } from "date-fns";

import { Icons } from "../components/Icons";
import { MatchCard } from "../components/MatchCard";
import { DateSelect } from "../components/DateSelect";

import logo from "../assets/logo/logo-fundo-vinho.svg";

export function Profile() {
  const params = useParams()
  const navigate = useNavigate()
  const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)));
  const [auth, setAuth] = useLocalStorage('auth', {})

  const [{ value: user, loading, error }, fetchHints] = useAsyncFn(async () => {
    const res = await axios({
      method: 'get',
      baseURL: import.meta.env.VITE_API_URL,
      url: `/${params.username}`,
    })

    const hints = res.data.hints.reduce((acc, hint) => {
      acc[hint.gameId] = hint
      return acc
    }, {})

    return {
      ...res.data,
      hints
    };
  })

  const [games, fetchGames] = useAsyncFn(async (params) => {
    const res = await axios({
      method: 'get',
      baseURL: import.meta.env.VITE_API_URL,
      url: '/games',
      params
    })
    return res.data
  })

  const logout = () => {
    setAuth({})
    navigate('/login')
  }

  const isLoading = games.loading || loading
  const hasError = games.error || error
  const isDone = !isLoading && !hasError

  useEffect(() => {
    fetchHints()
  }, [])

  useEffect(() => {
    fetchGames({ gameTime: currentDate })
  }, [currentDate])

  return (
    <>
      <header className="bg-red-500 text-white p-2">
        <div className="container max-w-3xl flex justify-between">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
          {auth?.user?.id && (
            <div onClick={logout} className="p-2 cursor-pointer">
              Sair
            </div>
          )}
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard">
              <Icons name="back" className="w-10" />
            </a>
            <h3 className="text-2xl font-bold">{user?.name}</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

          <DateSelect currentDate={currentDate} onChange={setDate} />

          <div className="space-y-4">
            {isLoading && 'Carregando jogos...'}
            {hasError && 'Ops! Algo deu errado.'}

            {isDone && games.value?.map(game => {
              <MatchCard
                key={game.id}
                gameId={game.id}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                gameTime={format(new Date(game.gameTime), 'H:mm')}
                homeTeamScore={user?.hints?.[game.id]?.homeTeamScore || ''}
                awayTeamScore={user?.hints?.[game.id]?.awayTeamScore || ''}
                disabled={true}
              />
            })}

          </div>
        </section>
      </main>
    </>
  );
}
