import React from 'react';

interface InvoiceLineItem {
  id: number;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  total: number;
}

interface InvoiceDetailProps {
  invoice: {
    id: string;
    number: string;
    date: string;
    amount: string;
    status: string;
    supplier: {
      name: string;
      id: string;
      address: string;
    };
    buyer: {
      name: string;
      id: string;
      address: string;
    };
    lineItems: InvoiceLineItem[];
  } | null;
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({ invoice }) => {
  if (!invoice) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Select an invoice to view details</p>
      </div>
    );
  }

  const totalAmount = invoice.lineItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-xl font-bold">{invoice.supplier.name}-{invoice.number}</h1>
        <button className="btn-secondary">Mark as obsolete</button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500">Invoice</h3>
            <div className="flex items-center mt-1">
              <span className="mr-2">🇻🇳</span>
              <span>{invoice.date}</span>
            </div>
            <div className="mt-1">
              <span className="text-gray-700">#{invoice.number}</span>
            </div>
            <div className="mt-1">
              <span className="text-gray-700">{invoice.amount}</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <div className="mt-1">
              <span className="badge badge-imported">{invoice.status}</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500">Payment</h3>
            <div className="mt-1">
              <button className="btn-primary text-sm">Set payment details</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Supplier</h3>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-medium">{invoice.supplier.name}</p>
            <p className="text-sm text-gray-600">{invoice.supplier.id}</p>
            <p className="text-sm text-gray-600 whitespace-pre-line">{invoice.supplier.address}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Buyer</h3>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-medium">{invoice.buyer.name}</p>
            <p className="text-sm text-gray-600">{invoice.buyer.id}</p>
            <p className="text-sm text-gray-600 whitespace-pre-line">{invoice.buyer.address}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-500">Link payment request</h3>
          <span className="text-sm text-gray-500">Not selected</span>
        </div>
        <button className="btn-primary w-full">Set payment request</button>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Service</h3>
        <div className="overflow-x-auto">
          <table className="w-full invoice-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Unit</th>
                <th>Qty.</th>
                <th>Per Unit</th>
                <th>Tax Rate</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity.toFixed(7)}</td>
                  <td>{item.unitPrice.toLocaleString()} đ</td>
                  <td>{item.taxRate}%</td>
                  <td>{item.total.toLocaleString()} đ</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td colSpan={6} className="text-right">Total</td>
                <td>{totalAmount.toLocaleString()} đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;

