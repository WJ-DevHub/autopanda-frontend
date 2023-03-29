import React from "react";

export default function DishLoader(props) {
  return (
    <React.Fragment>
      <div
        class="card-fluid col-sm-5 col-12"
        style={{
          padding: 10,
          marginBottom: 25,
          boxShadow: "1px 2px 9px gray",
        }}
      >
        <h1>
          {props.dish.name} (${props.dish.price})
        </h1>
        <h4>{props.dish.comment}</h4>
        <h4>
          <b>Options:</b>
        </h4>

        {props.dish.dishOptions.map((option) =>
          option.map((child) =>
            child === option[0] ? (
              <h5>{child}</h5>
            ) : (
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name={option[0]}
                    title={props.dish.name}
                    value={child}
                    onChange={(event) => {
                      props.onValueChange(event);
                    }}
                    checked={props.dishChoice[option[0]] === child}
                  />
                  {child}
                </label>
              </div>
            )
          )
        )}
        <button
          className="btn btn-default"
          type="submit"
          onClick={() => {
            props.registerChoice(props.dish.dishOptions.length + 1);
          }}
          class="btn btn-primary btn-lg px-4 me-md-2"
        >
          Add to Playlist
        </button>
      </div>
    </React.Fragment>
  );
}
