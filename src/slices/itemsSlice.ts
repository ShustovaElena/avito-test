import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { getItems } from '../utils/api/items';

interface ItemsState {
    items: any[],
}

const initialState: ItemsState = {
    items: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
    })
  },
})

// export const {} = itemsSlice.actions;

export const selectCount = (state: RootState) => state.items;

export default itemsSlice.reducer;