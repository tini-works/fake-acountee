import React from 'react';
import { useParams } from 'react-router-dom';

const InvoiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock invoice data based on the image
  const invoice = {
    id: id || '00000052',
    date: '4/9/2024',
    amount: '33,006,960 đ',
    status: 'Imported',
    supplier: {
      name: 'CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC',
      code: '0318126808',
      address: '195 Đường 5, khu phố Lân Ngoài, Phường Long Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      code: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    items: [
      { id: 1, service: 'Combo nướng thập cẩm cho người lớn', unit: 'Phần', qty: 28, price: '399,000 đ', tax: '8%', total: '11,172,000 đ' },
      { id: 2, service: 'Dịch vụ lều trại', unit: 'Khách', qty: 38, price: '450,000 đ', tax: '8%', total: '17,100,000 đ' },
      { id: 3, service: 'Nước suối', unit: 'Chai', qty: 19, price: '15,000 đ', tax: '8%', total: '285,000 đ' },
      { id: 4, service: 'Mì xào hải sản tôm mực', unit: 'Phần', qty: 2, price: '120,000 đ', tax: '8%', total: '240,000 đ' },
      { id: 5, service: 'Cơm chiên hải sản', unit: 'Phần', qty: 2, price: '120,000 đ', tax: '8%', total: '240,000 đ' },
      { id: 6, service: 'Soup', unit: 'Phần', qty: 2, price: '120,000 đ', tax: '8%', total: '240,000 đ' },
      { id: 7, service: 'Gỏi bò bóp thấu', unit: 'Phần', qty: 3, price: '145,000 đ', tax: '8%', total: '435,000 đ' },
      { id: 8, service: 'Lẩu thái chua cay', unit: 'Phần', qty: 2, price: '325,000 đ', tax: '8%', total: '650,000 đ' },
      { id: 9, service: 'Trà đào chanh sả', unit: 'Phần', qty: 4, price: '50,000 đ', tax: '8%', total: '200,000 đ' }
    ],
    total: '33,006,960 đ'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Invoice #{invoice.id}</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {invoice.status}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Supplier</h2>
            <div className="text-gray-600">
              <p className="font-medium">{invoice.supplier.name}</p>
              <p>Code: {invoice.supplier.code}</p>
              <p>{invoice.supplier.address}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Buyer</h2>
            <div className="text-gray-600">
              <p className="font-medium">{invoice.buyer.name}</p>
              <p>Code: {invoice.buyer.code}</p>
              <p>{invoice.buyer.address}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Invoice Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Service</th>
                  <th className="py-3 px-4 text-left">Unit</th>
                  <th className="py-3 px-4 text-right">Qty</th>
                  <th className="py-3 px-4 text-right">Price</th>
                  <th className="py-3 px-4 text-right">Tax</th>
                  <th className="py-3 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {invoice.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">{item.id}</td>
                    <td className="py-3 px-4">{item.service}</td>
                    <td className="py-3 px-4">{item.unit}</td>
                    <td className="py-3 px-4 text-right">{item.qty}</td>
                    <td className="py-3 px-4 text-right">{item.price}</td>
                    <td className="py-3 px-4 text-right">{item.tax}</td>
                    <td className="py-3 px-4 text-right font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50">
                  <td colSpan={6} className="py-3 px-4 text-right font-semibold">Total:</td>
                  <td className="py-3 px-4 text-right font-bold">{invoice.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button className="btn-primary">Set Payment Details</button>
          <button className="btn-primary">Set Payment Request</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;

