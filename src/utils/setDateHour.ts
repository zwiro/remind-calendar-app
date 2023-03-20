export function setDateHour(date: Date, time: string) {
  const [hours, minutes] = time.split(":")
  const formattedDate = date.setHours(Number(hours), Number(minutes))
  return formattedDate
}
