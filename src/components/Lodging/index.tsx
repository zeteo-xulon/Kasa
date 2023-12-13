import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Gallery from "../Gallery"
import Collapse from "../Collapse";
import { Logement } from '../../Models/entities'
import Stars from '../Stars';
import Tags from "../Tags";


export default function Lodging(){
    const [cardData, setCardData] = useState<Logement>();
    const [galleryArray, setGalleryArray] = useState<string[]>([]);
    const { id } = useParams();

    useEffect(()=>{
        fetch('../src/server/logements.json')
        .then(res => res.json())
        .then((data) => {
            const lodgingCardData = data.filter((e:Logement)=>  e.id === id );
            setCardData(lodgingCardData[0]);
            setGalleryArray(lodgingCardData[0].pictures)
        })
    },[])

    return (
        <main className="lodging-main">

            <Gallery gallery={galleryArray} />

            <div className="lodging-information">
                <div className="lodging-bloc-1-and-2">
                    <div className="lodging-bloc-1">
                        <h2 className="lodging-title">{cardData?.title}</h2>
                        <p className="lodging-location">{cardData?.location}</p>
                        <Tags tags={cardData?.tags as string[]} />

                    </div>

                    <div className="lodging-bloc-2">
                        <aside className="lodging-host">
                            <p className="lodging-host-name">{cardData?.host?.name}</p>
                            <img src={cardData?.host?.picture} className="lodging-host-picture" alt="visage de l'hote" />
                        </aside>
                        <Stars rating={Number(cardData?.rating) as number} />
                    </div>
                </div>
                <div className="lodging-collapses">
                    <Collapse menusData={{title: "Description", text:cardData?.description as string}} />
                    <Collapse menusData={{title: "Équipements", text: cardData?.equipments as string[]}} />
                </div>
            </div>
        </main>
    )
}