import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    loggedIn: false
}

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {toggleDarkMode} = mainReducer.actions
export default mainReducer.reducer