type CalendarHeaderType = {
  month: number;
};

export function CalendarHeader({ month }: CalendarHeaderType) {
  return (
    <div className="h-[15vh]">
      <h1>Today is {monthNames[month]}</h1>
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
