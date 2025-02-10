import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyForm from './components/Form';
import Football from './components/football';
import Counter from './components/Counter';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import ParentComponent from './components/Memo';
import UseMemo from './components/UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
          <Route path="form" element={<MyForm />} />
          <Route path="ball" element={<Football />} />
          <Route path="count" element={<Counter />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="usecontext" element={<UseContext />} />
          <Route path="useref" element={<UseRef />} />
          <Route path="memo" element={<ParentComponent />} />
          <Route path="usememo" element={<UseMemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
