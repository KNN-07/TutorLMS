import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="card">
          <div className="card-body py-12">
            <div className="text-6xl mb-6">🤔</div>
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">404</h1>
            <h2 className="text-xl font-semibold text-secondary-700 mb-4">Page Not Found</h2>
            <p className="text-secondary-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            
            <div className="space-y-4">
              <Link to="/dashboard" className="btn-primary w-full block text-center">
                Go to Dashboard
              </Link>
              <Link to="/practice" className="btn-secondary w-full block text-center">
                Start Practice
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-secondary-500">
          <p>Need help? <a href="#" className="text-primary-600 hover:text-primary-500">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
