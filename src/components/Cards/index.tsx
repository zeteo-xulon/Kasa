import { useState, useEffect } from "react";
import { Logement } from "../../Models/entities";
import Card from "../Card";


export default function Cards(){
    const [cards, setCards] = useState<Logement[]>([]);

    useEffect(()=>{
        fetch('./src/server/logements.json')
        .then((res) =>  res.json())
        .then((data => setCards(data)))
        .catch(err => console.log(err))
    },[])


    return (
        <main className="main">
            {
                cards.map((card, index) => ( 
                    <Card key={index} data={card} /> 
                ))
            }

        </main>
    )
}