// Redux slice (e.g., themeSlice.js)
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     bgColor : ""
// }

const themeSlice = createSlice({
  name: "theme",
  initialState : { bgColor : "white"},
  reducers: {
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const { setBgColor } = themeSlice.actions;
export default themeSlice.reducer;
