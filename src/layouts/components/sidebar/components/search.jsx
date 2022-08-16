import React, { Component } from "react";
import { searchIcon } from "../../../../components/icons";

class Search extends Component {
  render() {
    return (
      <div className='search'>
        {searchIcon}
        {this.props.isOpened && <input type='text' placeholder='Search' />}
      </div>
    );
  }
}

export default Search;
