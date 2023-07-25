import './index.scss';
import Logo from '../../assets/images/quebella.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCookie, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [navActive, setNavActive] = useState(false);

    return(
        // sidebar used for navigation 
        <header className='main-header'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo' />
            </Link>

            <nav className={`${navActive && 'active'}`}>
                {/* home button */}
                <div className='nav-link'>
                    <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/">
                        <FontAwesomeIcon icon={faHome} color="#cb6e9a" />
                        <span className='nav-link-a-text'>Home</span>
                    </NavLink>
                    <div className='nav-link-text'>Home</div>
                </div>
                {/* cookies */}
                <div className='nav-link'>
                    <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="cookies-link" 
                    to="/cookies">
                        <FontAwesomeIcon icon={faCookie} color="#cb6e9a" />
                        <span className='nav-link-a-text'>Cookies</span>
                    </NavLink>
                    <div className='nav-link-text'>Cookies</div>
                </div>
                {/* contact */}
                <div className='nav-link'>
                    <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link" 
                    to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#cb6e9a" />
                        <span className='nav-link-a-text'>Contact</span>
                    </NavLink>
                    <div className='nav-link-text'>Contact</div>
                </div>

            {/* scheduled events */}
            {/* wanted to add event feature in the future */}
            {/* <NavLink 
            exact="true" 
            activeclassname="active" 
            className="schedule-link" 
            to="/events">
                    <FontAwesomeIcon icon={faCalendarDays} color="#cb6e9a" />
            </NavLink> */}
            </nav>

            <button className={`main-header-nav-toggle ${navActive && 'active'}`} onClick={() => setNavActive(!navActive)}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <ul>
                {/* facebook */}
                <li>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/quebellacookies/'>
                    <FontAwesomeIcon icon={faFacebook} color='#cb6e9a' />
                </a>
                </li>
                {/* insta */}
                <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/quebellacookies/'>
                    <FontAwesomeIcon icon={faInstagram} color='#cb6e9a' />
                </a>
                </li>
                {/* venmo */}
                <li>
                <a target='_blank' rel='noreferrer' href='https://account.venmo.com/u/Lisa-DeLaLuz'>
                    <FontAwesomeIcon icon={faCartShopping} color='#cb6e9a' />
                </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;