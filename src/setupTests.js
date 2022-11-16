import '@testing-library/jest-dom';
import { worker } from './mocks/browser';

beforeAll(() => worker.listen());
afterAll(() => worker.close());
afterEach(() => worker.resetHandlers());
