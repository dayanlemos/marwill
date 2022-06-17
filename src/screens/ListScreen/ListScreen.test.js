import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import ListScreen from "./ListScreen";

it('renders the component', () => {

    render(<ListScreen />);

    expect(screen.getByTestId('list-screen-container')).toBeInTheDocument();

});

it('renders the component with list', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: { results: [{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }] } }),
        })
    );
    render(<ListScreen />);

    await waitFor(() => {
        expect(screen.getByText('Hulk')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('card-1'));

    waitFor(() => {
        expect(screen.getByText('big green guy')).toBeInTheDocument();
    })

    fireEvent.click(screen.getByTestId('modal-button-close'));

    waitFor(() => {
        expect(screen.getByText('big green guy')).not.toBeInTheDocument();
    })

    expect(screen.getByTestId('list-screen-container')).toBeInTheDocument();

});

it('should load more items', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: { results: [{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }] } }),
        })
    );
    render(<ListScreen />);

    fireEvent.click(screen.getByTestId('load-more-button'));

    waitFor(() => {
        expect(screen.getByTestId('card-1')).toBeInTheDocument();
    })

});

it('should call handleSearch', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: { results: [{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }] } }),
        })
    );
    render(<ListScreen />);

    fireEvent.change(screen.getByTestId('input-search'), { target: { value: 'spider' } });

    waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(2);
    })

});


