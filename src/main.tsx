import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './tailwind.css'; // Import your Tailwind CSS styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
