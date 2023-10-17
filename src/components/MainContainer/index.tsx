import Header from '../Header';
import Banner from '../Banner';
import Products from '../Products';


export default function MainContainer(){
    return (
        <div className='main-container'>
            <Header />
            <Banner />
            <Products />
      </div>
    )
}