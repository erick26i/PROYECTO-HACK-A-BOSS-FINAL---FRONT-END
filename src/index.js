import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './hooks/UserContext';
import { TokenProvider } from './hooks/TokenContext';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from './components/Misc/DarkModeContext';
import { ModalProvider } from './hooks/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <DarkModeProvider>
        <UserProvider>
          <TokenProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TokenProvider>
        </UserProvider>
      </DarkModeProvider>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
