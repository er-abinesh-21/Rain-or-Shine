import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Create a root element for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
