// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

export const initialState: unknown = {
    name: "",
    username: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      addUser: (state: initialState, action) => {
        const { name, username, email } = action.payload;
        state.name = name;
        state.username = username;
        state.email = email;
      },
      changeEmail: (state, action) => {
        state.email = action.payload;
      },
    },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;