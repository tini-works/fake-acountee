export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'imported' | 'pending' | 'obsolete';
  company: {
    id: string;
    name: string;
  };
  supplier: {
    id: string;
    name: string;
    address: string;
  };
  buyer: {
    id: string;
    name: string;
    address: string;
  };
  items: {
    id: number;
    description: string;
    unit: string;
    quantity: number;
    price: string;
    taxRate: string;
    total: string;
  }[];
  totalAmount: string;
}

export const mockInvoices: Invoice[] = [
  {
    id: "00000052",
    date: "4/9/2024",
    amount: "33.006.960 đ",
    status: "imported",
    company: {
      id: "00000052",
      name: "CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC"
    },
    supplier: {
      id: "0318126808",
      name: "CÔNG TY CỔ PHẦN PHÁT TRIỂN VÀ ĐẦU TƯ LONG PHƯỚC",
      address: "195 Đường 5, khu phố Lân Ngoài, Phường Long Phước, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
    },
    buyer: {
      id: "0316023807",
      name: "CÔNG TY TNHH SILENTIUM VIỆT NAM",
      address: "95 - 97 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
    },
    items: [
      {
        id: 1,
        description: "Combo nướng thập cẩm cho người lớn",
        unit: "Phần",
        quantity: 28,
        price: "399.000 đ",
        taxRate: "8%",
        total: "11.172.000 đ"
      },
      {
        id: 2,
        description: "Dịch vụ lều trại",
        unit: "Khách",
        quantity: 38,
        price: "450.000 đ",
        taxRate: "8%",
        total: "17.100.000 đ"
      },
      {
        id: 3,
        description: "Nước suối",
        unit: "Chai",
        quantity: 19,
        price: "15.000 đ",
        taxRate: "8%",
        total: "285.000 đ"
      },
      {
        id: 4,
        description: "Mì xào hải sản tôm mực",
        unit: "Phần",
        quantity: 2,
        price: "120.000 đ",
        taxRate: "8%",
        total: "240.000 đ"
      },
      {
        id: 5,
        description: "Cơm chiên hải sản",
        unit: "Phần",
        quantity: 2,
        price: "120.000 đ",
        taxRate: "8%",
        total: "240.000 đ"
      },
      {
        id: 6,
        description: "Soup",
        unit: "Phần",
        quantity: 2,
        price: "120.000 đ",
        taxRate: "8%",
        total: "240.000 đ"
      },
      {
        id: 7,
        description: "Gỏi bò bóp thấu",
        unit: "Phần",
        quantity: 3,
        price: "145.000 đ",
        taxRate: "8%",
        total: "435.000 đ"
      },
      {
        id: 8,
        description: "Lẩu thái chua cay",
        unit: "Phần",
        quantity: 2,
        price: "325.000 đ",
        taxRate: "8%",
        total: "650.000 đ"
      },
      {
        id: 9,
        description: "Trà đào chanh sả",
        unit: "Phần",
        quantity: 4,
        price: "50.000 đ",
        taxRate: "8%",
        total: "200.000 đ"
      }
    ],
    totalAmount: "33.006.960 đ"
  },
  {
    id: "00000471",
    date: "4/9/2024",
    amount: "200.000 đ",
    status: "imported",
    company: {
      id: "00000471",
      name: "CÔNG TY CỔ PHẦN GLANZ INTERNATIONAL"
    },
    supplier: {
      id: "0318126809",
      name: "CÔNG TY CỔ PHẦN GLANZ INTERNATIONAL",
      address: "123 Đường Nguyễn Văn Linh, Quận 7, Thành phố Hồ Chí Minh, Việt Nam"
    },
    buyer: {
      id: "0316023808",
      name: "CÔNG TY TNHH ABC",
      address: "456 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh, Việt Nam"
    },
    items: [
      {
        id: 1,
        description: "Dịch vụ tư vấn",
        unit: "Giờ",
        quantity: 2,
        price: "100.000 đ",
        taxRate: "8%",
        total: "200.000 đ"
      }
    ],
    totalAmount: "200.000 đ"
  },
  {
    id: "1748184",
    date: "4/9/2024",
    amount: "5.996.000 đ",
    status: "imported",
    company: {
      id: "1748184",
      name: "CÔNG TY TNHH GRAB"
    },
    supplier: {
      id: "0318126810",
      name: "CÔNG TY TNHH GRAB",
      address: "789 Đường Điện Biên Phủ, Quận 3, Thành phố Hồ Chí Minh, Việt Nam"
    },
    buyer: {
      id: "0316023809",
      name: "CÔNG TY TNHH XYZ",
      address: "321 Đường Nguyễn Huệ, Quận 1, Thành phố Hồ Chí Minh, Việt Nam"
    },
    items: [
      {
        id: 1,
        description: "Dịch vụ vận chuyển",
        unit: "Chuyến",
        quantity: 20,
        price: "299.800 đ",
        taxRate: "8%",
        total: "5.996.000 đ"
      }
    ],
    totalAmount: "5.996.000 đ"
  }
];

