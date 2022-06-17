import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Button from "./Button";

it('renders the component', () => {

    render(<Button type='primary' />);

    expect(screen.getByTestId('button-primary')).toBeInTheDocument();


})
