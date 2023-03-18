import React, { useState } from "react";

export default function PlaylistSummary(props) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
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
          <b>Almost there!</b>
        </h2>

        <h4>
          <b>Schedule</b>
        </h4>
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
