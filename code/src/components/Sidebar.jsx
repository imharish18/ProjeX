// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Navigation</h2>
      <nav>
        <ul>
          <li className="mb-4">
            {/* Use Link instead of <a href=""> */}
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/reports" className="hover:text-blue-300">Reports</Link>
          </li>
          {/* Add more links here as you build more pages */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;