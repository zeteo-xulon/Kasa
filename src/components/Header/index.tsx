import kasaLogo from '../../assets/kasa.svg';
import Nav from '../Nav';

export default function Header(){
    return (
        <header className='header'>

                <a href="#" target="_blank">
                <img src={kasaLogo} className="logo react" alt="React logo" />
                </a>

                <Nav />


        </header>

    )
}