import React from "react";

const UpcomingHabits = ({ habits, toggleHabit }) => {

  const completedHabits = habits.filter((habit) => habit.completed);
  const upcomingHabits = habits.filter((habit) => !habit.completed);

  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Habits</h2>
        <ul>
          {upcomingHabits.map((habit, index) => (
            <li key={index} className="mb-2 p-2 bg-gray-100 rounded">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(index)}
                  className="form-checkbox"
                />
                <span className={"text-black"}>
                  {habit.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Completed Habits</h2>
        <ul>
          {completedHabits.map((habit, index) => (
            <li key={index} className="mb-2 p-2 bg-green-100 rounded">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(index)}
                  className="form-checkbox"
                />
                <span className={"line-through text-black"}>
                  {habit.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingHabits;
