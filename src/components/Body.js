import RestaurentComp from "./RestaurentCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState(restList)
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