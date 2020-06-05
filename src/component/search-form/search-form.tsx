import React from "react";
import './search-form.css';
import SearchFormInterface from './search-form-interface';

export default function SearchField(props:SearchFormInterface) {
  return (
    <form className="search-form" onSubmit={(event) => props.searchHandler(event)}>
      <label className="search-label">
        Search:
        <input
            type="text"
            onChange= {
                (event)=>props.updateHandler(event.target.value)
            }
            className = "search-input"
        />
      </label>
      <input type="submit" value="Submit" className="search-button"/>
    </form>
  );
}
