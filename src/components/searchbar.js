// import React from "react";

// export default function SearchBar(props) {

//   return (
//     <React.Fragment>
//       <h3>search</h3>

//       <input
//         type="text"
//         class="typeahead"
//         data-provide="typeahead"
//         placeholder="Enter name of states of India "
//       />
//       {/* <form>
//         <div class="form-group typeahead">
//           <label for="addFilter">Add a filter</label>
//           <input
//             type="text"
//             class="form-control typeahead-input"
//             id="addFilter"
//             placeholder="Find a filter to add"
//             autocomplete="off"
//           />

//           <div class="typeahead-dropdown list-group">
//             <a href="#" class="list-group-item">
//               Fruit <small class="text-muted">in foods</small>
//             </a>
//             <a href="#" class="list-group-item">
//               Meats <small class="text-muted">in foods</small>
//             </a>
//             <a href="#" class="list-group-item">
//               Vegetables <small class="text-muted">in foods</small>
//             </a>
//             <a href="#" class="list-group-item">
//               Sodas <small class="text-muted">in drinks</small>
//             </a>
//             <a href="#" class="list-group-item">
//               In Stock <small class="text-muted">in status</small>
//             </a>
//           </div>
//         </div>
//       </form> */}
//     </React.Fragment>
//   );
// }

// import React, { useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function SearchBar({ options, onSearch, props }) {
//   const [selectedOption, setSelectedOption] = useState([]);

//   const handleInputChange = (selected) => {
//     setSelectedOption(selected);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(selectedOption[0]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Typeahead
//         options={options}
//         placeholder="Search"
//         selected={selectedOption}
//         onChange={handleInputChange}
//         onClick={() => {
//           console.log("success");

//           props.userChose(props.restaurant);
//           props.switchPage("creating");
//         }}
//       />
//       <button type="submit" className="btn btn-primary">
//         Search
//       </button>
//       {/* <div>
//         {selectedOption.length > 0 && (
//           <ul>
//             {options
//               .filter((option) =>
//                 option.label
//                   .toLowerCase()
//                   .includes(selectedOption[0].toLowerCase())
//               )
//               .map((option) => (
//                 <li key={option.id}>{option.label}</li>
//               ))}
//           </ul>
//         )}
//       </div> */}
//     </form>
//   );
// }

// export default SearchBar;

// import React, { useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-typeahead/css/Typeahead.css";

// const SearchBar = ({ data }) => {
//   const [selected, setSelected] = useState([]);

//   const handleSelect = (selected) => {
//     setSelected(selected);
//     // Navigate to the selected page using the value from the array
//     window.location.href = `/search/${selected[0].id}`;
//   };

//   return (
//     <Typeahead
//       id="search-bar"
//       labelKey="name"
//       options={data}
//       placeholder="Search"
//       selected={selected}
//       onChange={setSelected}
//       onInputChange={() => setSelected([])}
// //       onSelected={handleSelect}
// //     />
// //   );
// // };

// // export default SearchBar;

// import React, { useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import { useDispatch } from "react-redux";

// const SearchBar = ({ data }) => {
//   const [selected, setSelected] = useState([]);
//   const dispatch = useDispatch();

//   const handleSelect = () => {
//     console.log("success!");
//     setSelected(selected);
//   };
//   useEffect(() => {
//     // function to trigger when selected changes
//     console.log("Selected changed: ", selected);
//   }, [selected]);
//   return (
//     <>
//       <Typeahead
//         id="search-bar"
//         labelKey="name"
//         options={data}
//         placeholder="Search"
//         selected={selected}
//         onChange={setSelected}
//         onInputChange={() => setSelected([])}
//         onSelected={handleSelect}
//       />
//     </>
//   );
// };

// export default SearchBar;
