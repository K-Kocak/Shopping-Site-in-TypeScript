import React from "react";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './ui/App'

export const router = createBrowserRouter([
  { path: "*", element: <App />}
]);

(async () => {
  render();
})();


function render() {
  const root = document.getElementById("root");
  createRoot(root!).render(<RouterProvider router={router} />);
}

