import { BASE_URL } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRootComments = createAsyncThunk('root/getComments', async (kids: number[]) => {
    let requests = kids.map((kid: number) => {
        return fetch(`${BASE_URL}/item/${kid}.json`);
    });

    const data = Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())));

    return data;
});
