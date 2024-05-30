export default function formatDate(date) {
  return new Date(date).toLocaleDateString("es-SP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}