import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import $ from 'jquery';

import "./generate.js";

import './index.css';
import "typeface-gaegu";

import { AutoScrollerFunction } from './autoScroller.js';
import Space from './pages/space';
import About from './pages/about';
import Layout from './pages/layout';
import Missing from './pages/missing';
import reportWebVitals from './reportWebVitals';

export default function SpaceApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={[<Space />, <AutoScrollerFunction/>]} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpaceApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();