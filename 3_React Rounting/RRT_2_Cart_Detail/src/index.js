import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'alertifyjs/build/css/alertify.min.css';
import { BrowserRouter } from 'react-router-dom'; // import router 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Browser Router adding */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
