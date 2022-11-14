import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { IItem } from '../types';
import { getItemsId, getItems } from '../utils/api/items';

interface ItemsState {
    items: any[],
    itemsId: number[],
    status: string,
}

const initialState: ItemsState = {
    items: [],
    itemsId: [],
    status: 'pending',
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsId.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.itemsId = action.payload;
    })
    builder.addCase(getItemsId.pending, (state, action) => {
        state.status = 'pending';
    })
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
    })
  },
})

export const {} = itemsSlice.actions;

export const selectCount = (state: RootState) => state.items;

export default itemsSlice.reducer;