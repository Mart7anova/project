import { screen } from '@testing-library/dom';
import { Sidebar } from 'widgets/sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { fireEvent } from '@testing-library/react';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test open Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const buttonToggle = screen.getByTestId('toggle');
        fireEvent.click(buttonToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
