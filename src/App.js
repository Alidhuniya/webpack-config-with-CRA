import React from 'react'
import "./App.scss";
import logo from  "./assets/logo.svg";
import Vendor from './vendor';

export default function App() {
    return (
        <div>
        <img src= {logo} />
            <h1 className = "heading">Hello from webpack</h1>
            <h2>h2</h2>
            <p className = " prg">Wao it's working</p>
            <Vendor />
        </div>

        
    );
}
