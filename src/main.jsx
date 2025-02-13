import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your general styles
import App from './App.jsx'; // Your main App component
import './App.css'; // App-specific styles

const root = createRoot(document.getElementById('root')); // Get the root div
root.render(
  <StrictMode>
    <App />  {/* The root component of your React app */}
  </StrictMode>
);
