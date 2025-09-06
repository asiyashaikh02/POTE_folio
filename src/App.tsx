import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FeedPage from './pages/FeedPage';
import StudentsPage from './pages/StudentsPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected Routes with Sidebar */}
          <Route path="/dashboard" element={
            <div className="flex">
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <main className="flex-1 lg:ml-64 p-6">
                <DashboardPage />
              </main>
            </div>
          } />
          
          <Route path="/feed" element={
            <div className="flex">
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <main className="flex-1 lg:ml-64 p-6">
                <FeedPage />
              </main>
            </div>
          } />
          
          <Route path="/students" element={
            <div className="flex">
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <main className="flex-1 lg:ml-64 p-6">
                <StudentsPage />
              </main>
            </div>
          } />
          
          <Route path="/profile" element={
            <div className="flex">
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <main className="flex-1 lg:ml-64 p-6">
                <DashboardPage />
              </main>
            </div>
          } />
          
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;