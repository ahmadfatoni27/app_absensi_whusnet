import React, { Component , StrictMode}  from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';


// component App
import App from './App';
import LoginAkun from './activity/LoginAkun';
import BuatAkun from './activity/BuatAkun';

import Dashboard from './activity/Dashboard';
import RiwayatAbsensi from './activity/RiwayatAbsensi';

import ProfilSaya from './activity/ProfilSaya';
import EditProfilSaya from './activity/EditProfilSaya';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
        <EditProfilSaya />
      </Router>
  </React.StrictMode>
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
