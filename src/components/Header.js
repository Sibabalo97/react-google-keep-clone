import React from 'react';
import { Menu, Search, Grid, Settings, User } from 'lucide-react';

const Header = ({ toggleSidebar }) => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    {/* Left section: Logo and Menu Button */}
    <div className="flex items-center gap-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtohA8jm5FbqDjAAySeX33n3sn2usht8MFsA&s"
        alt="Google Keep Logo"
        className="h-8"
      />
      <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
        <Menu className="w-5 h-5" />
      </button>
    </div>

    {/* Center section: Search Bar */}
    <div className="flex justify-center flex-grow">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-1 px-3 outline-none w-full"
        />
        <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    {/* Right section: Icons (Grid, Settings, User) */}
    <div className="flex items-center gap-4">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Grid className="w-5 h-5" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Settings className="w-5 h-5" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <User className="w-5 h-5" />
      </button>
    </div>
  </header>
);

export default Header;
