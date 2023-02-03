export default function formatType(type) {
  switch (type) {
    case "Фильм":
      return "1";
    case "Сериал":
      return "2";
    case "Мультфильм":
      return "3";
    case "Аниме":
      return "4";
    case "Мультсериал":
      return "5";
    default:
      return "";
  }
}
