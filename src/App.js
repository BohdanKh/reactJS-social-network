import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile';
import Messages from "./components/messages/messages";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                        <Route path='/profile' component={Profile} />
                        <Route path='/messages' component={Messages} />
                        <Route path={'/music'}  />
                    {/*<Profile/>*/}
                    {/*<Messages/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;