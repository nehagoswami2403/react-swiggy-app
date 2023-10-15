import RestaurentComp from "./RestaurentCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState([]);
    const [filteredRestaurent, setFilteredRestaurent] = useState([]);
    // const arr = useState(restList);
    // const [restaurentList, setRestaurentList] = arr - array destructiong, we can write code like ths as well its same code.
    const [searchText, setSearchText] = useState("");                                        

    useEffect(() => {
       fetchData();
    },[]);

    const fetchData = async () => {
        const data =  await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //calling useState to re render the comp
        //optional chaining
        setRestaurentList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurentList.length === 0 ? (
        <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(event) => setSearchText(event.target.value)} />
                <button onClick={() => {
                 const filteredRest = restaurentList.filter((rest) =>
                 rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurent(filteredRest);
                }}
                >Search</button>
            </div>
        <button className="filter-btn" onClick={() => {
            //filter logic by rating
            const filterRes = restaurentList.filter(rest => rest.info.avgRating > 4.2);
            console.log(filterRes);
            setFilteredRestaurent(filterRes);
            }}
            >Top Rated Restaurents</button>
        </div> 
        <div className="rest-cont"> 
        {
            filteredRestaurent.map(restaurent => 
           <Link to={"/restaurent/" + restaurent.info.id} key={restaurent.info.id}> <RestaurentComp restData={restaurent} /></Link>
        )}
        </div>    
      </div>
    )
  }

export default Body;