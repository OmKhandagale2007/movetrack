import React from "react";

export default function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <div className="habit-item">
      <div>
        <strong>{habit.name}</strong>
        <div className="streak">🔥 {habit.streak} day streak</div>
      </div>
      <div className="actions">
        <button onClick={() => onToggle(habit.id)}>Done</button>
        <button className="delete" onClick={() => onDelete(habit.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
