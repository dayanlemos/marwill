import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor} from "@testing-library/react";
import Carousel from "./Carousel";

it('renders the component empty', () => {

    const { container } = render(<Carousel items={[]} />);

    expect(container.firstChild).toBeNull();

})

it('renders the component and switch to second banner', () => {

    render(<Carousel items={[{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }]} />);

    expect(screen.getByText('HULK')).toBeInTheDocument();

    screen.getByTestId('carousel-menu-item-2').click();

    waitFor(() => {
        expect(screen.getByText('Iron man')).toBeInTheDocument();
    });
})

it('renders the component and call banner action', () => {

    const mockedActionCall = jest.fn();

    render(<Carousel onCallAction={mockedActionCall} items={[{ id: 1, name: 'Hulk', description: 'big green guy' }, { id: 2, name: 'Iron man', description: '' }]} />);

    screen.getByTestId('carousel-action-button').click();

    waitFor(() => expect(mockedActionCall).toHaveBeenCalled());

})
