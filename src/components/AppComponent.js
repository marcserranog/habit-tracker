import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import Header from './Header';
import HabitPieChart from './HabitPieChart';
import UpcomingHabits from './UpComingHabits';
import CreateHabitModal from './CreateHabitModal';
import BackToTopButton from './BackToTopButton';
import { useHabits } from '../utils/useHabits';
import { useModal } from '../utils/useModal';

const AppContent = () => {
  const { theme } = useTheme();
  const { habits, toggleHabit, addHabit } = useHabits();
  const { isModalOpen, openModal, closeModal } = useModal();

  const completedCount = habits.filter((habit) => habit.completed).length;
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
        onClick={openModal}
        className="fixed bottom-11 right-20 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        + New Habit
      </button>
      {isModalOpen && <CreateHabitModal addHabit={addHabit} closeModal={closeModal} />}
      <BackToTopButton />
    </div>
  );
};

export default AppContent;
