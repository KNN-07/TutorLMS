import React from 'react';

const PracticePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Practice Sessions</h1>
          <p className="text-secondary-600">Choose a practice mode to improve your SAT skills</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card hover:shadow-medium transition-shadow cursor-pointer">
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              🧮
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Math Practice</h3>
            <p className="text-secondary-600 mb-4">Algebra, Geometry, Statistics & Data Analysis</p>
            <button className="btn-primary w-full">Start Math Practice</button>
          </div>
        </div>

        <div className="card hover:shadow-medium transition-shadow cursor-pointer">
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              📖
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Reading Practice</h3>
            <p className="text-secondary-600 mb-4">Reading Comprehension & Analysis</p>
            <button className="btn-success w-full">Start Reading Practice</button>
          </div>
        </div>

        <div className="card hover:shadow-medium transition-shadow cursor-pointer">
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ✍️
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Writing Practice</h3>
            <p className="text-secondary-600 mb-4">Grammar, Usage & Expression of Ideas</p>
            <button className="btn-warning w-full">Start Writing Practice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
