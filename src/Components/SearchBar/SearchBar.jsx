import React, { useState, forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBar.css";

const CustomDateInput = forwardRef(({ onClick }, ref) => (
  <div onClick={onClick} ref={ref} className="custom-date-input"></div>
));

function SearchBar() {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [persons, setPersons] = useState("1");

  const arrivalDateRef = useRef(null);
  const departureDateRef = useRef(null);

  const handlePersonChange = (e) => {
    setPersons(e.target.value);
  };

  return (
    <div  className="search-bar-container">
      <div className="search-bar-item" onClick={() => arrivalDateRef.current.setOpen(true)}>
        <span  className="label">Date Arrival</span>
        <DatePicker 
          selected={arrivalDate}
          onChange={(date) => setArrivalDate(date)}
          dateFormat="MM/dd/yyyy"
          customInput={<CustomDateInput />}
          ref={arrivalDateRef}
        />
        <i className="icon fa-solid fa-calendar-days"></i>
      </div>

      <div className="search-bar-item" onClick={() => departureDateRef.current.setOpen(true)}>
        <span className="label">Date Departure</span>
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          dateFormat="MM/dd/yyyy"
          customInput={<CustomDateInput />}
          ref={departureDateRef}
        />
        <i className="icon fa-solid fa-calendar-days"></i>
      </div>

      <div className="search-bar-item">
        <select
          value={persons}
          onChange={handlePersonChange}
          className="search-bar-select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>
        <i className="icon fa-solid fa-user"></i>
      </div>

      <button className="search-bar-button">Find now</button>
    </div>
  );
}

export default SearchBar;