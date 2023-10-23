import { Logement } from "../../Models/entities";


export default function Product(props:{data: Logement}){
    return (
        <article className="product">
            {props.data.title}
        </article>
    )
}