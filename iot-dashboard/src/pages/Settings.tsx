import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'IoT Solutions Inc.',
    contactEmail: 'support@iotsolutions.example.com',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '24h'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    dailyReports: true,
    weeklyReports: true,
    monthlyReports: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
    minimumPasswordLength: 8
  });

  const handleGeneralSettingsChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSecuritySettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value, 10)
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Here we would save settings to Kuzzle
    alert('Settings saved successfully!');
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your application settings</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">General Settings</h2>
        </div>
        <div className="p-6">
          <form>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={generalSettings.companyName}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="contactEmail"
                    id="contactEmail"
                    value={generalSettings.contactEmail}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <div className="mt-1">
                  <select
                    id="timezone"
                    name="timezone"
                    value={generalSettings.timezone}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
                  Date Format
                </label>
                <div className="mt-1">
                  <select
                    id="dateFormat"
                    name="dateFormat"
                    value={generalSettings.dateFormat}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="timeFormat" className="block text-sm font-medium text-gray-700">
                  Time Format
                </label>
                <div className="mt-1">
                  <select
                    id="timeFormat"
                    name="timeFormat"
                    value={generalSettings.timeFormat}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="12h">12-hour (AM/PM)</option>
                    <option value="24h">24-hour</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="emailAlerts"
                  name="emailAlerts"
                  type="checkbox"
                  checked={notificationSettings.emailAlerts}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="emailAlerts" className="font-medium text-gray-700">Email Alerts</label>
                <p className="text-gray-500">Receive alerts via email when critical events occur.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="smsAlerts"
                  name="smsAlerts"
                  type="checkbox"
                  checked={notificationSettings.smsAlerts}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="smsAlerts" className="font-medium text-gray-700">SMS Alerts</label>
                <p className="text-gray-500">Receive alerts via SMS for urgent notifications.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="pushNotifications"
                  name="pushNotifications"
                  type="checkbox"
                  checked={notificationSettings.pushNotifications}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="pushNotifications" className="font-medium text-gray-700">Push Notifications</label>
                <p className="text-gray-500">Receive push notifications in your browser.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="dailyReports"
                  name="dailyReports"
                  type="checkbox"
                  checked={notificationSettings.dailyReports}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="dailyReports" className="font-medium text-gray-700">Daily Reports</label>
                <p className="text-gray-500">Receive daily summary reports.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="weeklyReports"
                  name="weeklyReports"
                  type="checkbox"
                  checked={notificationSettings.weeklyReports}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="weeklyReports" className="font-medium text-gray-700">Weekly Reports</label>
                <p className="text-gray-500">Receive weekly summary reports.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="monthlyReports"
                  name="monthlyReports"
                  type="checkbox"
                  checked={notificationSettings.monthlyReports}
                  onChange={handleNotificationChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="monthlyReports" className="font-medium text-gray-700">Monthly Reports</label>
                <p className="text-gray-500">Receive monthly summary reports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Security Settings</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="twoFactorAuth"
                  name="twoFactorAuth"
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={handleSecuritySettingsChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="twoFactorAuth" className="font-medium text-gray-700">Two-Factor Authentication</label>
                <p className="text-gray-500">Enable two-factor authentication for additional security.</p>
              </div>
            </div>

            <div>
              <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="sessionTimeout"
                  id="sessionTimeout"
                  min="5"
                  max="120"
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecuritySettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Users will be logged out after this period of inactivity.
              </p>
            </div>

            <div>
              <label htmlFor="passwordExpiry" className="block text-sm font-medium text-gray-700">
                Password Expiry (days)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="passwordExpiry"
                  id="passwordExpiry"
                  min="30"
                  max="365"
                  value={securitySettings.passwordExpiry}
                  onChange={handleSecuritySettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Users will be required to change their password after this many days.
              </p>
            </div>

            <div>
              <label htmlFor="minimumPasswordLength" className="block text-sm font-medium text-gray-700">
                Minimum Password Length
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="minimumPasswordLength"
                  id="minimumPasswordLength"
                  min="6"
                  max="20"
                  value={securitySettings.minimumPasswordLength}
                  onChange={handleSecuritySettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Passwords must be at least this many characters long.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSaveSettings}
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Settings
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Settings; 