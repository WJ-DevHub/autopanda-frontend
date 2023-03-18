import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landing";
import SupportPage from "./pages/support";
import ProfilePage from "./pages/profile";
import HistoryPage from "./pages/history";
import HomePage from "./pages/home";
import Create from "./pages/create";
//import {useSelector, useDispatch} from 'react-redux;'
import axios from "axios";

/*
TODO:

DONE - landing page component

navbar component
DONE - points to relevant pages
- checks if JWT authenticated

swimlane microservice
- populates 'featured lists'

playlist microservice
- 

    this.setState({
      dishCart: [...this.state.dishCart, dishChoice],
    });

*/
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;

export default class App extends React.Component {
  state = {
    page: "landing",
    vendordata: [],
    dishdata: [],
    userdata: [],
    userplaylist: [],
    newplaylist: [
      {
        vendorId: "",
        orderContent: [],
        deliverAddress: "",
        deliverReceiver: "",
        deliverDay: "",
        deliverTime: "",
        deliverFrequency: "",
      },
    ],
    promodata: [],
    userchoice: [],
    dishCart: [],
  };

  async componentDidMount() {
    console.log(`ComponentDidMount`);
    const vendorDataResponse = await axios.get(
      `${this.BASE_API_URL}/vendordata`
    );
    const dishDataResponse = await axios.get(`${this.BASE_API_URL}/dishdata`);
    console.log(vendorDataResponse.data);
    this.setState({
      vendordata: vendorDataResponse.data,
      dishdata: dishDataResponse.data,
    });
  }

  BASE_API_URL = "https://autopanda-backend.onrender.com";
  USERDATA_URL = "";

  switchPage = (page) => {
    this.setState({
      page: page,
    });
  };

  userChose = (vendorId) => {
    this.setState({
      userchoice: vendorId,
    });
  };

  addDish = (dishChoice) => {};

  renderPage() {
    if (this.state.page === "landing") {
      return <LandingPage />;
    } else if (this.state.page === "creating") {
      return (
        <Create
          state={this.state}
          switchPage={this.switchPage}
          addDish={this.addDish}
        />
      );
    } else if (this.state.page === "home") {
      return (
        <HomePage
          state={this.state}
          userChose={this.userChose}
          switchPage={this.switchPage}
        />
      );
    } else if (this.state.page === "profile") {
      return <ProfilePage />;
    } else if (this.state.page === "history") {
      return <HistoryPage />;
    } else if (this.state.page === "support") {
      return <SupportPage />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar page={this.state} switchPage={this.switchPage} />
          <div>{this.renderPage()}</div>
          <header className="App-header"></header>
        </div>
      </React.Fragment>
    );
  }
}
