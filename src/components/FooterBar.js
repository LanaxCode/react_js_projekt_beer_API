
import BeerLogo from '../img/Logo.svg'
import { Link } from 'react-router-dom';

const FooterBar = () => {
    return (
        <section className='footer'>
            <Link to='/'><img src={BeerLogo} alt="" /></Link>
        </section>
    );
}

export default FooterBar;