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
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getStartDayIndex = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const getMonthData = (year: number, month: number): CalendarEntry[] => {
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    return groupedData[key] || [];
  };

  const goToPreviousMonth = () => {
    if (currentYear === 2025 && currentMonth === 0) return;
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
    setSelectedNote(null);
  };

  const goToNextMonth = () => {
    if (currentYear === 2025 && currentMonth === 11) return;
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
    setSelectedNote(null);
  };

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

  const isPreviousDisabled = currentYear === 2025 && currentMonth === 0;
  const isNextDisabled = currentYear === 2025 && currentMonth === 11;

  return (
    <div className="max-w-5xl relative mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          disabled={isPreviousDisabled}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            isPreviousDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <p className="md:block hidden">Previous</p>
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1e3a8a]">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <p className="text-sm text-gray-600 mt-1">St. Michel's Calendar</p>
        </div>

        <button
          onClick={goToNextMonth}
          disabled={isNextDisabled}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            isNextDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1e3a8a] text-white hover:bg-accent"
          }`}
        >
          <p className="md:block hidden">Next</p>
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* Selected Note Display */}
      {selectedNote && (
        <div className="mb-4 bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-3 rounded-md shadow-sm text-sm sm:text-base">
          {selectedNote}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 bg-gray-100 rounded-lg p-2 sm:p-4 shadow-md">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-700 uppercase text-xs sm:text-sm py-1"
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
            <button
              key={idx}
              onClick={() => entry && setSelectedNote(entry.Note)}
              className={`aspect-square w-full border rounded-lg text-xs sm:text-sm p-1 flex items-start justify-start transition-all duration-150 ${
                entry
                  ? `bg-white hover:shadow-md text-left ${
                      entry.Note.toLowerCase().includes("holiday")
                        ? "bg-red-300 border-red-600"
                        : entry.Note == ""
                        ? ""
                        : "bg-green-300 border-green-600"
                    } ${isToday ? "ring-2 ring-blue-500 bg-blue-50" : ""}`
                  : "bg-gray-50"
              }`}
            >
              {entry && (
                <span
                  className={`font-semibold ${
                    isToday ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {entry.Date}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
