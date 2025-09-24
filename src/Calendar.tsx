import { useEffect, useState } from "react";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { addMonths, subMonths } from "date-fns";

export function Calendar() {
  const [date, setDate] = useState<Date>(() => new Date());

  const handlePreviousMonth = () => {
    setDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setDate((prev) => addMonths(prev, 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (date.getDay() === new Date().getDate()) {
        setDate(new Date());
      }
      console.log(date);
      console.log(date.getMonth());
    }, 6000); // Every minute

    return () => clearInterval(interval);
  }, [date]);

  return (
    <main className="bg-neutral-50 w-full h-screen">
      <CalendarHeader
        month={date.getMonth()}
        year={date.getFullYear()}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid date={date} />
    </main>
  );
}
