import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-900">TutorLMS</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/dashboard" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </a>
              <a href="/practice" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Practice
              </a>
              <a href="/test" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Tests
              </a>
              <a href="/analytics" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Analytics
              </a>
            </nav>

            <div className="flex items-center">
              <div className="relative">
                <button className="bg-secondary-100 p-2 rounded-full text-secondary-600 hover:text-secondary-900">
                  <span className="sr-only">View notifications</span>
                  🔔
                </button>
              </div>
              
              <div className="ml-3 relative">
                <button className="bg-secondary-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
                    U
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
