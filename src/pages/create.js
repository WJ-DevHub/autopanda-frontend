import React from "react";
import DishLoader from "../components/dishloader";
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
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
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

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
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
  };

  render() {
    return (
      <React.Fragment>
        <h1>You are looking at: {this.props.state.userchoice.vendortitle}</h1>
        <img
          src={this.props.state.userchoice.vendorheader}
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="100%"
          height="300"
          loading="lazy"
        />
        <div class="landing-divider"></div>

        <div class="container col-xxl-8 px-4 py-5">
          <h2>
            <b>Dishes</b>
          </h2>
          {this.props.state.dishdata.map((dish) =>
            dish.vendor_id === this.props.state.userchoice.vendor_id ? (
              <DishLoader
                dish={dish}
                addDish={this.props.addDish}
                registerChoice={this.registerChoice}
                constructor={this.constructor}
                onValueChange={this.onValueChange}
                picker={this.picker}
                dishChoice={this.state.dishChoice}
              />
            ) : (
              ""
            )
          )}

          <button
            className="btn btn-default"
            type="submit"
            onClick={() => {}}
            class="btn btn-primary btn-lg px-4 me-md-2"
          >
            Confirm Playlist
          </button>
        </div>
      </React.Fragment>
    );
  }
}
