export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function availableTimes(date: string) {
  const day = new Date(`${date}T12:00:00`).getDay();
  const sunday = day === 0;
  const start = sunday ? 16 : 17;
  const end = sunday ? 20 : day === 5 || day === 6 ? 22 : 21;
  return Array.from(
    { length: (end - start) * 2 + 1 },
    (_, i) =>
      `${String(start + Math.floor(i / 2)).padStart(2, "0")}:${i % 2 ? "30" : "00"}`,
  );
}
export function reservationError(
  date: string,
  time: string,
  guests: string,
  today = localDate(),
) {
  const parsed = new Date(`${date}T12:00:00`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(parsed.getTime()) ||
    localDate(parsed) !== date ||
    date < today
  )
    return "Choose a valid date today or later.";
  if (!/^(?:[1-9]|10)$/.test(guests)) return "Choose between 1 and 10 guests.";
  if (!availableTimes(date).includes(time))
    return "Choose a time within the sample opening hours.";
  return "";
}
