import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  isActive: boolean
}

const initialState: MenuState = {
  isActive: false,
}

export const menuSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMenu(state, action: { payload: boolean }) {
      state.isActive = action.payload
    },
  },
})

export default menuSlice.reducer
