import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Header from './components/Header';
import HabitPieChart from './components/HabitPieChart';
import UpcomingHabits from './components/UpComingHabits';
import CreateHabitModal from './components/CreateHabitModal';
import './index.css'; // Tailwind CSS

const AppContent = () => {
  const { theme } = useTheme();

  /* Estado inicial de los habitos */
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: false },
    { id: 2, name: 'Read', completed: true },
    { id: 3, name: 'Meditate', completed: false },
  ]);

  /* Estado para controlar la visibilidad del modal */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Funcion para alternar el estado (completado o no) de un habito */
  const toggleHabit = (id) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(newHabits);
  };

  /* Funcion para añadir un nuevo hábito */
  const addHabit = (name) => {
    const newHabit = { id: habits.length + 1, name, completed: false };
    setHabits([...habits, newHabit]);
    setIsModalOpen(false); // Cerrar el modal después de agregar el hábito
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
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-10 right-10 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        + New Habit
      </button>
      {/* Modal para crear un nuevo hábito */}
      {isModalOpen && <CreateHabitModal addHabit={addHabit} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};


const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
