import React from "react";

export default function LandingPage() {
  return (
    <React.Fragment>
      <h1
      class ="display-4 fw-bold lh-2mb-3 page-header"></h1>
      <div></div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="/images/paupauplaceholder.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              A playlist for a peace of mind.
            </h1>
            <p class="lead">
              Choose what you want, where you want, when you want it. Gain
              access to over 1400 different merchants and have your order
              delivered on time at any frequency.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Get Started
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
