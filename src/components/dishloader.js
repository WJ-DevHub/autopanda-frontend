import React from "react";

export default function DishLoader(props) {
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
        <h1>
          {props.dish.title} (${props.dish.price})
        </h1>
        <h4>{props.dish.description}</h4>
        <h4>
          <b>Options:</b>
        </h4>

        {props.dish.options.map((option) =>
          option.map((child) =>
            child === option[0] ? (
              <h5>{child}</h5>
            ) : (
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name={option[0]}
                    title={props.dish.title}
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
            props.registerChoice(props.dish.options.length + 1);
          }}
          class="btn btn-primary btn-lg px-4 me-md-2"
        >
          Add to Playlist
        </button>
      </div>
    </React.Fragment>
  );
}
