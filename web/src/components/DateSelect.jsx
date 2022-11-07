import { addDays, subDays, format, formatISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Icons } from "./Icons";

export function DateSelect({ currentDate, onChange }) {
  const date = new Date(currentDate)
  const prevDay = () => {
    const prevDate = subDays(date, 1)
    onChange(formatISO(prevDate))
  }

  const nextDay = () => {
    const nextDate = addDays(date, 1)
    onChange(formatISO(nextDate))
  }

  return (
    <div className="p-4 flex space-x-4 items-center justify-center">
      <Icons name="arrowLeft" className="w-6 text-red-500 cursor-pointer" onClick={prevDay} />
      <span className="font-bold">{format(date, "d 'de' MMMM", { locale: ptBR })}</span>
      <Icons name="arrowRight" className="w-6 text-red-500 cursor-pointer" onClick={nextDay} />
    </div>
  );
};