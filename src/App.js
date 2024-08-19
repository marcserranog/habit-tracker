// App.js
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Header from './components/Header';
import HabitPieChart from './components/HabitPieChart';
import CreateHabitModal from './components/CreateHabitModal';
import BackToTopButton from './components/BackToTopButton';
import UpcomingHabits from './components/UpComingHabits';
import './index.css';

const AppContent = () => {
  const { theme } = useTheme();

  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: false, timer: 60 },
    { id: 2, name: 'Read a book', completed: true, timer: 10 },
    { id: 3, name: 'Meditate', completed: false, timer: 10 },
    { id: 4, name: 'Write how you feel about today', completed: false, timer: 1 },
    { id: 5, name: 'Drink 8 glasses of water', completed: true, timer: 0 },
    { id: 6, name: 'Plan your day in the morning', completed: false, timer: 5 },
    { id: 7, name: 'Learn 10 new words', completed: false, timer: 15 },
    { id: 8, name: 'Limit social media usage', completed: false, timer: 30 },
    { id: 9, name: 'Cook a healthy meal', completed: true, timer: 45 },
    { id: 10, name: 'Practice gratitude (write 3 things)', completed: false, timer: 5 },
    { id: 11, name: 'Practice a new language for 30 minutes', completed: false, timer: 30 },
    { id: 12, name: 'Do 20 minutes of stretching', completed: false, timer: 20 },
    { id: 14, name: 'Spend 15 minutes on a creative hobby', completed: false, timer: 15 },
    { id: 15, name: 'Review your goals for the week', completed: false, timer: 10 },
    { id: 16, name: 'Take a 10-minute walk outdoors', completed: false, timer: 10 },
    { id: 17, name: 'Practice deep breathing exercises', completed: false, timer: 5 },
    { id: 18, name: 'Declutter a small area', completed: false, timer: 15 },
    { id: 19, name: 'Connect with a friend or family member', completed: false, timer: 20 },
    { id: 20, name: 'Read an article or watch a documentary', completed: false, timer: 30 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleHabit = (id) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(newHabits);
  };

  const addHabit = (name, timer) => {
    const newHabit = { id: habits.length + 1, name, completed: false, timer };
    setHabits([...habits, newHabit]);
    setIsModalOpen(false); 
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const totalCount = habits.length;
  const percentageCompleted = (completedCount / totalCount) * 100;

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} pt-20`}>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <HabitPieChart percentage={percentageCompleted} />
        <UpcomingHabits habits={habits} toggleHabit={toggleHabit} />
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-11 right-20 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        + New Habit
      </button>
      {isModalOpen && <CreateHabitModal addHabit={addHabit} closeModal={() => setIsModalOpen(false)} />}
      <BackToTopButton/>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;