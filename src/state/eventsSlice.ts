import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  category: "private" | "work"
}

interface EventsState {
  events: Event[]
}

const initialState: EventsState = {
  events: [],
}

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events = [...state.events, action.payload]
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      const updatedEvents = state.events.filter(
        (event) => event.id !== action.payload
      )
      state.events = updatedEvents
    },
    editEvent: (state, action: PayloadAction<Event>) => {
      const updatedEvents = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload
        } else return event
      })
      state.events = updatedEvents
    },
  },
})

export const { addEvent, removeEvent, editEvent } = eventsSlice.actions

export default eventsSlice.reducer
