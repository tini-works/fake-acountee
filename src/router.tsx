import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import InvoiceDetail from "./pages/InvoiceDetail";
import InvoiceList from "./pages/InvoiceList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <InvoiceList />,
      },
      {
        path: "invoices/:id",
        element: <InvoiceDetail />,
      },
    ],
  },
]);

export default router;

