const KEY = "movetrack_habits";

export const loadHabits = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveHabits = (habits) => {
  localStorage.setItem(KEY, JSON.stringify(habits));
};
