export interface Event {
  id: string
  title: string
  description: string
  location: string
  date: string
  time: string
  category: "private" | "work"
}

export enum Period {
  week = "WEEK",
  twoWeeks = "TWO_WEEKS",
  month = "MONTH",
}
