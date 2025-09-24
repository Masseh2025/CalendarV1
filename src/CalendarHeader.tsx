import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";

type CalendarHeaderType = {
  month: number;
  year: number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
};

export function CalendarHeader({
  month,
  year,
  onPreviousMonth,
  onNextMonth,
}: CalendarHeaderType) {
  return (
    <header className="w-full flex justify-center">
      <div className="h-[15vh] w-full flex justify-center items-baseline pt-4 font-mono relative">
        <ChevronUpCircle
          size={32}
          className="text-neutral-600 hover:text-blue-500 cursor-pointer transition-colors mr-30"
          onClick={onPreviousMonth}
        />

        <h1 className="text-4xl font-bold text-neutral-800 font-mono absolute">
          {monthNames[month]} {year}
        </h1>

        <ChevronDownCircle
          size={32}
          className="text-neutral-600 hover:text-blue-500 cursor-pointer transition-colors ml-30"
          onClick={onNextMonth}
        />
      </div>
    </header>
  );
}

const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
