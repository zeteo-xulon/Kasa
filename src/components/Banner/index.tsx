import bgPic from "../../assets/IMG_01.png";

export default function Banner(){
    return (
        <article className="banner">
            <img src={bgPic} className="banner__picture" alt="a banner" />
            <div className="banner__shade"></div>
            <p className="banner__text">Chez vous, partout et ailleurs</p>
        </article>
    )
}