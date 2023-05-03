import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        onChange={this.props.onChangeHandler}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default SearchBox;
