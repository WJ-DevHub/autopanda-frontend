import React from "react";
import Swimlane from "../components/swimlane";
//import axios from "axios";
//import vendordata from "../API/vendordata.json";
//import { VendorDetails } from "../components/loader";

export default class HomePage extends React.Component {
  /*
  async componentDidMount() {
    console.log("mounted");
    const vendordetails = require("../API/vendordata.json");
    this.setState({ data: vendordetails });
  }
*/
  render() {
    console.log(this.props.state.vendordata);
    return (
      <React.Fragment>
        <h1>Home</h1>
        <div class="container col-xxl-8 px-4 py-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/images/placeholder1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder4.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="landing-divider"></div>
        <div class="container col-xxl-8 px-4 py-5">
          <Swimlane
            state={this.props.state}
            userChose={this.props.userChose}
            switchPage={this.props.switchPage}
          />
        </div>
      </React.Fragment>
    );
  }
}
