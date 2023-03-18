export function convertMiliseconds(date: Date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes}`
}
