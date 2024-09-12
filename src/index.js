import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './components/Single';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


