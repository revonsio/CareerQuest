import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './home/Home';
import Login from './Login';
import Registration from './Registration';
import Vacancy from './vacancy/Vacancy';
import Detail from './vacancy/Detail';
import Layout from './layout/Layout';  
import LayoutDashboard from './layout/LayoutDashboard';  
import Dashboard from './dashboard/Dashboard';  
import Profile from './dashboard/Profile';  
import AddJob from './dashboard/AddJobs'; 
import ListJobs from './dashboard/ListJobs';  
import ChangePass from './dashboard/ChangePassword';  
import EditJob from './dashboard/EditJob';  

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <Home />
              </Layout>
            } 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/registration" 
            element={<Registration />} 
          />

          <Route 
            path="/vacancy" 
            element={
              <Layout>
                <Vacancy />
              </Layout>
            } 
          />

          <Route 
            path="/jobs/:_id"  
            element={
              <Layout>
                <Detail />
              </Layout>
            } 
          />

          <Route 
            path="/dashboard"  
            element={
              <LayoutDashboard>
                <Dashboard />
              </LayoutDashboard>
            } 
          />

          <Route 
            path="/profile"  
            element={
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            } 
          />

          <Route 
            path="/add-jobs"  
            element={
              <LayoutDashboard>
                <AddJob />
              </LayoutDashboard>
            } 
          />

          <Route 
            path="/list-jobs"  
            element={
              <LayoutDashboard>
                <ListJobs />
              </LayoutDashboard>
            } 
          />

          <Route 
            path="/edit-job/:id"   
            element={
              <LayoutDashboard>
                <EditJob />
              </LayoutDashboard>
            } 
          />

          <Route 
            path="/change-password"  
            element={
              <LayoutDashboard>
                <ChangePass />
              </LayoutDashboard>
            } 
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
