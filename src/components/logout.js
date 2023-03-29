import React from "react";

export default function Logout(props) {
    const { handleLogout, logoutUser } = props;

    function handleClick() {
      logoutUser();
      handleLogout("johndoe");
    }
  
  return (
    <React.Fragment>
      <a className="nav-link" href="#" onClick={handleClick}>
        Logout
      </a>
    </React.Fragment>
  );
}


