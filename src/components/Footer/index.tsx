import kasaWhite from '../../assets/kasa-white.svg';

export default function Footer(){

    return (
        <footer className="footer">
            <div className='footer-container'>
                <img src={kasaWhite} className="logo react" alt="React logo" height="30px" width="120px" />
                <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}