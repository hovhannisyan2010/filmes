import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './components/Single';
import Layout from './Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<App />} />
        <Route path="/single/:id" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


