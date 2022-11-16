import { BASE_URL } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk('root/getItems', async () => {
    const res = await fetch(`${BASE_URL}/newstories.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      let ids = await res.json();
      ids = ids.slice(0, 100);


    let requests = ids.map((id: number) => {
        return fetch(`${BASE_URL}/item/${id}.json`);
    });

    const data = Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())));

    return data;
});

export const getItemById = createAsyncThunk('root/getItemById', async (id: number) => {
    const res = await fetch(`${BASE_URL}/item/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      let data = await res.json();

    return data;
});

