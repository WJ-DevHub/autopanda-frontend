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
    userdata: [
      {
        loggedIn: false,
        id: "",
        firstName: "",
        lastName: "",
        userName: "",
        userPassword: "",
        email: "",
        mobile: "",
      },
    ],
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
    restaurantdata: [],
    newDishData: [],
    currentRestarant: [],
  };

  async componentDidMount() {
    console.log(`ComponentDidMount`);
    const vendorDataResponse = await axios.get(
      `${this.BASE_API_URL}/vendordata`
    );
    const dishDataResponse = await axios.get(`${this.BASE_API_URL}/dishdata`);
    const restaurantDataResponse = await axios.get(
      `${this.PLAYLIST_URL}/playlists/restaurants`
    );
    // const userDataResponse = await axios.get(
    //   `${this.SUBSCRIPTION_URL}/subscription/user` + `/${this.currentUser}`
    // );
    const playlistDataResponse = await axios.get(
      `${this.PLAYLIST_URL}/playlists`
    );

    this.setState({
      vendordata: vendorDataResponse.data,
      dishdata: dishDataResponse.data,
      restaurantdata: restaurantDataResponse.data.data,
      // userData: userDataResponse.data,
      playlistData: playlistDataResponse.data.data,
    });
  }

  async getRestaurantDishes() {
    const dishDataResponse = await axios.get(
      `${this.PLAYLIST_URL}/playlists/restarant` +
        `/${this.state.currentRestarant}`
    );
    this.setState({
      newDishData: dishDataResponse.data,
    });
  }

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
  addDish = (dishChoice) => {};

  setLoggedIn = (loggedIn) => {
    const { userdata } = this.state;
    const updatedUserdata = [{ ...userdata[0], loggedIn }];
    this.setState({
      userdata: updatedUserdata,
    });
  };

  updateUserData = (newUserdata) => {
    const { userdata } = this.state;
    var a = userdata[0][0];
    console.log(a);
    this.setState({
      userdata: [newUserdata],
    });
  };
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderPage() {
    console.log(`User Data APP.JS: ${JSON.stringify(this.state.userdata[0])}`);
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
      return (
        <ProfilePage state={this.state} updateUserData={this.updateUserData} />
      );
    } else if (this.state.page === "featuredplaylist") {
      return (
        <FeaturedPlaylist
          state={this.state}
          switchPage={this.switchPage}
          userChose={this.userChose}
        />
      );
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
          <Navbar
            page={this.state}
            switchPage={this.switchPage}
            updateUserData={this.updateUserData}
            setLoggedIn={this.setLoggedIn}
          />
          <div>{this.renderPage()}</div>
          <header className="App-header"></header>
          <button onClick={this.addNewPlaylist}>Click here</button>
        </div>
      </React.Fragment>
    );
  }
}
