import { useState } from "react";
import { collapseInt } from "../../Models/entities";
import chevron from '../../assets/chevron.svg';


export default function Collapse(props:{menusData: collapseInt}){
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
                className="chevron-down" 
                id="chevron" 
                onClick={ modifyChevronPosition }
                alt="cliquez pour refermer ce que contien ce menu" />
                :
                <img 
                src={chevron} 
                className="chevron-up" 
                id="chevron" 
                onClick={ modifyChevronPosition }
                alt="cliquez pour déplier ce que contien ce menu" />
               }
            </div>
            
            {
                chevronPosition ?
                    typeof props.menusData.text === "string" ? 
                        <p className="collapse-text">{props.menusData.text}</p> 
                        :
                        <ul className="collapse-list">
                            {
                                props.menusData.text.map((listText, index) => (
                                    <li key={"list"+index} >{listText}</li>
                                ))
                            }
                        </ul>
                    : ""
            }
        </div>
    )
}