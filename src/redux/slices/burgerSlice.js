import { createSlice } from "@reduxjs/toolkit"

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    burgerIsVisible: false,
  },
  reducers: {
    setBurgerIsVisible: (state, action) => {
      state.burgerIsVisible = action.payload
    },
  },
});

export const { setBurgerIsVisible } = burgerSlice.actions
export default burgerSlice.reducer