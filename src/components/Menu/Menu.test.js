import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Menu from "./Menu";

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockedHistoryPush,
    }),
}));

it('renders the component', () => {

    render(<Menu />);

    expect(screen.getByText('Ver todos')).toBeInTheDocument();

});

it('renders the component with empty list of cards', () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ results: [] }),
        })
    );

    render(<Menu />);
    expect(screen.getByText('Ver todos')).toBeInTheDocument();

});

it('renders the component with list of cards and click first item', async () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ results: [{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }] }),
        })
    );

    render(<Menu />);

    await waitFor(() => {
        screen.getByTestId('card-1').click();
        expect(screen.getByText('big green guy')).toBeInTheDocument();
        expect(screen.getByTestId('modal-button-close')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('modal-button-close'));

    waitFor(() => {
        expect(screen.getByText('big green guy')).not.toBeInTheDocument();
    });

});

it('should call "see more" button', async () => {
    render(<Menu />);

    screen.getByTestId('menu-button-see-more').click();

    expect(mockedHistoryPush).toHaveBeenCalled();

});
