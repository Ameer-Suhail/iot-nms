import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon,
  Devices as DevicesIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Logout as LogoutIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import logo from '../../assets/logo-008080-no-bg.svg';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  // Initialize sidebar state from localStorage
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    return savedState ? JSON.parse(savedState) : true; // Default to open (true) if not found
  });

  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
    { name: 'Devices', href: '/devices', icon: DevicesIcon },
    { name: 'Users', href: '/users', icon: PeopleIcon },
    { name: 'Settings', href: '/settings', icon: SettingsIcon },
  ];

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem('sidebarOpen', JSON.stringify(newState)); // Save the new state in localStorage
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col">
      {/* Header */}
      <header className="bg-white z-10 relative">
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Empty div to push logo to the center */}
          <div className="flex-1"></div>

          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Ariot Logo" className="h-[50px] w-auto" />
          </div>

          {/* Admin User Section on the right */}
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">AD</span>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          style={{ width: sidebarOpen ? '180px' : '60px' }}
          className="bg-[#008080] text-white transition-all duration-300 ease-in-out h-full rounded-tr-3xl rounded-br-3xl"
        >
          <div className="flex flex-col justify-between h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between h-16 px-6">
              {sidebarOpen ? (
                <>
                  <div className="flex items-center p-4">
                    {/* <img src={logo} alt="Company Logo" className="h-[100px] w-auto" /> */}
                  </div>
                  <ChevronLeftIcon
                    onClick={toggleSidebar}
                    className="text-white stroke-2 cursor-pointer"
                  />
                </>
              ) : (
                <ChevronRightIcon
                  onClick={toggleSidebar}
                  className="mx-auto text-white stroke-2 cursor-pointer"
                />
              )}
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 flex flex-col justify-evenly">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      group flex items-center px-6 py-6 text-base font-medium
                      ${isActive ? 'text-white hover:text-white' : 'text-slate-300 hover:text-white'}
                    `}
                  >
                    <div
                      className={`mr-4 h-8 w-8 flex items-center justify-center rounded-full 
                        ${isActive ? 'shadow-md' : ''}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {sidebarOpen && item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="p-2">
              <Link
                to="/login"
                className="flex items-center px-4 py-3 text-base font-medium rounded-md text-red-400  hover:text-red-600"
              >
                <LogoutIcon className="mr-4 h-6 w-6" />
                {sidebarOpen && 'Logout'}
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-white p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
