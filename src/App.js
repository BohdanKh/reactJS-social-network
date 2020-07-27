import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile';


function App() {
    return ( <
        div className = "app-wrapper" >
        <
        Header / >
        <
        Navbar / >
        <
        Profile / >
        <
        /div>
    );
}

export default App;