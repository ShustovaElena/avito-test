import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Mock API', () => {
  test('render main page with mock api', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText('Is advertising causing climate change? it’s worse than that')).toBeInTheDocument();
    });
  });
});