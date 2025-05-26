import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import InvoicesPage from "./pages/InvoicesPage";
import { invoiceLoader } from "./loaders/invoiceLoader";

// Create a browser router with data loading capabilities
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InvoicesPage />,
        loader: invoiceLoader,
      },
      {
        path: "/invoices/:invoiceId",
        element: <InvoicesPage />,
        loader: invoiceLoader,
      }
    ]
  }
]);

export default router;

