import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav className="nav">
            <Link to={"/"} className="link">Accueil</Link>
            <Link to={"/about"} className="link">A Propos</Link>
        </nav>
    )
}