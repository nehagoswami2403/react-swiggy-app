import RestaurentComp from "./RestaurentCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState([]);
    // const arr = useState(restList);
    // const [restaurentList, setRestaurentList] = arr - array destructiong, we can write code like ths as well 
    //                                                 its same code.

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
        setRestaurentList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={() => {
            //filter logic by rating
            const filterRes = restaurentList.filter(rest => rest.info.avgRating > 4.3);
            console.log(filterRes);
            setRestaurentList(filterRes);
            }}
            >Top Rated Restaurents</button>
        </div> 
        <div className="rest-cont"> 
        {
            restaurentList.map(restaurent => 
            <RestaurentComp key={restaurent.info.id} restData={restaurent} />)
        }
        </div>    
      </div>
    )
  }

export default Body;