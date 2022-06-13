import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.scss';
import {BrowserRouter} from "react-router-dom";
import MainContainer from "./containers/MainContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <MainContainer />
    </BrowserRouter>
  </React.StrictMode>
);
