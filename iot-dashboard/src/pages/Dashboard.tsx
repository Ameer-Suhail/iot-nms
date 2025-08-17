import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import DashboardLayout from '../components/layout/DashboardLayout';

// Mock data - will be replaced with real data from Kuzzle
const deviceStatusData = [
  { name: 'Online', value: 42, color: '#10B981' },
  { name: 'Offline', value: 8, color: '#EF4444' },
  { name: 'Maintenance', value: 5, color: '#F59E0B' }
];

const activityData = [
  { name: 'Mon', devices: 30, alerts: 4 },
  { name: 'Tue', devices: 35, alerts: 2 },
  { name: 'Wed', devices: 40, alerts: 5 },
  { name: 'Thu', devices: 38, alerts: 3 },
  { name: 'Fri', devices: 42, alerts: 1 },
  { name: 'Sat', devices: 25, alerts: 0 },
  { name: 'Sun', devices: 20, alerts: 0 }
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDevices: 0,
    activeDevices: 0,
    totalUsers: 0,
    alerts: 0
  });

  useEffect(() => {
    // Mock data loading - will be replaced with Kuzzle API calls
    setStats({
      totalDevices: 55,
      activeDevices: 42,
      totalUsers: 12,
      alerts: 3
    });
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full">
        {/* <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1> */}
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* First Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-6">
              <div className="p-4 rounded-full bg-blue-50 text-blue-600 w-fit">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Total Devices</h2>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalDevices}</p>
              </div>
            </div>
          </div>
          
          {/* Second Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-6">
              <div className="p-4 rounded-full bg-green-50 text-green-600 w-fit">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Active Devices</h2>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeDevices}</p>
              </div>
            </div>
          </div>
          
          {/* Third Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-6">
              <div className="p-4 rounded-full bg-purple-50 text-purple-600 w-fit">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Total Users</h2>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
          
          {/* Fourth Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-6">
              <div className="p-4 rounded-full bg-red-50 text-red-600 w-fit">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Active Alerts</h2>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.alerts}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Device Status</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {deviceStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Activity</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activityData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="devices" fill="#3B82F6" name="Active Devices" />
                  <Bar dataKey="alerts" fill="#EF4444" name="Alerts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Recent Alerts */}
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Device ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alert Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      DEV-1234
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Temperature High
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Critical
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      10 minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      DEV-5678
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Connection Lost
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Warning
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1 hour ago
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      DEV-9012
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Battery Low
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Warning
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3 hours ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 