import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import {Fragment} from 'react';
import {Toaster} from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Fragment>
            <Toaster position="top-right"></Toaster>
            <App />
        </Fragment>
        
    </React.StrictMode>
);
