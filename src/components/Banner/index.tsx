import { BannerInt } from "../../Models/entities"

export default function Banner(props: { bannerData: BannerInt }){
    return (
        <article className="banner">
            <img src={props.bannerData.image} className="banner__picture" alt="a banner" />
            <div className="banner__shade"></div>
            <p className="banner__text">{props.bannerData.text}</p>
        </article>
    )
}