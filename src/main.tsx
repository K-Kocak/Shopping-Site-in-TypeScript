import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@ui/App'


/*ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

export const router = createBrowserRouter([
  { path: "*", element: <App />}
]);

(async () => {
  render();
})
/*
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

function render() {
  const root = document.getElementById("root");
  createRoot(root!).render(<RouterProvider router={router} />);
}

