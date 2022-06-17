import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Modal from "./Modal";

it('renders the component', () => {

    render(<Modal isOpen item={{ id: 1, name: 'Hulk', description: 'big green guy', comics: { items: [{ name: 'comic test' }] }, series: { items: [{ name: 'series test' }] }}} />);

    expect(screen.getByText('Hulk')).toBeInTheDocument();
    expect(screen.getByText('big green guy')).toBeInTheDocument();

});
