import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceList: React.FC = () => {
  // Mock invoice data
  const invoices = [
    { id: '00000052', company: 'CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC', date: '4/9/2024', amount: '33,006,960 đ', status: 'Imported' },
    { id: '00000471', company: 'CÔNG TY CỔ PHẦN GLANZ INTERNATIONAL', date: '4/9/2024', amount: '200,000 đ', status: 'Imported' },
    { id: '78177823', company: 'CÔNG TY CỔ PHẦN THƯƠNG MẠI BẠCH HÓA XANH', date: '4/9/2024', amount: '163,017 đ', status: 'Imported' },
    { id: '1386513', company: 'CÔNG TY TNHH GRAB', date: '5/9/2024', amount: '25,000 đ', status: 'Imported' },
    { id: '14877', company: 'CÔNG TY TNHH MỘT THÀNH VIÊN PHỐ ĐÌNH', date: '7/9/2024', amount: '2,562,840 đ', status: 'Imported' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Invoices</h1>
        <button className="btn-primary">Import</button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Invoice #</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-right">Amount</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">
                  <Link to={`/invoices/${invoice.id}`} className="text-blue-600 hover:text-blue-800">
                    {invoice.id}
                  </Link>
                </td>
                <td className="py-3 px-6">{invoice.company}</td>
                <td className="py-3 px-6">{invoice.date}</td>
                <td className="py-3 px-6 text-right">{invoice.amount}</td>
                <td className="py-3 px-6 text-center">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {invoice.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to={`/invoices/${invoice.id}`} className="text-blue-600 hover:text-blue-800 mx-2">
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;

