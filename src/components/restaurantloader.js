import React from "react";

export default function RestaurantLoader(props) {
  function generateListItem(dish) {
    //  console.log(dish);
    for (const selected in dish) {
      // console.log(dish[selected]);
      if (dish[selected].restaurantID === props.restaurant.id) {
        return <li>{dish[selected].name}</li>;
      }
    }
    // dish.map((dish) => {
    //   if (dish.restaurantID === props.restaurant.id) {
    //     return String(dish.name);
    //   } else {
    //   }
    // });
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
        <div class="row text-start">
          <h4>{props.restaurant.restaurantName}</h4>
        </div>
        <div class="row">
          <div class="col-3">
            <img src={props.restaurant.logoURL} />
          </div>
          <div class="col-6">{generateListItem(props.dishes)}</div>
          <div class="col-3">
            <button
              className="btn btn-default"
              type="submit"
              onClick={() => {
                props.userChose(props.restaurant);
                props.switchPage("creating");
              }}
              class="btn btn-primary btn-lg px-4 me-md-2"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
