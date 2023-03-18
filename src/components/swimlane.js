import React from "react";
import { Card } from "react-bootstrap";

export default function Swimlane(props) {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "left" }}>Asian Delights</h3>
      <div class="scrolling-wrapper-flexbox">
        <div class="card center-cropped">
          <img src="/images/placeholder1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="card center-cropped">
          <img src="/images/placeholder2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="card center-cropped">
          <img src="/images/placeholder3.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="card center-cropped">
          <img src="/images/placeholder4.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="card center-cropped">
          <img src="/images/placeholder1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="card center-cropped">
          <img src="/images/placeholder2.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <h3 style={{ textAlign: "left" }}>Supper Treatment</h3>
      <div class="card-lane">
        {props.state.vendordata.map((eachVendor) => {
          return (
            <button
              href=""
              style={{ border: "none", background: "none" }}
              onClick={() => {
                props.userChose(eachVendor);
                props.switchPage("creating");
              }}
            >
              <Card style={{ width: "100%", height: "150px" }}>
                <div class="swimlane-card" key={eachVendor.vendor_id}>
                  <div
                    class="card-body"
                    style={{
                      backgroundImage: `url(${eachVendor.vendorheader})`,
                    }}
                  >
                    <div class="card-title">{eachVendor.vendortitle}</div>
                    <ul>Rating: {eachVendor.rating}</ul>
                  </div>
                </div>
              </Card>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}
