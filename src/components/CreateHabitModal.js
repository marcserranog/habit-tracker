import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';

const CreateHabitModal = ({ addHabit, closeModal }) => {
  const { theme } = useTheme();  // Obtener el tema actual
  const [habitName, setHabitName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() === '') {
      setError('Introduce a new habit.');
    } else {
      addHabit(habitName);
      setHabitName('');  // Limpiar el campo de entrada
      setError('');      // Limpiar el mensaje de error
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className={`p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-xl font-bold mb-4">Crear Nuevo Hábito</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="habitName" className="block mb-2">
              Nombre del Hábito
            </label>
            <input
              type="text"
              id="habitName"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
            />
            {/* Mostrar mensaje de error si no se ha ingresado un hábito */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHabitModal;
