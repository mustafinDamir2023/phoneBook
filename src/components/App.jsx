import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './UI/NavBar'
import SignUpPage from './Pages/auth/SignUpPage';
import LoginPage from './Pages/auth/LoginPage';
import HomePage from './Pages/HomePage';
import AddCompanyPage from './Pages/AddCompanyPage';
import MyCompanyPage from './Pages/MyCompanyPage';


export default function App({ user, allCompany, allUserCompany }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage allCompany={allCompany} user={user}/>} />
        <Route path="/add/comp" element={<AddCompanyPage />} />
        <Route path="/my/comp" element={<MyCompanyPage allUserCompany={allUserCompany} user={user} />} />
      </Routes>
    </div>
  );
}
