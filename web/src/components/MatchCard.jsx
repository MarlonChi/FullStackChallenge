export function MatchCard({ timeA, timeB, match }) {
  return (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-700 font-bold">
        {match.time}
      </span>
      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{timeA.slug}</span>
        <img src={`/assets/flags/${timeA.slug}.png`} alt={timeA.name} />

        <input
          type="number"
          className="self-stretch bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
          min={0}
        />

        <span className="text-red-500 font-bold">X</span>

        <input
          type="number"
          className="self-stretch bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
          min={0}
        />

        <img src={`/assets/flags/${timeB.slug}.png`} alt={timeB.name} />
        <span className="uppercase">{timeB.slug}</span>
      </div>
    </div>
  );
}
