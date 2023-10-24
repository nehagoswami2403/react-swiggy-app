import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
    const {restId} = useParams();
    const restInfo = useRestaurentMenu(restId);

    if (restInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = restInfo.cards[0]?.card?.card.info;
    const { itemsCard } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log("itemsssss",restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards[0].card.info.name)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h1>Menu Items</h1>
            <ul>
                {restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards.map
                (item => 
                <li key={item.card.info.id}> {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>)}
            </ul>
        </div>
    )
}

export default RestaurentMenu;