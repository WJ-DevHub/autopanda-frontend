import React, { useState } from "react";

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
    // console.log(dish);
    //    delete dish.item.item;
    let options = "";
    for (const option in dish) {
      // console.log(option);
      if (option.key === item) {
        continue;
      }
      // console.log(dish[option]);
    }
    return String(item + " | ");
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
        {console.log(convertToList(props.state.dishes)[0])}
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
          <b>Delivery Address</b>
        </h2>
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
