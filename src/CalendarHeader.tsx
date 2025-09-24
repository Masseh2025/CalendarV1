import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";

type CalendarHeaderType = {
  month: number;
};

export function CalendarHeader({ month }: CalendarHeaderType) {
  return (
    <div className="h-[15vh] flex justify-center items-baseline">
      <ChevronUpCircle
        size={24}
        className="text-neutral-600 hover:text-blue-500 cursor-pointer"
      />

      <h1 className="text-4xl font-bold text-neutral-800 p-4 text-center">
        {monthNames[month]}
      </h1>
      <ChevronDownCircle
        size={24}
        className="text-neutral-600 hover:text-blue-500 cursor-pointer"
      />
    </div>
  );
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  ``,
];
