import React from "react";

export default class ProfilePage extends React.Component {
  
  getUserDetails = (username) => {
    const url = 'http://localhost:8080/getUserData';
    const data = { user_name: username };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include' // include cookies in the request
    };
    
    fetch(url, options)
      .then(response => { 
        if (response.ok) {
          return response.json(); // parse response as JSON
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then(data => {
        console.log(data);
        console.log("User data fetched");
      })
      .catch(error => console.log(error));
  }

  userData = this.props.state.userdata;
  newDishData = this.props.state.userchoice.DishIncluded;


  render() {
    // console.log(this.props.state.userdata[0][0].loggedIn)
    return (
      <React.Fragment>
        <div class="container col-xxl-8 px-4 py-5">
          <h1>Profile</h1>
          <div class="row justify-content-around">
            <div
              class="card-fluid col-sm-5 col-12 text-start"
              style={{
                padding: 10,
                marginBottom: 25,
                boxShadow: "1px 2px 9px gray",
              }}
            >3
              <div class="row">
                <h3>Name</h3>
                <div>
                  {this.props.state.userdata[0][0].firstName+" "}
                  {this.props.state.userdata[0][0].lastName}
                  {this.getUserDetails("johndoe")}
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div
              class="card-fluid col-sm-5 col-12 text-start"
              style={{
                padding: 10,
                marginBottom: 25,
                boxShadow: "1px 2px 9px gray",
              }}
            >
              <div class="row">
                <h3>Email</h3>
              </div>
              {this.props.state.userdata[0][0].email}
            </div>
          </div>
          <div class="row justify-content-around">
            <div
              class="card-fluid col-sm-5 col-12 text-start"
              style={{
                padding: 10,
                marginBottom: 25,
                boxShadow: "1px 2px 9px gray",
              }}
            >
              <div class="row">
                <h3>Mobile Number</h3>
              </div>
              {this.props.state.userdata[0][0].mobile}
            </div>
          </div>
        </div>
        <div class="landing-divider"></div>
        <div class="container col-xxl-8 px-4 py-5">
          <h1>Saved addresses</h1>
          <div class="row justify-content-around">
            <div
              class="card-fluid col-sm-5 col-12 text-start"
              style={{
                padding: 10,
                marginBottom: 25,
                boxShadow: "1px 2px 9px gray",
              }}
            >
              <div class="row">
                <h3>Home</h3>
              </div>
              23 Village Road, East Blue{" "}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
