import { BannerInt } from "../../Models/entities"
import Banner from "../Banner"

export default function About(props:{ data: BannerInt }){
    return (
        <>
            <Banner bannerData={props.data} />
        </>
    )
}