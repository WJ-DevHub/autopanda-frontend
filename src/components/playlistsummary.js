import React, { useState } from "react";
import TimePicker from "./timepicker";

export default function PlaylistSummary(props) {
  function generateList(items) {
    for (let i = 0; i < items.length; i++) {
      <h2> test </h2>;
    }
  }

  function convertToList(object) {
    return Object.entries(object);
  }

  function generateListItem(dish) {
    let item = dish.item.item;
    //console.log(typeof item);
    // console.log(dish.item);
    //    delete dish.item.item;
    let options = "";
    for (const option in dish.item) {
      console.log(typeof option);
      if (option === "item") {
        console.log("key");
        continue;
      } else {
        console.log("no key");
        options += option + " : " + dish.item[option] + " || ";
      }
      // console.log(dish[option]);
    }
    console.log("these are the options " + options);
    return String(item + " | " + options);
  }

  return (
    <React.Fragment>
      <div
        class="card"
        style={{
          padding: 10,
          marginBottom: 25,
          boxShadow: "1px 2px 9px gray",
        }}
      >
        <h2>
          <b>Order Summary</b>
        </h2>
        <h5>You are purchasing from {props.vendordata.vendortitle}</h5>
        {generateList(props.state.dishes)}
        {props.state.dishes.map((dish) => (
          <li>{generateListItem(dish)}</li>
        ))}
      </div>
      <div
        class="card"
        style={{
          padding: 10,
          marginBottom: 25,
          boxShadow: "1px 2px 9px gray",
        }}
      >
        <h2>
          <b>Frequency</b>
        </h2>
        <TimePicker
          vendordata={props.vendordata}
          selectDay={props.selectDay}
          daypicked={props.state.daypicked}
          slotpicked={props.state.slotpicked}
          selectSlot={props.selectSlot}
          freqpicked={props.state.freqpicked}
          selectFreq={props.selectFreq}
        />
        <h5>Please deliver every:</h5>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.freqpicked === "" ? "Select Frequency" : props.freqpicked}{" "}
          </button>
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                id="dropdown-day"
                value={"Daily"}
                onClick={() => {
                  props.selectFreq("Daily");
                }}
              >
                Daily
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                id="dropdown-day"
                value={"Weekly"}
                onClick={() => {
                  props.selectFreq("Weekly");
                }}
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                id="dropdown-day"
                value={"Monthly"}
                onClick={() => {
                  props.selectFreq("Monthly");
                }}
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>
        {props.daypicked === "" ||
        props.slotpicked === "" ||
        props.freqpicked === "" ? null : (
          <h6>
            {" "}
            <p />
            We will deliver your order on <b>{props.daypicked[1]}</b> at{" "}
            <b>{props.slotpicked}</b> on a <b>{props.freqpicked}</b> basis.
          </h6>
        )}
      </div>
      <div
        class="card"
        style={{
          padding: 10,
          marginBottom: 25,
          boxShadow: "1px 2px 9px gray",
        }}
      >
        <h2>
          <b>Delivery Specifications</b>
        </h2>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-12">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter Address"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-md-5">
              <label for="address2" class="form-label">
                Unit Number <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="unit"
                placeholder="Floor-Unit Number"
              />
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
        </form>
      </div>
      <button
        className="btn btn-default"
        type="submit"
        onClick={() => {
          props.summaryToggle();
        }}
        class="btn btn-primary btn-lg px-4 me-md-2"
      >
        Go Back
      </button>
      <button
        className="btn btn-default"
        type="submit"
        onClick={() => {
          props.registerChoice(props.dish.options.length + 1);
        }}
        class="btn btn-primary btn-lg px-4 me-md-2"
      >
        Confirm Playlist
      </button>
    </React.Fragment>
  );
}
