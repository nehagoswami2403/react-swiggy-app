import { CDN_URL } from "../utils/constants";

const RestaurentComp = (props) => { 
    const { restData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} =  restData?.info
    return(
    <div className="rest-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className='rest-logo' alt='rest-logo' src={CDN_URL + restData.info.cloudinaryImageId}></img>
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>

    </div>
  )
  }

export default RestaurentComp;