import { Link } from 'react-router-dom';
import kasaLogo from '../../assets/kasa.svg';
import Nav from '../Nav';

export default function Header(){
    return (
        <header className='header'>

                <Link to={"/"}>
                <img src={kasaLogo} className="logo-kasa" alt="Kasalogo" />
                </Link>

                <Nav />


        </header>

    )
}