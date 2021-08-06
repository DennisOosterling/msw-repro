import { rest } from 'msw';
import { units } from './data/units';

// TODO: refactor to env var or other central place
const baseUrl = 'http://api.mock';

export const handlers = [
    rest.get(`${baseUrl}/fakerequest`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(units.multiple())
        );
    })
];