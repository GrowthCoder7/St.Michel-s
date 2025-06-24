import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import calendarData from "../calendarData.json";

type CalendarEntry = {
  Date: number;
  Day: string | null;
  Note: string;
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
];

// ✅ Fixed: Group by month using known month day counts for 2025
const groupCalendarData = (data: CalendarEntry[]) => {
  const grouped: Record<string, CalendarEntry[]> = {};

  const monthDayCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // For 2025
  let index = 0;

  for (let month = 0; month < 12; month++) {
    const count = monthDayCounts[month];
    const monthEntries = data.slice(index, index + count);
    const key = `2025-${String(month + 1).padStart(2, "0")}`;
    grouped[key] = monthEntries;
    index += count;
  }

  return grouped;
};

const groupedData = groupCalendarData(calendarData);

const CalendarGrid: React.FC = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayIndex = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getMonthData = (year: number, month: number): CalendarEntry[] => {
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    return groupedData[key] || [];
  };

  const goToPreviousMonth = () => {
    if (currentYear === 2025 && currentMonth === 0) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentYear === 2025 && currentMonth === 11) return;
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  //   const goToCurrentMonth = () => {
  //     setCurrentYear(today.getFullYear());
  //     setCurrentMonth(today.getMonth());
  //   };

  const data = getMonthData(currentYear, currentMonth);
  const startDayIndex = getStartDayIndex(currentYear, currentMonth);
  const totalDays = getDaysInMonth(currentYear, currentMonth);

  const cells: (CalendarEntry | null)[] = Array(startDayIndex).fill(null);
  for (let day = 1; day <= totalDays; day++) {
    const entry = data.find((e) => e.Date === day);
    cells.push(entry || { Date: day, Day: "", Note: "" });
  }

  const totalCells = Math.ceil(cells.length / 7) * 7;
  while (cells.length < totalCells) cells.push(null);

  //   const isCurrentMonth =
  //     currentYear === today.getFullYear() && currentMonth === today.getMonth();
  const isPreviousDisabled = currentYear === 2025 && currentMonth === 0;
  const isNextDisabled = currentYear === 2025 && currentMonth === 11;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          disabled={isPreviousDisabled}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            isPreviousDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1e3a8a]">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <p className="text-sm text-gray-600 mt-1">St. Michel's Calendar</p>
        </div>

        <button
          onClick={goToNextMonth}
          disabled={isNextDisabled}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            isNextDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* {!isCurrentMonth && (
        <div className="text-center mb-4">
          <button
            onClick={goToCurrentMonth}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Go to Current Month
          </button>
        </div>
      )} */}

      {/* Grid */}
      <div className="grid grid-cols-7 gap-2 bg-gray-100 rounded-lg p-4 shadow-lg">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-700 uppercase text-sm py-2"
          >
            {day}
          </div>
        ))}

        {cells.map((entry, idx) => {
          const isToday =
            entry &&
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            entry.Date === today.getDate();

          return (
            <div
              key={idx}
              className={`h-28 border rounded-lg p-2 flex flex-col justify-between shadow-sm transition-all duration-150 ${
                entry
                  ? `bg-white hover:shadow-md ${
                      entry.Note.toLowerCase().includes("holiday")
                        ? "bg-red-100 border-red-300"
                        : ""
                    } ${isToday ? "ring-2 ring-blue-500 bg-blue-50" : ""}`
                  : "bg-gray-50"
              }`}
            >
              {entry && (
                <>
                  <div
                    className={`text-sm font-semibold ${
                      isToday ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {entry.Date}
                  </div>
                  <div
                    style={{
                      overflow: "auto",
                      scrollbarWidth: "none", // Firefox
                      msOverflowStyle: "none", // IE 10+
                    }}
                    className="text-xs text-gray-500 overflow-auto max-h-[3.5rem]"
                  >
                    <p className="whitespace-pre-wrap break-words leading-snug">
                      {entry.Note || ""}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-sm text-gray-600">
        {data.length > 0
          ? `${data.length} event${data.length !== 1 ? "s" : ""} this month`
          : "No events this month"}
      </div>
    </div>
  );
};

export default CalendarGrid;
