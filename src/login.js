import React, { useState } from "react";
import "./login.css";

const Loginform = (props) => {
    //state to store the form inputs values
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    // change the input values when somone change any input field's value
    const handleInput = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    // execute this function when someone click on the login button
    const login = () => {
        //variable to store a value to identify if the login was successfull or not
        let matched = false

        //looping to check all the available data
        props.loginInfo.forEach(item => {
            if(item.username === inputs.username && item.password === inputs.password){
                props.setLoginStatus(true)
                localStorage.setItem('loggedIn', true) //set item on login
                matched = true
            }
        })

        //show error if the login info is wrong
        if(matched === false) {
            alert('Wrong credentials!')
        }
    }

    return (
        <div className="cover">
            <h1>LOGIN</h1>

            <input type="text" onChange={handleInput} value={inputs.username} name="username" placeholder="Username" />
            <input type="password" onChange={handleInput} value={inputs.password} name="password" placeholder="Password" />

            <button onClick={login}>Login</button>


        </div>
    )
}

export default Loginform