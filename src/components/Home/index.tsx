import Banner from '../Banner';
import Cards from '../Cards';
import { BannerInt } from "../../Models/entities"

export default function Home(props:{data: BannerInt}){
    return (
        <div className='home-main'>
            <Banner bannerData={props.data}/>
            <Cards />
        </div>
    )
}