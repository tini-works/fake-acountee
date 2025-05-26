import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import InvoiceDetail from '../components/InvoiceDetail';

// Mock data for the invoices
const mockInvoices = [
  {
    id: '00000052',
    companyName: 'CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC',
    date: '4/9/2024',
    amount: '33.006.960 đ',
    imported: true,
    number: '00000052',
    status: 'imported',
    supplier: {
      name: 'CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC',
      id: '0318126808',
      address: '195 Đường 5, khu phố Lân Ngoài, Phường Long Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      id: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    lineItems: [
      { id: 1, description: 'Combo nướng thập cẩm cho người lớn', unit: 'Phần', quantity: 28.0000000, unitPrice: 399.000, taxRate: 8, total: 11172.000 },
      { id: 2, description: 'Dịch vụ lẩu trải', unit: 'Khách', quantity: 38.0000000, unitPrice: 450.000, taxRate: 8, total: 17100.000 },
      { id: 3, description: 'Nước suối', unit: 'Chai', quantity: 19.0000000, unitPrice: 15.000, taxRate: 8, total: 285.000 },
      { id: 4, description: 'Mì xào hải sản tôm mực', unit: 'Phần', quantity: 2.0000000, unitPrice: 120.000, taxRate: 8, total: 240.000 },
      { id: 5, description: 'Cơm chiên hải sản', unit: 'Phần', quantity: 2.0000000, unitPrice: 120.000, taxRate: 8, total: 240.000 },
      { id: 6, description: 'Soup', unit: 'Phần', quantity: 2.0000000, unitPrice: 120.000, taxRate: 8, total: 240.000 },
      { id: 7, description: 'Gỏi bò bóp thấu', unit: 'Phần', quantity: 3.0000000, unitPrice: 145.000, taxRate: 8, total: 435.000 },
      { id: 8, description: 'Lẩu thái chua cay', unit: 'Phần', quantity: 2.0000000, unitPrice: 325.000, taxRate: 8, total: 650.000 },
      { id: 9, description: 'Trà đào chanh sả', unit: 'Phần', quantity: 4.0000000, unitPrice: 50.000, taxRate: 8, total: 200.000 }
    ]
  },
  {
    id: '1748184',
    companyName: 'CÔNG TY TNHH GRAB',
    date: '4/9/2024',
    amount: '5.996.000 đ',
    imported: true,
    number: '1748184',
    status: 'imported',
    supplier: {
      name: 'CÔNG TY TNHH GRAB',
      id: '1748184',
      address: 'Hà Nội, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      id: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    lineItems: [
      { id: 1, description: 'Dịch vụ vận chuyển', unit: 'Chuyến', quantity: 10.0000000, unitPrice: 599.600, taxRate: 8, total: 5996.000 }
    ]
  },
  {
    id: '00000471',
    companyName: 'CÔNG TY CỔ PHẦN GLANZ INTERNATIONAL',
    date: '4/9/2024',
    amount: '200.000 đ',
    imported: true,
    number: '00000471',
    status: 'imported',
    supplier: {
      name: 'CÔNG TY CỔ PHẦN GLANZ INTERNATIONAL',
      id: '00000471',
      address: 'Hồ Chí Minh, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      id: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    lineItems: [
      { id: 1, description: 'Dịch vụ tư vấn', unit: 'Giờ', quantity: 2.0000000, unitPrice: 100.000, taxRate: 8, total: 200.000 }
    ]
  },
  {
    id: '78177823',
    companyName: 'CÔNG TY CỔ PHẦN THƯƠNG MẠI BÁCH HÓA XANH',
    date: '4/9/2024',
    amount: '163.017 đ',
    imported: true,
    number: '78177823',
    status: 'imported',
    supplier: {
      name: 'CÔNG TY CỔ PHẦN THƯƠNG MẠI BÁCH HÓA XANH',
      id: '78177823',
      address: 'Hồ Chí Minh, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      id: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    lineItems: [
      { id: 1, description: 'Hàng hóa tiêu dùng', unit: 'Lô', quantity: 1.0000000, unitPrice: 163.017, taxRate: 8, total: 163.017 }
    ]
  },
  {
    id: '1386513',
    companyName: 'CÔNG TY TNHH GRAB',
    date: '5/9/2024',
    amount: '25.000 đ',
    imported: true,
    number: '1386513',
    status: 'imported',
    supplier: {
      name: 'CÔNG TY TNHH GRAB',
      id: '1386513',
      address: 'Hà Nội, Việt Nam'
    },
    buyer: {
      name: 'CÔNG TY TNHH SILENTIUM VIỆT NAM',
      id: '0316023807',
      address: '95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
    },
    lineItems: [
      { id: 1, description: 'Dịch vụ vận chuyển', unit: 'Chuyến', quantity: 1.0000000, unitPrice: 25.000, taxRate: 8, total: 25.000 }
    ]
  }
];

const InvoicesPage: React.FC = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(mockInvoices[0].id);

  const selectedInvoice = mockInvoices.find(invoice => invoice.id === selectedInvoiceId) || null;

  return (
    <div className="flex h-screen">
      <Sidebar 
        invoices={mockInvoices}
        onInvoiceSelect={setSelectedInvoiceId}
        selectedInvoiceId={selectedInvoiceId}
      />
      <InvoiceDetail invoice={selectedInvoice} />
    </div>
  );
};

export default InvoicesPage;

