import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Event {
  id: number
  title: string
  description: string
  date: Date
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
    removeEvent: (state, action: PayloadAction<number>) => {
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
