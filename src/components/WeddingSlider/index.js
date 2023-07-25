import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import whiteBlueHeart from '../../assets/images/heartcookie.png';
import './index.scss';


const WeddingSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
      };

    return (
        <Carousel responsive={responsive} showDots={true} draggable={false} infinite={true}>
            <div className='card'>
                <img className='cookie' src={whiteBlueHeart} alt='fall' />
            </div>
            <br />
            <div className='card'>
                <img className='cookie' src={whiteBlueHeart} alt='fall' />
            </div>
            <br />
            <div className='card'>
                <img className='cookie' src={whiteBlueHeart} alt='fall' />
            </div>
            <br />
            <div className='card'>
                <img className='cookie' src={whiteBlueHeart} alt='fall' />
            </div>
            <br />
            <div className='card'>
                <img className='cookie' src={whiteBlueHeart} alt='fall' />
            </div>
        </Carousel>
    )
}

export default WeddingSlider;