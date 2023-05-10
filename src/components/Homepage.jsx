import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import SampleJson from "../mocks/top5MoviesAssessement.json";
import Dropdown from "./Dropdown";
import CardComponent from "./Card";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';



const Homepage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies);
  console.log(movieData);
  const [expanded, setExpanded] = React.useState(false);
  const [expandedId, setExpandedId] = React.useState(-1);
  const { push } = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);


  // Collpase and Expand Meta Data Functionlaity
  
  const [data, setData] = React.useState(SampleJson.components[1].items)  

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
  }));
  const handleExpandClick = (i) => {
    console.log("123")
    setExpandedId(expandedId === i ? -1 : i);
  };

  if (!movieData) {
    return <h1>Loading...</h1>;
  }

  // Sorting by Values functionality
  
  const sortByRank = () => {
    const data = SampleJson.components[1].items.map((item) => item)
    const sortedArray = data.sort((a,b) => (a.rank > b.rank) ? 1 : -1)
    setData(sortedArray);
    console.log(sortedArray);
  }

  const sortByRelease = () => {
    const data = SampleJson.components[1].items.map((item) => item)
    const sortedArray = data.sort((a,b) => (a.releaseDate > b.releaseDate) ? 1 : -1)
    setData(sortedArray);
    console.log(sortedArray);
  }

  const handleChange = () =>{
    let selectedItem = document.getElementById("movies");
    let selectedValue = selectedItem.options[selectedItem.selectedIndex].value;
    console.log(selectedValue);
    if(selectedValue === "option1"){
      return setData(SampleJson.components[1].items)
    }
    if(selectedValue === "option2"){
      return sortByRank()
    }
    if(selectedValue === "option3"){
      return sortByRelease()
    }
  }

  return (
    <div class="center-div">  
      <p className="Main_Title">Top 5 Movies in 1980's</p>

      {/* Dropdown Menu */}
      <Dropdown onChange={handleChange} />

      {/* Looping the cards */}

      {data.map((item, i) =>
      <CardComponent 
      item={item} index={i} onClick={handleExpandClick} expanded={expanded}
      expandedId={expandedId}
      />
      )} 
    </div>   
  );
};

export default Homepage;
