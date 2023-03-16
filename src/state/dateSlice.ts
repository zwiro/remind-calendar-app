import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DateState {
  date: string
}

const initialState: DateState = {
  date: new Date().toString(),
}

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
  },
})

export const { changeDate } = dateSlice.actions

export default dateSlice.reducer
