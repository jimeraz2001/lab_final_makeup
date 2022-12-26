import React from "react";
import "./dashboard.css";
function Dashboard(props) {
    //execute this function when someone click on the logout button
    const logout = () => {
        props.setLoginStatus(false) //set the login status false
        localStorage.removeItem('loggedIn') //remove item on logout
    }

    return (
        <div className="header">
            <div className="logo">
                <h1>Hi, Welcome To My Website!</h1>
                <br/>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard