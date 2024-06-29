import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: JSON.parse(localStorage.getItem("user-info")),
        token: document.cookie.split("; ").find(row => row.startsWith("auth_token"))?.split("=")[1]
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user-info", JSON.stringify(action.payload));
            state.data = action.payload;
            state.token = document.cookie.split("; ").find(row => row.startsWith("auth_token"))?.split("=")[1];
        },
        removeUser: (state, action) => {
            localStorage.removeItem("user-info");
            state.data = null;
            state.token = undefined;
        }
    }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer;