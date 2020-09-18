import React from "react";

const SearchBar = () => {
  return (
    <div className="principal-searchBar">
      <div className="div-search">
        <i className="fas fa-shopping-bag fa-shopping-bag-1 fa-4x"></i>
        <h1 className="h1-search">Company</h1>
      </div>
      <div className="div-search-2">
        <input
          className="input-search"
          placeholder="Search from entire store.."
        ></input>
        <select className="select-search">
          <option> All categories</option>
        </select>
        <button className="button-search">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="div-search-3">
        <i className="fas fa-heart"></i>
        <select className="select-wish">
          <option>WishList</option>
        </select>
        <i className="fas fa-shopping-bag bag-count"></i>
        <input className="input-number" placeholder="0"></input>
      </div>
    </div>
  );
};

export default SearchBar;
