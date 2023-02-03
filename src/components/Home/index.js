import { Link } from "react-router-dom";
import './index.scss';
import logoPic from '../../assets/images/quebella.png';
import heart from '../../assets/images/heartcookie.png';
import milFalcon from '../../assets/images/milleniumfalcon.png';
import fall from '../../assets/images/fall.png';
import valentines from '../../assets/images/valentines.png';
import spurs from '../../assets/images/spurs.png';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Que Bella Cookies and welcome to my page! 
                
                On this website you will be able to see previous orders,  
                
                inquire about new orders, 
                
                as well as seeing the events that are coming up!
                
                Some of these events will be at farmer markets, or some of them might be cookie decorating classes!</h1>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <img src={logoPic} alt='logo' />
                    </div>

                    <div className="face2">
                        <img src={heart} alt='logo' />
                    </div>

                    <div className="face3">
                        <img src={milFalcon} alt='logo' />
                    </div>

                    <div className="face4">
                        <img src={fall} alt='logo' />
                    </div>

                    <div className="face5">
                        <img src={valentines} alt='logo' />
                    </div>

                    <div className="face6">
                        <img src={spurs} alt='logo' />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Home; 