import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext'; // Importa el hook useTheme

const CreateHabitModal = ({ addHabit, closeModal }) => {
  const { theme } = useTheme(); // Obtén el tema actual
  const [name, setName] = useState('');
  const [timer, setTimer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Introduce a habit.');
      return;
    }
    if (!timer || isNaN(timer) || timer <= 0) {
      setError('Please enter a valid timer');
      return;
    }
    addHabit(name, parseInt(timer));
    setName('');
    setTimer('');
    setError('');
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}>
      <div className={`p-6 rounded-lg shadow-lg w-full max-w-md ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
        <h2 className="text-2xl font-bold mb-4">Create New Habit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Habit Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-gray-700 border-gray-600'}`}
              placeholder="Enter habit name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="timer" className="block text-sm font-medium mb-1">Timer (in minutes)</label>
            <input
              id="timer"
              type="number"
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
              className={`w-full p-2 border rounded ${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-gray-700 border-gray-600'}`}
              placeholder="Enter timer in minutes"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${theme === 'light' ? 'bg-blue-600' : 'bg-blue-800'}`}
          >
            Add Habit
          </button>
          <button
            type="button"
            onClick={closeModal}
            className={`ml-4 font-bold py-2 px-4 rounded ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-600 text-white'}`}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHabitModal;
