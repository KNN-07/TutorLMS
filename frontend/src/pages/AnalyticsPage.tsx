import React from 'react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Performance Analytics</h1>
          <p className="text-secondary-600">Track your progress and identify areas for improvement</p>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-secondary-900">Score Progress</h2>
          </div>
          <div className="card-body">
            <div className="h-64 bg-secondary-50 rounded-lg flex items-center justify-center">
              <p className="text-secondary-500">📈 Score trend chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-secondary-900">Subject Breakdown</h2>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">Math</span>
                  <span className="text-sm text-secondary-600">780/800 (97.5%)</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-success-500 h-2 rounded-full" style={{ width: '97.5%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">Reading & Writing</span>
                  <span className="text-sm text-secondary-600">640/800 (80%)</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-warning-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-secondary-900">Strengths</h3>
          </div>
          <div className="card-body space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Algebra</p>
                <p className="text-xs text-secondary-600">95% accuracy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Geometry</p>
                <p className="text-xs text-secondary-600">92% accuracy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Data Analysis</p>
                <p className="text-xs text-secondary-600">88% accuracy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-secondary-900">Areas to Improve</h3>
          </div>
          <div className="card-body space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Reading Comprehension</p>
                <p className="text-xs text-secondary-600">72% accuracy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-error-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Grammar & Usage</p>
                <p className="text-xs text-secondary-600">68% accuracy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-secondary-900">Expression of Ideas</p>
                <p className="text-xs text-secondary-600">75% accuracy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-secondary-900">Study Time</h3>
          </div>
          <div className="card-body space-y-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary-900">32h</p>
              <p className="text-sm text-secondary-600">Total study time</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600">This week</span>
                <span className="font-medium">8h 30m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600">Average per day</span>
                <span className="font-medium">1h 12m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600">Goal progress</span>
                <span className="font-medium text-success-600">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-secondary-900">Personalized Recommendations</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <h4 className="font-medium text-primary-900 mb-2">📖 Focus on Reading Comprehension</h4>
              <p className="text-sm text-primary-700 mb-3">Your reading accuracy is below target. Practice with more complex passages.</p>
              <button className="btn-primary text-sm">Start Reading Practice</button>
            </div>
            
            <div className="p-4 bg-warning-50 rounded-lg border border-warning-200">
              <h4 className="font-medium text-warning-900 mb-2">✍️ Improve Grammar Skills</h4>
              <p className="text-sm text-warning-700 mb-3">Work on grammar rules and sentence structure to boost your writing score.</p>
              <button className="btn-warning text-sm">Practice Grammar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
