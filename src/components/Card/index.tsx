import { Logement } from "../../Models/entities";


export default function Card(props:{data: Logement}){
    return (
        <article className="card" id={props.data.id}>
            <img src={props.data.cover} className="card-image" alt="couverture pour la carte de voyage" />
            <div className="card-shade"></div>
            <p className="card-text">{props.data.title}</p>
        </article>
    )
}