import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home/Home.jsx";
import Veiculos from "./routes/veiculos/veiculos.jsx";
import Aluguel from "./routes/aluguel/aluguel.jsx";
import Error from "./routes/Error/Error.jsx";
import Relatorios from "./routes/relatorios/relatorios.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contato", element: <Aluguel /> },
      { path: "como", element: <Relatorios /> },
      { path: "registro", element: <Veiculos /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
