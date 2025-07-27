import { render, screen } from '@testing-library/react';
import BaseLandingPage from '../base_gym_landing_page';

// The buttons are not exported individually, so we test them via the main landing page component
describe('External Link Buttons', () => {
  beforeEach(() => {
    render(<BaseLandingPage />);
  });

  it('renders the WhatsApp button with the correct link', () => {
    const whatsappButton = screen.getByLabelText('Fale conosco pelo WhatsApp');
    expect(whatsappButton).toBeInTheDocument();
    expect(whatsappButton).toHaveAttribute('href', 'https://wa.me/5571982495275?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20BASE%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.');
  });

  it('renders the Uber button with the correct link', () => {
    const uberButton = screen.getByText('Chamar um Uber');
    expect(uberButton).toBeInTheDocument();
    expect(uberButton).toHaveAttribute('href', 'https://m.uber.com/looking?drop[0]=%7B%22latitude%22%3A-13.0087211%2C%22longitude%22%3A-38.5293016%2C%22addressLine1%22%3A%22Base%20Calistenia%20e%20Performance%22%2C%22addressLine2%22%3A%22R.%20Alfredo%20Magalh%C3%A3es%2C%20115%20-%20Barra%2C%20Salvador%20-%20BA%2C%2040140-140%22%7D');
  });
});
