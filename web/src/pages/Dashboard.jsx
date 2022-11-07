import { useEffect, useState } from "react";
import { useLocalStorage, useAsyncFn } from 'react-use';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { format, formatISO } from "date-fns";

import { Icons } from "../components/Icons";
import { MatchCard } from "../components/MatchCard";
import { DateSelect } from "../components/DateSelect";

import logo from "../assets/logo/logo-fundo-vinho.svg";

export const Dashboard = () => {
  const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)));
  const [auth] = useLocalStorage('auth', {})

  const [{value: user, loading, error}, fetchHints] = useAsyncFn(async () => {
    const res = await axios({
      method: 'get',
      baseURL: import.meta.env.VITE_API_URL,
      url: `/${auth.user.username}`,
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

  const isLoading = games.loading || loading
  const hasError = games.error || error
  const isDone = !isLoading && !hasError 

  useEffect(() => {
    fetchHints()
  }, [])

  useEffect(() => {
    fetchGames({ gameTime: currentDate })
  }, [currentDate])

  if (!auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <>
      <header className="bg-red-500 text-white p-2">
        <div className="container max-w-3xl flex justify-between">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
          <a href={`/${auth?.user?.username}`}>
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
              />
            })}

          </div>
        </section>
      </main>
    </>
  );
}
