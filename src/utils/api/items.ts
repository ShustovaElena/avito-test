import { BASE_URL } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IItem } from '../../types';

export const getItemsId = createAsyncThunk('items/getItemsId', async () => {
  const res = await fetch(`${BASE_URL}/newstories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();
  data = data.slice(0, 100);
  return data;
});

export const getItems = createAsyncThunk('root/getItems', async (itemsId: number[]) => {
    let requests = itemsId.map(id => {
        return fetch(`${BASE_URL}/item/${id}.json`);
    });

    const data = Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())));

    return data;
});
