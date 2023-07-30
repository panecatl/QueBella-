import { Carousel, CarouselItem } from "react-bootstrap";
import './index.scss';

const Contact = () => {
    return(
        <div className="contact-page">
            <Carousel controls={false} indicators={false} touch={true} wrap={true} interval={5000} pause={false}>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-1.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-2.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-3.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-4.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-5.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-6.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-7.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-8.jpeg"} alt="" />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="carousel-item-inner">
                        <img src={process.env.PUBLIC_URL + "/assets/images/cookies/coorporate/cookies-coorporate-9.jpeg"} alt="" />
                    </div>
                </CarouselItem>
            </Carousel>
            <div className="contact-page-content">
                <span className="title">Let's talk!</span>
                <span className="text">We'd love to hear from you. Order now!</span>
                <div className="button-container">
                    <a href="https://form.jotform.com/210905714008145" className="button">Order Here</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;