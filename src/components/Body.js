import RestaurentComp from "./RestaurentCard";
import restList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div> 
        <div className="rest-cont"> 
        {
            restList.map(restaurent => 
            <RestaurentComp key={restaurent.info.id} restData={restaurent} />)
        }
        </div>    
      </div>
    )
  }

export default Body;