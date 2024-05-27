import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming your main component is named 'App'
//import './index.css'; // Global styles if any

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);