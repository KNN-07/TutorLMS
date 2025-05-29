import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">SAT Practice Tests</h1>
          <p className="text-secondary-600">Take full-length practice tests to prepare for the real SAT</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-secondary-900">Full-Length Practice Test</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-3">Test Details</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>⏱️ Duration: 2 hours 14 minutes</li>
                <li>📊 Math Section: 64 questions</li>
                <li>📖 Reading & Writing: 54 questions</li>
                <li>🎯 Adaptive testing format</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-3">Before You Begin</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>✅ Find a quiet environment</li>
                <li>✅ Have scratch paper ready</li>
                <li>✅ Ensure stable internet connection</li>
                <li>✅ Allow full time commitment</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="btn-primary mr-4">Start Practice Test</button>
            <button className="btn-secondary">View Previous Results</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-secondary-900">Test History</h2>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div>
                <p className="font-medium text-secondary-900">Practice Test #3</p>
                <p className="text-sm text-secondary-600">Completed 2 days ago</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-secondary-900">1420</p>
                <p className="text-sm text-success-600">+30 points</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div>
                <p className="font-medium text-secondary-900">Practice Test #2</p>
                <p className="text-sm text-secondary-600">Completed 1 week ago</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-secondary-900">1390</p>
                <p className="text-sm text-warning-600">+10 points</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div>
                <p className="font-medium text-secondary-900">Practice Test #1</p>
                <p className="text-sm text-secondary-600">Completed 2 weeks ago</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-secondary-900">1380</p>
                <p className="text-sm text-secondary-600">Baseline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
