import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor} from "@testing-library/react";
import Modal from "./index";

it('renders the component', () => {

    render(<Modal><h1>Modal teste</h1></Modal>);

    waitFor(() => {
        expect(screen.getByText('Modal test')).not.toBeInTheDocument();
    });

    render(<Modal isOpen><h1>Modal teste</h1></Modal>);

    expect(screen.getByText('Modal teste')).toBeInTheDocument();

})
