import { Event } from "../types"

export function filterEventsByDate(event: Event, days: number) {
  const miliseconds = days * 86400000
  return (
    new Date(event.date).getTime() - new Date().getTime() > -86400000 &&
    new Date(event.date).getTime() - new Date().getTime() < miliseconds
  )
}
