import { LoaderFunctionArgs } from "react-router-dom";
import { mockInvoices } from "../data/mockData";

export async function invoiceLoader({ params }: LoaderFunctionArgs) {
  // In a real app, this would fetch data from an API
  // For now, we'll use mock data
  
  // If we have an invoice ID, return that specific invoice
  if (params.invoiceId) {
    const invoice = mockInvoices.find(inv => inv.id === params.invoiceId);
    if (!invoice) {
      throw new Response("Invoice not found", { status: 404 });
    }
    return { invoice, invoices: mockInvoices };
  }
  
  // Otherwise return all invoices
  return { invoices: mockInvoices };
}

