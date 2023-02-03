export default function formatOrder(order) {
  switch (order) {
    case "новые":
      return "-1";
    case "старые":
      return "1";
    default:
      return "";
  }
}
