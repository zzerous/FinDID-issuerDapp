import React from 'react'
import Nav from 'components/Nav'
import Navbar from 'components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserInfo from 'pages/UserInfo';
import UserCard from 'pages/UserCard';
import UserWallet from 'pages/UserWallet';
import UserSetting from 'pages/UserSetting';
import './App.scss'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/info" element={<UserInfo/>}/>
                <Route path="/" element={<UserCard/>}/>
                <Route path="/wallet" element={<UserWallet/>}/>
                <Route path="/setting" element={<UserSetting/>}/>
            </Routes>
        </Router>
    );
};

export default App;