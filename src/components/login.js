import React from "react";
import { useState } from "react";

export default function Login(props) {

    const { loggedIn, setLoggedIn, userdata, updateUserData } = props;
    const info = props.trial;
    console.log(info)
    
    const [visible, setVisible] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    
    // call the updateUserdata function to update the user data in the App component
    //CHANGE THE VALUES HERE
    const handleLogin = (newUserName) => {
      const newUserData = [{
        loggedIn: true, 
        firstName: "newFirstName", 
        lastName: "newLastName", 
        userName: newUserName, 
        userPassword: "newPassword", 
        email: "newEmail", 
        mobile: "newMobile"}];
      setLoggedIn(true);
      updateUserData(newUserData);
    };
  
    const handleLogout = () => {
      setLoggedIn(false);
    };

    const toggleVisibility = () => {
        setVisible(!visible);
        setShowAnimation(!showAnimation);
      };

    function handleUsernameChange(event) {
        setUsernameValue(event.target.value);
    }

    function handlePasswordChange(event) {
        setPasswordValue(event.target.value);
    }

    function loginUser(username, password, props, handleLogin) {
      const url = 'http://localhost:8080/userLogin';
      const data = { user_name: username, user_password: password };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
    
      if (options.method === 'OPTIONS') {
        return fetch(url, options).then(response => {
          if (response.status === 204) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Failed to make CORS request.'));
          }
        });
      } else {
        return fetch(url, options)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            console.log(response)
            return response.json();
          })
          .then(data => {
            console.log(data);
            //If cookie name and value exists (Change logged in to true)
              handleLogin(username)
              if(data.cookie){
              const cookieOptions = `Domain=localhost; Path=/; Secure; SameSite=None`;
              document.cookie = `${data.cookie.Name}=${data.cookie.Value}; ${cookieOptions}`;
              console.log('Handle LOGIN called')
              }
              // Else (logged in is false)
              else{
                handleLogout()
                console.log('Handle logout called')
              }
            
            console.log(props)
          })
          .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
          });
      }
    }
    
    
  return (
    <React.Fragment>
      <a className="nav-link" href="#" onClick={toggleVisibility}>
        Login
      </a>
      {visible && (
        <div className="login-wrapper">
          <div className={`animation ${showAnimation ? 'fade-in' : ''}`}>

            <div className="form-group">
              <label className="form-label" htmlFor="login">
                Username:
              </label>
              <input className="form-control" 
              type="text" 
              id="login" 
              name="login"
              onChange={handleUsernameChange}/>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="login">
                Password:
              </label>
              <input className="form-control" 
              style={{ marginBottom: "8px" }} 
              type="text" id="login" 
              name="login"
              onChange={handlePasswordChange} />
            </div>

            <button className="btn btn-outline-secondary btn-lg px-4" style={{ fontSize: "10px" }}
             onClick={() => {
              loginUser(usernameValue, passwordValue, info, handleLogin);
            }}>
              Login
            </button>

          </div>
        </div>
      )}
    </React.Fragment>
  );
}
