import React, { useState, useEffect } from "react";

const UpcomingHabits = ({ habits, toggleHabit }) => {
  const [timers, setTimers] = useState({});

  // Filtrar hábitos completados y próximos
  const completedHabits = habits.filter((habit) => habit.completed);
  const upcomingHabits = habits.filter((habit) => !habit.completed);

  // Configurar intervalo para actualizar el temporizador
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        Object.keys(updatedTimers).forEach((id) => {
          if (updatedTimers[id] > 0) {
            updatedTimers[id] -= 1;
          } else {
            delete updatedTimers[id]; // Elimina el temporizador cuando llega a 0
          }
        });
        return updatedTimers;
      });
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId);
  }, []);

  // Iniciar el temporizador para un hábito específico
  const handleStartTimer = (id) => {
    const habit = habits.find((habit) => habit.id === id);
    if (habit && habit.timer) { // Verificar que habit.timer esté definido
      setTimers((prevTimers) => ({
        ...prevTimers,
        [id]: habit.timer * 60, // Convertir minutos a segundos
      }));
    }
  };

  // Formatear el tiempo en formato MM:SS min
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} min`;
  };

  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Habits</h2>
        <ul>
          {upcomingHabits.map((habit) => (
            <li key={habit.id} className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(habit.id)}
                  className="form-checkbox"
                />
                <span className={"text-black dark:text-white"}>
                  {habit.name}
                </span>
              </label>
              {timers[habit.id] !== undefined ? (
                <span className="ml-4 text-gray-600 dark:text-gray-300">
                  {formatTime(timers[habit.id])}
                </span>
              ) : (
                <button
                  onClick={() => handleStartTimer(habit.id)}
                  className="ml-4 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                >
                  Start Timer
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Completed Habits</h2>
        <ul>
          {completedHabits.map((habit) => (
            <li key={habit.id} className="mb-2 p-2 bg-green-100 dark:bg-green-600 rounded flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(habit.id)}
                  className="form-checkbox"
                />
                <span className={"line-through text-black dark:text-gray-300"}>
                  {habit.name}
                </span>
              </label>
              {timers[habit.id] !== undefined && (
                <span className="ml-4 text-gray-600 dark:text-gray-300">
                  {formatTime(timers[habit.id])}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingHabits;
