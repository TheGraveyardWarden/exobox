import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Categories from './components/Categories/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <>ayo wtf</>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/categories',
    element: <Categories/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

root.render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
