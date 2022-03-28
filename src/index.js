import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Details from './components/details';
import Results from './components/results';

const Root = ( 
    <BrowserRouter>
        <Routes>
            <Route path="/results" element={<Results/>} />
            <Route path="/details/:itemId" element={<Details/>} />
            <Route path='/' element={<Navigate to="results"/>} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));