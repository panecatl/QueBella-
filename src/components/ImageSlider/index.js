import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.scss';
import fall from '../../assets/images/fall.png';
import babyShower from '../../assets/images/babyShower.png';
import wedding from '../../assets/images/heartcookie.png';
import milFalcon from '../../assets/images/milleniumfalcon.png';


const ImageSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
      };

    return (
        <div className='sliderCont'>
            <Carousel responsive={responsive}  infinite={true}>
                <div className='card'>
                    <img className='cookie' src={fall} alt='fall' />
                </div>
                <br />
                <div className='card'>
                    <img className='cookie' src={babyShower} alt='Baby Shower' />
                </div>
                <br />
                <div className='card'>
                    <img className='cookie' src={wedding} alt='Wedding' />
                </div>
                <br />
                <div className='card'>
                    <img className='cookie' src={milFalcon} alt='Millenium Falcon' />
                </div>
                <br />
                
            </Carousel>;
        </div>
    )
}

export default ImageSlider;