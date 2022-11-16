import { rest } from 'msw';
import { BASE_URL } from '../constants';
import { fakeNews, fakeID } from './fakeNews';

export const handlers = [
    rest.get(`${BASE_URL}/newstories.json`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fakeID));
    }),
    rest.get(`${BASE_URL}/item/33620875.json`, (req, res, ctx) => {
            return res(
                ctx.json({
                    by: "amelius",
                    descendants: 0,
                    id: 33620875,
                    score: 1,
                    time: 1668593057,
                    title: "Is advertising causing climate change? it’s worse than that",
                    type: "story",
                    url: "https://www.thedrum.com/opinion/2022/08/15/advertising-causing-climate-change-actually-it-s-worse",
                }),
              )
        // return res(ctx.status(200), ctx.json(fakeID));
    }),
];