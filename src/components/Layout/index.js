import './index.scss';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    // used as the big text of "Que Bella Cookies" on hompage. Mainly added for styling the title of the company name 
    return (
    <div className='app'>
        <Header />
        <div className='page'>
            <h1 className='tags top-tags'>Que Bella Cookies</h1>

            <Outlet />
        </div>
    </div>
    )
}

export default Layout;