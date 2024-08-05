import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Header from './components/Header';
import HabitPieChart from './components/HabitPieChart';
import UpcomingHabits from './components/UpComingHabits';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  const [habits, setHabits] = useState([
    { name: 'Exercise', completed: false },
    { name: 'Read', completed: true },
    { name: 'Meditate', completed: false },
  ]);

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const totalCount = habits.length;
  const percentageCompleted = (completedCount / totalCount) * 100;

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="content">
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
