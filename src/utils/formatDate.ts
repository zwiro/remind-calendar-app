export function formatDate(date: Date) {
  const formattedDate = date.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  })

  return formattedDate
}
