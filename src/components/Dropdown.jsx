
function Dropdown(props) {
  return (
    <div class="select-wrapper">
    <select class="select" name="options sort" id="movies" onChange={props.onChange}>
      <option value="option1">Sort By</option>
      <option value="option2">Rank</option>
      <option value="option3">Release Year</option>
    </select>
  </div> 
  );
}

export default Dropdown;