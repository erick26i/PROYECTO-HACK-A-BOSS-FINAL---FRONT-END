import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
