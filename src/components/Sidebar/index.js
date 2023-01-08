import './index.scss';
import Logo from '../../assets/images/quebella.png'
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>
    </div>
)

export default Sidebar;