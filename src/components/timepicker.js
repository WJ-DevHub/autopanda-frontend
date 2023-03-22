import React from "react";

export default function TimePicker(props) {
  let vendorhours = props.vendordata.availablehours;

  let numberofHours = {};
  let openHour = {};
  let closeHour = {};
  let openMinute = {};
  let closeMinute = {};
  let dailyslots = [];

  /*
  vendorhours.map(
    (openinghours) => (
      (openHour = openinghours[0].slice(0, 2)),
      (closeHour = openinghours[1].slice(0, 2)),
      (openMinute = openinghours[0].slice(-2)),
      (closeMinute = openinghours[1].slice(-2)),
      (numberofHours = closeHour - openHour),
      (for i in numberofHours)
    )
  );
*/
  for (let i = 0; i < vendorhours.length; i++) {
    //iterate through the week
    let hoursSelection = [];
    openHour = vendorhours[i][0].slice(0, 2);
    closeHour = vendorhours[i][1].slice(0, 2);
    openMinute = vendorhours[i][0].slice(-2);
    closeMinute = vendorhours[i][1].slice(-2);
    numberofHours = closeHour - openHour;
    let interval = 15;
    // console.log("openminute is " + openMinute);
    //console.log("openhour is " + openHour);
    // console.log(numberofHours + " of hours in day " + i);
    // console.log("day " + i + " starts at hour " + openHour);
    for (let j = 0; j < numberofHours; j++) {
      // iterate through the day
      let currentHour = Number(openHour) + Number(j);
      // console.log("logging day " + i + " hour number " + currentHour);
      for (let k = 0; k < 60; k += 15) {
        //     let l = Number(k) + Number(interval);
        if (
          (currentHour === Number(openHour) && k < Number(openMinute)) ||
          (currentHour === Number(closeHour) && k > Number(closeMinute))
        ) {
          continue;
        }
        // console.log(currentHour === openHour && k < openMinute);
        hoursSelection.push(
          formatTime(currentHour) +
            ":" +
            formatTime(k) +
            " - " +
            finalSlot(j, k, interval, currentHour)
        );
      }
      // console.log("this is " + i + "schedule " + hoursSelection);
    }

    dailyslots.push(hoursSelection);
  }
  //console.log(dailyslots);

  function finalSlot(j, k, interval, currentHour) {
    if (Number(k) + Number(interval) === Number(60)) {
      return Number(currentHour + 1) + ":00";
    } else {
      return formatTime(currentHour + ":" + (Number(k) + Number(interval)));
    }
  }

  function formatTime(input) {
    return input.toLocaleString(
      "en-US",
      { minimumIntegerDigits: 2 },
      { useGrouping: false }
    );
  }

  function showOption(item, dropdown) {
    document.getElementById(dropdown).innerHTML = item.innerHTML;
  }

  function slotProvider() {
    return dailyslots[Number(props.daypicked[0])].map((slot) => (
      <li>
        <button
          class="dropdown-item"
          onClick={() => {
            props.selectSlot([slot]);
          }}
        >
          {slot}
        </button>
      </li>
    ));
  }

  return (
    <React.Fragment>
      <h3>Schedule</h3>
      <div class="d-flex gap-2 justify-content-center p-2">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.daypicked === "" ? "Select Day" : props.daypicked[1]}{" "}
          </button>

          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                id="dropdown-day"
                onClick={() => {
                  props.selectDay(0);
                  showOption(this, this.id);
                }}
              >
                Mon
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(1);
                }}
              >
                Tue
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(2);
                }}
              >
                Wed
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(3);
                }}
              >
                Thur
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(4);
                }}
              >
                Fri
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(5);
                }}
              >
                Sat
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => {
                  props.selectDay(6);
                }}
              >
                Sun
              </button>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.daypicked === "" ? "Select slot" : props.slotpicked}{" "}
            {props.daypicked !== "" && props.slotpicked === ""
              ? "Select slot"
              : props.slotpicked}{" "}
          </button>
          <ul class="dropdown-menu">
            {console.log(
              "the daypicked is " +
                props.daypicked[1] +
                " and the slots are: " +
                dailyslots[Number(props.daypicked[0])]
            )}{" "}
            {console.log(dailyslots[Number(props.daypicked[0])])}
            {props.daypicked === "" && (
              <>
                <li>No available slot!</li>
              </>
            )}
            {props.daypicked !== "" && slotProvider()}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

// dailyslots[Number(props.daypicked[0])]].map((slot) => (
//   <li>
//     <button
//       class="dropdown-item"
//       onClick={() => {
//         props.selectSlot({ slot });
//       }}
//     >
//       {slot}
//     </button>
//   </li>
// )
