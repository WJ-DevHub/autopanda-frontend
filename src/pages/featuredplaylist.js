import React from "react";

export default class FeaturedPlaylist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          <b>This is [playlist category]</b>
        </h2>{" "}
        <div class="container col-xxl-8 px-4 py-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/images/placeholder1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/images/placeholder4.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="landing-divider"></div>
        <div class="container-fluid col-xxl-8 px-4 py-5">
          <div class="row justify-content-between">
            <div class="col-7 text-start">
              <h2>Encik Tan, Hong Kong Street and more...</h2>
              <div class="container">
                <h6>other items to mention...</h6>
                <h6>other items to mention...</h6>

                <h6>other items to mention...</h6>
              </div>
            </div>
            <div class="col-5 text-end">test2</div>
          </div>

          <div
            class="card"
            style={{
              padding: 10,
              marginBottom: 25,
              boxShadow: "1px 2px 9px gray",
            }}
          >
            <div class="row text-start">
              <h4>Encik Tan</h4>
            </div>
            <div class="row">
              <div class="col-3">image</div>
              <div class="col-6">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </div>
              <div class="col-3">button</div>
            </div>
          </div>
          <div
            class="card"
            style={{
              padding: 10,
              marginBottom: 25,
              boxShadow: "1px 2px 9px gray",
            }}
          >
            <div class="row text-start">
              <h4>Encik Tan</h4>
            </div>
            <div class="row">
              <div class="col-3">image</div>
              <div class="col-6">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </div>
              <div class="col-3">button</div>
            </div>
          </div>
          <div
            class="card"
            style={{
              padding: 10,
              marginBottom: 25,
              boxShadow: "1px 2px 9px gray",
            }}
          >
            <div class="row text-start">
              <h4>Encik Tan</h4>
            </div>
            <div class="row">
              <div class="col-3">image</div>
              <div class="col-6">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </div>
              <div class="col-3">button</div>
            </div>
          </div>
          <div
            class="card"
            style={{
              padding: 10,
              marginBottom: 25,
              boxShadow: "1px 2px 9px gray",
            }}
          >
            <div class="row text-start">
              <h4>Encik Tan</h4>
            </div>
            <div class="row">
              <div class="col-3">image</div>
              <div class="col-6">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </div>
              <div class="col-3">button</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
