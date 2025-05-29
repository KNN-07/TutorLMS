import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Welcome back!</h1>
          <p className="text-secondary-600">Ready to continue your SAT preparation journey?</p>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  📊
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary-600">Practice Sessions</p>
                <p className="text-2xl font-bold text-secondary-900">24</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary-600">Average Score</p>
                <p className="text-2xl font-bold text-secondary-900">1420</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
                  ⏱️
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary-600">Study Time</p>
                <p className="text-2xl font-bold text-secondary-900">32h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-error-100 rounded-full flex items-center justify-center">
                  🎯
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary-600">Accuracy</p>
                <p className="text-2xl font-bold text-secondary-900">87%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-secondary-900">Quick Practice</h2>
          </div>
          <div className="card-body space-y-4">
            <button className="btn-primary w-full">
              🧮 Math Practice
            </button>
            <button className="btn-secondary w-full">
              📖 Reading Practice
            </button>
            <button className="btn-secondary w-full">
              ✍️ Writing Practice
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-secondary-900">Recent Activity</h2>
          </div>
          <div className="card-body space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-secondary-900">Completed Math Practice</p>
                <p className="text-xs text-secondary-500">2 hours ago</p>
              </div>
              <span className="text-sm font-medium text-success-600">+12 points</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-secondary-900">Started Reading Section</p>
                <p className="text-xs text-secondary-500">1 day ago</p>
              </div>
              <span className="text-sm font-medium text-primary-600">In Progress</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-secondary-900">Full Practice Test</p>
                <p className="text-xs text-secondary-500">3 days ago</p>
              </div>
              <span className="text-sm font-medium text-warning-600">1380</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-secondary-900">Your Progress</h2>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-secondary-600 mb-1">
                <span>Math Section</span>
                <span>780/800</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-2">
                <div className="bg-success-500 h-2 rounded-full" style={{ width: '97.5%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-secondary-600 mb-1">
                <span>Reading & Writing</span>
                <span>640/800</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-2">
                <div className="bg-warning-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="btn-primary">
              Take Full Practice Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
