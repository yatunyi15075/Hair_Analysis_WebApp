import React from 'react';
import { ClerkProvider, SignedIn, SignedOut, SignUp, SignIn } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import AnalysisPage from './pages/AnalysisPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


// Using Vite environment variables for Clerk API key
const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route index element={<Home />} />
        
        {/* Login route, redirect signed-in users to "/dashboard/analysis" */}
        <Route path="/login" element={
          <>
            <SignedIn>
              <Navigate to="/dashboard/analysis" replace />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-center h-screen">
                <SignIn />
              </div>
            </SignedOut>
          </>
        } />
        
        {/* Signup route */}
        <Route path="/signup" element={
          <div className="flex items-center justify-center h-screen">
            <SignUp />
          </div>
        } />
        
        {/* Dashboard and nested routes */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="photo" element={<PhotoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
