import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { CloudinaryContext } from 'cloudinary-react';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <CloudinaryContext cloudName="dk0ehzodv"> */}
        <App />
      {/* </CloudinaryContext> */}
    </BrowserRouter>
  </StrictMode>
);
