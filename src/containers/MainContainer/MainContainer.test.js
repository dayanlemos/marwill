import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import MainContainer from "./index";
import {BrowserRouter} from "react-router-dom";

it('renders the component', () => {

    render(<BrowserRouter><MainContainer /></BrowserRouter>);

    expect(screen.getByText('Personagens')).toBeInTheDocument();

})
