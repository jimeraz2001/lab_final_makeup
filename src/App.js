import './App.css';
import Loginform from './login';
import Dashboard from "./dashboard";
import { useEffect, useState } from 'react';
function App() {

  //state hook to store if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // hook to check login status of the user on first page render
  useEffect(()=>{
    const authStatus = localStorage.getItem('loggedIn')
    if(authStatus === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  //state hook to store the actual user login infos
  const [loginInfo] = useState([
    {
      username: 'meraz',
      password: '123456',
    },
    {
      username: 'admin',
      password: 'admin',
    }
  ])

  return (
    <div className="page">
      {isLoggedIn ? <Dashboard setLoginStatus={setIsLoggedIn}/> : <Loginform loginInfo={loginInfo} setLoginStatus={setIsLoggedIn} />}
    </div>
  );
}

export default App;

