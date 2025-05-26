import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">Fake Acountee</h1>
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

