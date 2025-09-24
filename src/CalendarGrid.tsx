import { useEffect, useState } from "react";
import { startOfMonth, startOfWeek } from "date-fns";

type CalendarGridType = {
  date: Date;
};

export function CalendarGrid({ date }: CalendarGridType) {
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  useEffect(() => {
    const generateCalendarDays = () => {
      const startOfCurrentMonth = startOfMonth(date);
      const startOfCalendarWeek = startOfWeek(startOfCurrentMonth, {
        weekStartsOn: 0,
      });

      const days: Date[] = [];
      for (let i = 0; i < 42; i++) {
        const day = new Date(startOfCalendarWeek);
        day.setDate(startOfCalendarWeek.getDate() + i);
        days.push(day);
      }
      setCalendarDays(days);
    };

    generateCalendarDays();
  }, [date]);

  return (
    <div className="grid grid-cols-7 grid-rows-[auto_repeat(6,1fr)] h-[85vh]">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div
          key={day}
          className="p-2 text-center font-semibold text-gray-600 border-x-1 border-b-1 border-neutral-300"
        >
          {day}
        </div>
      ))}

      {calendarDays.map((day, index) => {
        const isCurrentMonth = day.getMonth() === date.getMonth();
        const isToday = day.toDateString() === new Date().toDateString();

        return (
          <div
            key={index}
            className={`p-2 h-full border border-neutral-300 cursor-pointer hover:bg-neutral-100
              ${
                isCurrentMonth
                  ? "text-gray-900"
                  : "text-neutral-500 bg-neutral-200"
              }
              ${isToday ? "bg-blue-100 border-blue-300" : ""}`}
          >
            {day.getDate()}
          </div>
        );
      })}
    </div>
  );
}
