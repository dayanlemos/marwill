import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import DropDownMenuButton from "./DropDownMenuButton";

it('renders the component', () => {

    render(<DropDownMenuButton />);

    expect(screen.getByText('Personagens')).toBeInTheDocument();

})

it('renders the component opened', () => {

    render(<DropDownMenuButton isOpened />);

    expect(screen.getByTestId('icon-arrow').getAttribute('stroke')).toEqual('#FFD900');

})
