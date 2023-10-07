import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DATA from './TEMPLATE.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={DATA} />
    </React.StrictMode>
);
