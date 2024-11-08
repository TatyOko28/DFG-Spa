import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

// Utilisez createRoot pour gérer le rendu de l'application
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Créez une racine pour votre application
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
