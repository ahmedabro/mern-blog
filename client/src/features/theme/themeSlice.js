import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark",
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeThemeValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeThemeValue } = themeSlice.actions

export default themeSlice.reducer