import { useState } from "react";
import { addDays, subDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Icons } from "./Icons";

export function DateSelect() {
    const [currentDate, setCurrentDate] = useState(new Date("2022-11-20T00:00:00Z"));
  
    const prevDay = () => {
      const prevDate = subDays(currentDate, 1)
      setCurrentDate(prevDate)
    }
  
    const nextDay = () => {
      const nextDate = addDays(currentDate, 1)
      setCurrentDate(nextDate)
    }
  
    return (
      <div className="p-4 flex space-x-4 items-center justify-center">
        <Icons name="arrowLeft" className="w-6 text-red-500 cursor-pointer" onClick={prevDay}/>
        <span className="font-bold">{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</span>
        <Icons name="arrowRight" className="w-6 text-red-500 cursor-pointer" onClick={nextDay}/>
      </div>
    );
  };