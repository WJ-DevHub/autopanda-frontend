import React from "react";
import Login from "./login";
import Logout from "./logout";


export default function Navbar(props) {
  const {loggedIn, setLoggedIn, updateUserData} = props;
  const trial = props.page;

  console.log(trial)
  const switchPage = props.switchPage;

  const handleLogout = () => {
    setLoggedIn(false); // update loggedIn state to false
    switchPage("home"); // redirect to login page
  };
  

  function logoutUser(username) {
    const url = 'http://localhost:8080/userLogout';
    const data = { user_name: username };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch(url, options)
      .then(response => { 
        if (response.ok) {
          console.log("Cookie removed successfully");
        } else {
          console.log("Failed to remove cookie");
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            onClick={() => switchPage("home")}
          >
            AutoPanda Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => switchPage("home")}
                >
                  Home
                </a>
              </li>

              <li class="nav-item">
                {trial.userdata[0].loggedIn == false ? 
                <a></a>
                  :
                  <a
                    class="nav-link"
                    href="#"
                    onClick={() => switchPage("profile")}
                  >
                    Profile
                </a>
              }
              </li>

              <li class="nav-item">
                {trial.userdata[0].loggedIn == false ? 
                <a></a>
                  : 
                <a
                  class="nav-link"
                  href="#"
                  onClick={() => switchPage("history")}
                >
                History
              </a>
              }
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={() => switchPage("support")}
                >
                  Support
                </a>
              </li>
              <li class="nav-item">
              {trial.userdata[0].loggedIn == false ? 
                <Login trial={trial} 
                setLoggedIn={setLoggedIn}
                updateUserData={updateUserData}/>:
                <Logout trial={trial} 
                logoutUser={logoutUser}
                handleLogout={handleLogout} /> 
                }         
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
