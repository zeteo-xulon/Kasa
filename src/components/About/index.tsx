import { useState, useEffect } from "react";
import { BannerInt, collapseInt } from "../../Models/entities";
import Banner from "../Banner";
import Collapse from "../Collapse";

export default function About(props:{ data: BannerInt }){
    const [collapseMenus, setCollapseMenus] = useState<collapseInt[]>([])

    useEffect(()=>{
        fetch('./src/server/about.json')
        .then((res)=> res.json())
        .then((menus) => setCollapseMenus(menus))
        .catch(err => console.log(err))
    }, [])

    return (
        <main className="about-main">
            <Banner bannerData={props.data} />
            <div className="about-collapse-container">
            {
                collapseMenus.map((menu, index) => ( 
                    <Collapse key={'menu'+ index} menusData={menu} />
                ))
            }
            </div>
  
        </main>
    )
}