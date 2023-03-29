import React from "react";

export default class ProfilePage extends React.Component {
  state = {};

  render() {
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
            >
              <div class="row">
                <h3>Name</h3>
              </div>
              Monkey D. Luffy
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
              d.luffy@strawhats.com
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
              +65 23442958
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
