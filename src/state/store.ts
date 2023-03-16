import { configureStore } from "@reduxjs/toolkit"
import eventsReducer from "./eventsSlice"
import dateReducer from "./dateSlice"

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    date: dateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
