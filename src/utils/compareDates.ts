export function compareDates(date1: Date, date2: Date) {
  return date1
    .toLocaleDateString("en-US")
    .localeCompare(date2.toLocaleDateString("en-US"))
}
