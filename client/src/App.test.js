import { render, screen } from '@testing-library/react';
import Landing from '../src/Componets/Landing'
import { MemoryRouter} from 'react-router-dom'

test('el titulo es igual Welcome to my dog app', () => {
        render(<Landing />, { wrapper: MemoryRouter })
        expect(screen.getByText(/Welcome to my dogs app/i)).toBeInTheDocument()
});
// test('renders a button to enter ', () => {
//     const { getByText } = render(<Landing button="Clik me" />);
//     expect(getByText("Clik me")).toBeTruthy();
// });