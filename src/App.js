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
import FeaturedPlaylist from "./pages/featuredplaylist";
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
    playlistData: {
      data: [],
      error: false,
      message: "",
    },
    userData: {
      data: [],
      error: false,
      message: "",
    },
  };

  async componentDidMount() {
    console.log(`ComponentDidMount`);
    const vendorDataResponse = await axios.get(
      `${this.BASE_API_URL}/vendordata`
    );
    const dishDataResponse = await axios.get(`${this.BASE_API_URL}/dishdata`);
    const playlistsDataResponse = await axios.get(
      `${this.PLAYLIST_URL}/playlists`
    );
    const userDataResponse = await axios.get(
      `${this.SUBSCRIPTION_URL}/subscription/user` + `/${this.currentUser}`
    );

    this.setState({
      vendordata: vendorDataResponse.data,
      dishdata: dishDataResponse.data,
      playlistData: playlistsDataResponse.data.data,
      userData: userDataResponse.data,
    });
  }

  // addNewPlaylist = async () => {
  //   const newPlaylist = {
  //     "playlistName": "TESTING THE PLAYLIST",
  //     "categoryCode": "Mal",
  //     "dietaryInfo": "None",
  //     "status": "Active",
  //     "startDate": "2023-02-11T00:00:00Z",
  //     "endDate": "2023-04-26T00:00:00Z",
  //     "popularity": 5
  //   };
  //   const response = await axios.post(
  //     this.TRIAL_URL + "/playlists/new",
  //     newPlaylist
  //   );
  //   console.log(`New Recipe Added`);
  //   console.log(response);
  //   this.setState({ submitted: newPlaylist });
  // };

  // addNewSubscription = async() => {
  //   const newSubscription = {"SubscriptionRequest": {
  //     "userID": "",
  //     "playlistID": "",
  //     "customized": false,
  //     "frequency": "",
  //     "startDate": "",
  //     "endDate": ""
  //   },
  // "DishIncluded": [
  //   {}
  // ]}
  // }

  BASE_API_URL = "https://autopanda-backend.onrender.com";
  PLAYLIST_URL = "http://localhost:8081";
  SUBSCRIPTION_URL = "http://localhost:8083";

  currentUser = "user6";

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
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderPage() {
    if (this.state.page === "landing") {
      return <LandingPage />;
    } else if (this.state.page === "creating") {
      return (
        <Create
          state={this.state}
          switchPage={this.switchPage}
          addDish={this.addDish}
          updateFormField={this.updateFormField}
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
    } else if (this.state.page === "featuredplaylist") {
      return <FeaturedPlaylist />;
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
          <button onClick={this.addNewPlaylist}>Click here</button>
        </div>
      </React.Fragment>
    );
  }
}
