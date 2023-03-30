import React from "react";
import DishLoader from "../components/dishloader";
import TimePicker from "../components/timepicker";
import PlaylistSummary from "../components/playlistsummary";
import axios from "axios";

//import axios from "axios";
//import vendordata from "../API/vendordata.json";
//import { VendorDetails } from "../components/loader";

/*
TO-DO:
1.(DONE) Draft out flow and ensure proper import of state
2.(DONE) Format fields and populated
3.(DONE) Ensure order conditions met
4. Error handling (for user)  
*/

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      dishChoice: {},
      dishes: [],
      daypicked: "",
      slotpicked: "",
      freqpicked: "",
      showSummary: false,
      deliveryAddress: [],
      userAddress: "",
      userUnit: "",
      userZip: "",
      userReceiver: "",
      newPlaylist: [],
      newDishData2: [],
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  async componentDidMount() {
    const dishDataResponse = await axios.get(
      `${this.SELECTED_API_URL}` + `/${this.props.state.userchoice.id}`
    );

    this.setState({ newDishData2: dishDataResponse.data.data.DishIncluded });
  }

  SELECTED_API_URL = "http://localhost:8081/playlists/restaurant";

  showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("popup--hide");
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 5000);
  }

  onValueChange(event) {
    const picker = event.target.name;

    let optionList = this.state.dishChoice;

    if (event.target.title !== optionList.item) {
      optionList = {};
    }

    optionList.item = event.target.title;

    if (picker in this.state.dishChoice === false) {
      optionList[picker] = event.target.value;
    } else {
      delete optionList[picker];
      optionList[picker] = event.target.value;
    }
    this.setState({ dishChoice: optionList });
  }

  formSubmit() {
    this.showPopup("Playlist submitted!");

    // let data = this.state.dishes;
    // const result = {};
    // for (const key in data) {
    //   const dishId = [];
    //   console.log(key);
    //   if (key === data[0]) {
    //     continue;
    //   }
    //   dishId[key] = data.item[key];
    //   result.push({ DishID: dishId });
    // }

    //     let dishObject = {
    // for
    //     }

    //         this.setState({ newPlaylist: {
    //           "userID": "user6",
    //           "playlistID": "",
    //           "customized": false,
    //           "status": "Active",
    //           "frequency": this.freqpicked,
    //           'startDate': "",
    //           "endDate": "",
    //           "TimeSlot": this.slotpicked,
    //           "restaurantID": this.props.state.userchoice.id,
    //           "DishIncluded": [{

    //           }]

    //         } });
  }

  registerChoice = (numberofchoices) => {
    if (numberofchoices !== Object.keys(this.state.dishChoice).length) {
      return console.log("incorrect number of choices");
    }
    this.setState({
      dishes: [
        ...this.state.dishes,
        {
          item: this.state.dishChoice,
        },
      ],
    });
    console.log("sucessfully added!");
    this.setState({
      dishChoice: {},
    });
    this.showPopup("Dish added!");
  };

  submitPlaylist(event) {
    event.preventDefault();
    this.setState({
      newPlaylist: [[]],
    });
  }

  selectDay = (dayChoice) => {
    let week = [
      [0, "Mon"],
      [1, "Tue"],
      [2, "Wed"],
      [3, "Thur"],
      [4, "Fri"],
      [5, "Sat"],
      [6, "Sun"],
    ];
    this.setState({ daypicked: week[Number(dayChoice)] });
    console.log(dayChoice);
  };

  selectSlot = (slotChoice) => {
    this.setState({ slotpicked: slotChoice });
  };

  selectFreq = (freqChoice) => {
    this.setState({ freqpicked: freqChoice });
  };

  summaryToggle = () => {
    this.setState({ showSummary: !this.state.showSummary });
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          You are looking at: {this.props.state.userchoice.restaurantName}
        </h1>
        <img
          src={this.props.state.userchoice.headerURL}
          class="d-block mx-lg-auto img-fluid"
          alt="Restaurant Header"
          width="100%"
          height="300"
          loading="lazy"
        />
        <div class="landing-divider"></div>
        {!this.state.showSummary && (
          <div class="container col-xxl-8 px-4 py-5">
            <h2>
              <b>Dishes</b>
            </h2>
            <div class="col-auto">
              <div class="row justify-content-around">
                {this.state.newDishData2.map((dish) => (
                  <DishLoader
                    dish={dish}
                    addDish={this.props.addDish}
                    registerChoice={this.registerChoice}
                    constructor={this.constructor}
                    onValueChange={this.onValueChange}
                    picker={this.picker}
                    dishChoice={this.state.dishChoice}
                    showPopup={this.showPopup}
                  />
                ))}
              </div>
            </div>
            <button
              className="btn btn-default"
              type="submit"
              onClick={() => {
                this.summaryToggle();
              }}
              class="btn btn-primary btn-lg px-4 me-md-2"
            >
              Proceed to Summary
            </button>
          </div>
        )}
        {this.state.showSummary && (
          <div class="container col-xxl-8 px-4 py-5">
            <PlaylistSummary
              state={this.state}
              vendordata={this.props.state.userchoice}
              summaryToggle={this.summaryToggle}
              selectDay={this.selectDay}
              daypicked={this.state.daypicked}
              slotpicked={this.state.slotpicked}
              selectSlot={this.selectSlot}
              freqpicked={this.state.freqpicked}
              selectFreq={this.selectFreq}
              deliveryAddress={this.state.deliveryAddress}
              updateFormField={this.updateFormField}
              formSubmit={this.formSubmit}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
