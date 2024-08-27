// utils/getNextSevenDays.js

export function getNextSevenDays() {
  const today = new Date();
  const nextSevenDays = [];

  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextSevenDays.push(nextDay);
  }

  return nextSevenDays;
}
