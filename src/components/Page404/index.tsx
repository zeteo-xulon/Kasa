import { Link } from "react-router-dom"

export default function Page404(){
    return(
        <main className="main-404">
            <h1 className="title-404">404</h1>
            <p className="text-404">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"} className="link">Retourner sur la page d’accueil</Link>
        </main>
    )
}