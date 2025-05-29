import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Profile Settings</h1>
          <p className="text-secondary-600">Manage your account information and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl font-semibold text-secondary-900">Personal Information</h2>
            </div>
            <div className="card-body">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Target SAT Score
                  </label>
                  <select className="input">
                    <option value="1400">1400</option>
                    <option value="1450">1450</option>
                    <option value="1500" selected>1500</option>
                    <option value="1550">1550</option>
                    <option value="1600">1600</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Test Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2024-06-01"
                    className="input"
                  />
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-secondary-900">Account Stats</h3>
            </div>
            <div className="card-body space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">JD</span>
                </div>
                <p className="font-medium text-secondary-900">John Doe</p>
                <p className="text-sm text-secondary-600">Student</p>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-secondary-200">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Member since</span>
                  <span className="text-sm font-medium">Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Practice sessions</span>
                  <span className="text-sm font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Study streak</span>
                  <span className="text-sm font-medium">7 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Best score</span>
                  <span className="text-sm font-medium text-success-600">1420</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-secondary-900">Preferences</h3>
            </div>
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-700">Email notifications</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-700">Study reminders</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-700">Progress reports</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-700">Dark mode</span>
                <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-secondary-900">Security</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-4">Change Password</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Confirm new password"
                  />
                </div>
                <button type="submit" className="btn-secondary">
                  Update Password
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-4">Account Actions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-warning-50 rounded-lg border border-warning-200">
                  <h4 className="font-medium text-warning-900 mb-2">Export Data</h4>
                  <p className="text-sm text-warning-700 mb-3">Download your practice history and progress data.</p>
                  <button className="btn-warning text-sm">Export Data</button>
                </div>
                
                <div className="p-4 bg-error-50 rounded-lg border border-error-200">
                  <h4 className="font-medium text-error-900 mb-2">Delete Account</h4>
                  <p className="text-sm text-error-700 mb-3">Permanently delete your account and all associated data.</p>
                  <button className="btn-error text-sm">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
