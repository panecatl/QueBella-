import './index.scss';
import LogoQBC from '../../../assets/images/quebella.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo'  src={LogoQBC} alt='logo' />
        </div>
    )
}

export default Logo;