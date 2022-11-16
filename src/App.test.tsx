import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import React from 'react';

test('renders App, check header', () => {
  render(
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
    </Provider>
);
  const linkElement = screen.getByText(/Hacker News/i);
  expect(linkElement).toBeInTheDocument();
});