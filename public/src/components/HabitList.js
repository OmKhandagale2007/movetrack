import React from "react";
import HabitItem from "./HabitItem";

export default function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) {
    return <p className="empty">No habits yet. Start moving 🚀</p>;
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
