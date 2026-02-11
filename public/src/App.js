import React, { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { loadHabits, saveHabits } from "./utils/storage";

export default function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    setHabits(loadHabits());
  }, []);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  const addHabit = (name) => {
    setHabits([
      ...habits,
      {
        id: Date.now(),
        name,
        streak: 0,
        lastCompleted: null
      }
    ]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== id) return habit;

        const today = new Date().toDateString();
        if (habit.lastCompleted === today) return habit;

        return {
          ...habit,
          streak: habit.streak + 1,
          lastCompleted: today
        };
      })
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  return (
    <div className="app">
      <h1>🏃 MoveTrack</h1>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} onToggle={toggleHabit} onDelete={deleteHabit} />
    </div>
  );
}
