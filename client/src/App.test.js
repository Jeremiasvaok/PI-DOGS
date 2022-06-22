import { render, screen } from '@testing-library/react';
import App from './App'

test('renders a button to enter', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Entrar/i)
    expect(linkElement).toBeTheDocument()
});
test('renders a title', () => {
    render(<App />)
    const linkElement = screen.getAllByText(/BIENVENIDOS/i)
    expect(linkElement).toBeTheDocument();
});