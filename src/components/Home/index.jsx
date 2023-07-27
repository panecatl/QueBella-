import { Link } from "react-router-dom";
import { Carousel, CarouselItem } from "react-bootstrap";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    return (
        <div className="home-page">
            <div className="text-zone">
                <p>
                    Hi, <br />
                    I'm Que Bella Cookies and welcome to my page! 
                    On this website you will be able to see previous orders,  
                    inquire about new orders, 
                    as well as seeing the events that are coming up!
                    Some of these events will be at farmer markets, or some of them might be cookie decorating classes!
                </p>
                <Link to='/contact' className="flat-button">Order Here</Link>
            </div>
            
            <div className='slider'>
                <Carousel>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-1.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-2.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-3.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-4.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-5.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carousel-item-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home/cookies-home-6.jpeg"} alt="" />
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>

        </div>
    )
}


export default Home; 