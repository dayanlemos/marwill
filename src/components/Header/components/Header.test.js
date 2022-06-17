import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Header from "../Header";
import {act} from "react-dom/test-utils";

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockedHistoryPush,
    }),
}));

it('renders the component', () => {

    render(<Header />);

    expect(screen.getByTestId('app-logo')).toBeInTheDocument();

    act(() => {
        screen.getByTestId('app-logo').click();

        expect(mockedHistoryPush).toHaveBeenCalled();
    });

})
