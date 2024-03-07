export default function convertDate(timestamp: number): string {
  // Convert the Unix timestamp to milliseconds (JavaScript uses milliseconds)
  const date = new Date(timestamp * 1000);
  // Format the date to Czech locale
  const formattedDate = date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}
