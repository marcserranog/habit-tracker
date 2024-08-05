import React from 'react';

const UpcomingHabits = ({ habits, toggleHabit }) => {
  return (
    <div className="upcoming-habits">
      <h2>Upcoming Habits</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(index)}
              />
              {habit.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingHabits;
