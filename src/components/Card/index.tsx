import { Logement } from "../../Models/entities";
import { Link } from "react-router-dom";


export default function Card(props:{data: Logement}){
    return (
        <Link to={"/lodging/" + props.data.id} className="card-link">
            <article className="card" id={props.data.id}>
                <img src={props.data.cover} className="card-image" alt="couverture pour la carte de voyage" />
                <div className="card-shade"></div>
                <p className="card-text">{props.data.title}</p>
            </article>
            </Link>
    )
}