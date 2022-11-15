import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { IComment, IItem } from '../types';
import { getRootComments } from '../utils/api/comments';
import { getItems, getItemById } from '../utils/api/items';

interface ItemsState {
    items: IItem[],
    item: IItem,
    rootComments: IComment[],
}

const initialState: ItemsState = {
    items: [],
    item: {
        by: '',
        descendants: 0,
        id: 0,
        kids: [],
        score: 0,
        time: 0,
        title: '',
        type: '',
        url: '',
    },
    rootComments: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItem: (state, action) => {
        state.item = {...action.payload};
      },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
    });
    builder.addCase(getRootComments.fulfilled, (state, action) => {
        state.rootComments = action.payload;
    });
    builder.addCase(getItemById.fulfilled, (state, action) => {
        state.item = {...action.payload};
    });
  },
})

export const { setItem } = itemsSlice.actions;

export const selectCount = (state: RootState) => state.items;

export default itemsSlice.reducer;