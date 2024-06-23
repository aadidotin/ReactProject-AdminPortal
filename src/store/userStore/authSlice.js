import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: { data: JSON.parse(localStorage.getItem("user-info")) },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user-info", JSON.stringify(action.payload));
            state.data = action.payload;
        },
        removeUser: (state, action) => {
            localStorage.removeItem("user-info");
            state.data = null;
        }
    }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer;