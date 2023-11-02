import { useState } from "react";
import { AboutModel } from "../../Models/entities";
import chevron from '../../assets/chevron.svg';


export default function Collapse(props:{menusData: AboutModel}){
    const [chevronPosition, setChevronPosition] = useState<boolean>(false);
    function modifyChevronPosition(){
        chevronPosition === true ? setChevronPosition(false) : setChevronPosition(true)
    }

    return (
        <div className="collapse">
            <div className="collapse-bar">
               <h2 className="collapse-title">{props.menusData.title}</h2> 
               {
                chevronPosition ?
                <img 
                src={chevron} 
                className="chevron-up" 
                id="chevron" 
                onClick={ modifyChevronPosition }
                alt="cliquez pour refermer ce que contien ce menu" />
                :
                <img 
                src={chevron} 
                className="chevron-down" 
                id="chevron" 
                onClick={ modifyChevronPosition }
                alt="cliquez pour déplier ce que contien ce menu" />
               }
            </div>
            
            {
                chevronPosition ?
                <p className="collapse-text">{props.menusData.text}</p>
                : ""
            }
        </div>
    )
}