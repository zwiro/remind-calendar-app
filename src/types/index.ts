export interface Event {
  id: string
  title: string
  description: string
  location: string
  date: string
  time: string
  category: "private" | "work"
}
