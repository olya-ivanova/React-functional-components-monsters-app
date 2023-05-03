import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
