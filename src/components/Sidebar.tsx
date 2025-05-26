import React from 'react';

interface SidebarItemProps {
  companyName: string;
  id: string;
  date: string;
  amount: string;
  imported: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  companyName, 
  id, 
  date, 
  amount, 
  imported, 
  onClick 
}) => {
  return (
    <div 
      className={`sidebar-item ${imported ? 'imported' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div className="font-medium">{companyName}</div>
        <div className="text-xs text-gray-500">{id}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-medium">{amount}</div>
        {imported && (
          <span className="badge badge-imported">imported</span>
        )}
      </div>
    </div>
  );
};

interface SidebarProps {
  invoices: Array<{
    id: string;
    companyName: string;
    date: string;
    amount: string;
    imported: boolean;
  }>;
  onInvoiceSelect: (id: string) => void;
  selectedInvoiceId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  invoices, 
  onInvoiceSelect,
  selectedInvoiceId
}) => {
  return (
    <div className="w-64 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-medium">Invoices</h2>
        <button className="btn-secondary text-sm">Import</button>
      </div>
      <div>
        {invoices.map((invoice) => (
          <SidebarItem
            key={invoice.id}
            companyName={invoice.companyName}
            id={invoice.id}
            date={invoice.date}
            amount={invoice.amount}
            imported={invoice.imported}
            onClick={() => onInvoiceSelect(invoice.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

