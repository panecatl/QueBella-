import './index.scss';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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