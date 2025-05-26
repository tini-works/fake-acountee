import { useLoaderData, useParams, Link } from "react-router-dom";
import { Invoice } from "../data/mockData";

interface LoaderData {
  invoices: Invoice[];
  invoice?: Invoice;
}

function InvoicesPage() {
  const { invoices, invoice } = useLoaderData() as LoaderData;
  const params = useParams();
  const selectedInvoiceId = params.invoiceId;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Invoices</h2>
          <button className="mt-2 btn-primary">Import</button>
        </div>
        <div>
          {invoices.map((inv) => (
            <Link 
              to={`/invoices/${inv.id}`} 
              key={inv.id}
              className={`sidebar-item ${inv.status === 'imported' ? 'imported' : ''} ${selectedInvoiceId === inv.id ? 'bg-blue-100' : ''}`}
            >
              <div>
                <div className="font-medium">{inv.company.name}</div>
                <div className="text-sm text-gray-500">{inv.date}</div>
              </div>
              <div>
                <div className="text-right">{inv.amount}</div>
                {inv.status === 'imported' && (
                  <div className="badge badge-imported text-right">Imported</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 overflow-y-auto">
        {invoice ? (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{invoice.company.name}</h1>
              <div>
                <button className="btn-secondary mr-2">Mark as obsolete</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Invoice</h3>
                <div className="mt-1">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">🗓️</span>
                    <span>{invoice.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">#</span>
                    <span>{invoice.id}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">$</span>
                    <span>{invoice.amount}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <div className="mt-1">
                      <span className="badge badge-imported">Imported</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Payment</h3>
                    <div className="mt-1">
                      <button className="btn-secondary">Set payment details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Supplier</h3>
                <div className="mt-1">
                  <div className="font-medium">{invoice.supplier.name}</div>
                  <div className="text-sm text-gray-500">{invoice.supplier.id}</div>
                  <div className="text-sm text-gray-500">{invoice.supplier.address}</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Buyer</h3>
                <div className="mt-1">
                  <div className="font-medium">{invoice.buyer.name}</div>
                  <div className="text-sm text-gray-500">{invoice.buyer.id}</div>
                  <div className="text-sm text-gray-500">{invoice.buyer.address}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Service</h3>
              <table className="w-full invoice-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Qty.</th>
                    <th>Per Unit</th>
                    <th>Tax Rate</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.description}</td>
                      <td>{item.unit}</td>
                      <td>{item.quantity.toFixed(6)}</td>
                      <td>{item.price}</td>
                      <td>{item.taxRate}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td colSpan={6} className="text-right">Total</td>
                    <td>{invoice.totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Link payment request</h3>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">Not selected</span>
                <button className="btn-secondary">Set payment request</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-600">Select an invoice to view details</h2>
              <p className="text-gray-500 mt-2">Click on an invoice from the sidebar to view its details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoicesPage;

