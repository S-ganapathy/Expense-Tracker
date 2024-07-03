import React from "react";
import '../App.css';
const Header=()=>{
    const dec={
        // color:"darkgrey",
        fontWeight:"Bold"
    }
    return(
        <div className="header">
        <h1 style={dec}>Your Expense Tracker</h1>
        </div>
    );
}

export default Header;