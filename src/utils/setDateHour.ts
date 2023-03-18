export function setDateHour(date: Date, time: string) {
  const hours = time.split(":")
  const formattedDate = date.setHours(...hours)
  return formattedDate
}
