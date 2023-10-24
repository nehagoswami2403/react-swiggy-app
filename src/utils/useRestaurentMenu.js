import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants"

const useRestaurentMenu = (restId) => {
    const [ restInfo, setRestInfo ] = useState(null)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + restId);
        const json = await data.json();
        console.log(json)
        setRestInfo(json?.data);
    }

    return restInfo;
}

export default useRestaurentMenu;