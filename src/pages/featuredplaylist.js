import React from "react";
import axios from "axios";
import RestaurantLoader from "../components/restaurantloader";

export default class FeaturedPlaylist extends React.Component {
  playlistdetails = this.props.state.userchoice;
  newDishData = this.props.state.userchoice.DishIncluded;
  //   async getRestaurantDishes() {
  //     const dishDataResponse = await axios.get(
  //       `${this.PLAYLIST_URL}/playlists/restarant` +
  //         `/${this.state.currentRestarant}`
  //     );
  //     return;
  //   }

  PLAYLIST_URL = "http://localhost:8081";

  render() {
    return (
      <React.Fragment>
        <h2>
          <b>This is {this.playlistdetails.Playlist.name}</b>
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
            <div class="carousel-inner" style={{ height: "500px" }}>
              <div class="carousel-item active">
                <img
                  src="/images/placeholder1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>

              {this.playlistdetails.DishIncluded.map((dish) => (
                <div class="carousel-item">
                  <img
                    src={dish.imageUrl}
                    class="d-block"
                    alt="..."
                    style={{}}
                  />
                </div>
              ))}
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
              <h2>
                {this.playlistdetails.RestaurantInfo[0].restaurantName},{" "}
                {this.playlistdetails.RestaurantInfo[1].restaurantName} and
                more...
              </h2>
              <div class="container"></div>
            </div>
            <div class="col-5 text-end"></div>
          </div>{" "}
          {this.playlistdetails.RestaurantInfo.map((eachRestaurant) => (
            <RestaurantLoader
              restaurant={eachRestaurant}
              dishes={this.newDishData}
              userChose={this.props.userChose}
              switchPage={this.props.switchPage}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
