import { render } from '@testing-library/react';
import Analytics from '../components/Analytics';
import ReactGA from 'react-ga4';

vi.mock('react-ga4');

describe('Analytics', () => {
  it('initializes GA and sends a pageview', () => {
    render(<Analytics />);
    
    expect(ReactGA.initialize).toHaveBeenCalledWith('G-P9WENGK1Z3');
    expect(ReactGA.send).toHaveBeenCalledWith({
      hitType: 'pageview',
      page: '/',
    });
  });
});
