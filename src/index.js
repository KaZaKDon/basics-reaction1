import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Новый способ вместо ReactDOM.render
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


// ✅ Находим корневой элемент в DOM
const container = document.getElementById('root');
const root = createRoot(container);

// ✅ Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);