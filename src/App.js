import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Header from './components/Header';
import HabitPieChart from './components/HabitPieChart';
import UpcomingHabits from './components/UpComingHabits';
import './index.css'; // Tailwind CSS

const AppContent = () => {
  const { theme } = useTheme();

  /* Estado inicial de los habitos */
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: false },
    { id: 2, name: 'Read', completed: true },
    { id: 3, name: 'Meditate', completed: false },
  ]);

  /* Funcion para alternar el estado (completado o no) de un habito */
  const toggleHabit = (id) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(newHabits);
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const totalCount = habits.length;
  const percentageCompleted = (completedCount / totalCount) * 100;

  return (
    <div className={`App ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <HabitPieChart percentage={percentageCompleted} />
        <UpcomingHabits habits={habits} toggleHabit={toggleHabit} />
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
