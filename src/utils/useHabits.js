import { useState } from 'react';

export const useHabits = () => {
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
    { id: 11, name: 'Do 10 minutes of stretching', completed: false, timer: 10 },
    { id: 12, name: 'Read 5 pages of a book', completed: false, timer: 10 },
    { id: 13, name: 'Write a summary of your day', completed: false, timer: 15 },
    { id: 14, name: 'Listen to an educational podcast for 30 minutes', completed: false, timer: 30 },
    { id: 15, name: 'Take a brisk 20-minute walk', completed: false, timer: 20 },
    { id: 16, name: 'Write a personal goal for the week', completed: false, timer: 5 },
    { id: 17, name: 'Review and organize your agenda for the next day', completed: true, timer: 10 },
    { id: 18, name: 'Spend 15 minutes on a personal hobby', completed: false, timer: 15 },
  ]);

  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const addHabit = (name, timer) => {
    setHabits((prevHabits) => [
      ...prevHabits,
      { id: prevHabits.length + 1, name, completed: false, timer }
    ]);
  };

  return { habits, toggleHabit, addHabit };
};
