import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './providers/AuthProvider';
import router from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import configureStore from './HandleState/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider >
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
