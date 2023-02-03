// форматирование времени
export default function formatTime(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours >= 1 ? `${hours}ч ${minutes}м` : `${minutes}м`;
}
