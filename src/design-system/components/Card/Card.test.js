import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import Card from "./Card";

it('renders the component', () => {

    render(<Card item={{ name: 'Hulk' }} />);

    expect(screen.getByText('Hulk')).toBeInTheDocument();

});

it('renders the component and trigger click action', () => {
    const mockedHandleClick = jest.fn();
    render(<Card item={{ id: 1, name: 'Hulk' }} onClick={mockedHandleClick} />);
    screen.getByText('Hulk').click();
    expect(mockedHandleClick).toHaveBeenCalled();
});

it('should zoom image on mouse over', () => {
    render(<Card item={{ id: 1, name: 'Hulk' }} />);

    fireEvent.mouseOver(screen.getByTestId('card-1'));

    expect(screen.getByTestId('card-img-content-1').getAttribute('style').indexOf('scale(1.2)') > 0);

    fireEvent.mouseOut(screen.getByTestId('card-1'));

    expect(screen.getByTestId('card-img-content-1').getAttribute('style').indexOf('scale(1.2)') === -1);
})
