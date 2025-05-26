import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvoicesPage from './pages/InvoicesPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InvoicesPage />} />
    </Routes>
  );
};

export default App;

