import { Carousel, CarouselItem } from "react-bootstrap";
import './index.scss';


const Cookies = () => {

    const jump = (slideId) => {
        const activeJumper = document.querySelectorAll('.cookies-slider-jumper .active');
        const newJumper = document.getElementById(slideId + '-jumper');
        const activeSlide = document.querySelectorAll('.cookies-slider-slides .active');
        const newSlide = document.getElementById(slideId);
    
        if(!newJumper) return console.log(`Not assigned jumper. (Element with id: ${slideId}-jumper doesn't exist.)`)
        if(!newSlide) return console.log(`Not assigned slide. (Element with id: ${slideId} doesn't exist.)`)
    
        if(activeJumper) activeJumper.forEach(jumper => jumper.classList.remove('active'));
        if(activeSlide) activeSlide.forEach(slide => slide.classList.remove('active'));
    
        newJumper.classList.add('active');
        newSlide.classList.add('active');
    }

    return (
        <div className='cookie-page'>
            <div className='text-zone'>
                <div className="cookies">
                    <span className='cookies-title'>My Cookies</span>
                    <div className="cookies-slider-container">
                        <div className="cookies-slider-jumper">
                            <button id="slide-1-jumper" type="button" className="active" onClick={() => jump('slide-1')}>
                                <span>Baby Shower</span>
                            </button>
                            <button id="slide-2-jumper" type="button" onClick={() => jump('slide-2')}>
                                <span>Birthday</span>
                            </button>
                            <button id="slide-3-jumper" type="button" onClick={() => jump('slide-3')}>
                                <span>Cartoon Character</span>
                            </button>
                            <button id="slide-4-jumper" type="button" onClick={() => jump('slide-4')}>
                                <span>Coorporate</span>
                            </button>
                            <button id="slide-5-jumper" type="button" onClick={() => jump('slide-5')}>
                                <span>Custom</span>
                            </button>
                            <button id="slide-6-jumper" type="button" onClick={() => jump('slide-6')}>
                                <span>Graduation</span>
                            </button>
                            <button id="slide-7-jumper" type="button" onClick={() => jump('slide-7')}>
                                <span>Holidays</span>
                            </button>
                            <button id="slide-8-jumper" type="button" onClick={() => jump('slide-8')}>
                                <span>Wedding</span>
                            </button>
                        </div>
                        <div className="cookies-slider">
                            <div className="cookies-slider-slides">
                                <div id="slide-1" className="cookies-slider-slide active">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-15.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-16.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-17.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-18.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-19.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-20.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/baby-shower/cookies-babyshower-21.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-2" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-15.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-16.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-17.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-18.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-19.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-20.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-21.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-22.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-23.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-24.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/birthday/cookies-birthday-25.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-3" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/cartoon-character/cookies-character-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-4" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/coorporate/cookies-coorporate-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-5" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-15.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-16.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-17.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-18.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-19.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-20.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-21.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-22.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-23.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-24.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-25.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/custom/cookies-custom-26.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-6" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/graduation/cookies-graduation-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-7" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-15.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-16.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-17.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/holidays/cookies-holiday-18.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div id="slide-8" className="cookies-slider-slide">
                                    <Carousel indicators={false} touch={true} wrap={true} interval={2000} pause={false}>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-1.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-2.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-3.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-4.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-5.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-6.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-7.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-8.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-9.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-10.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-11.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-12.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-13.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-14.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="carousel-item-inner">
                                                <img src="/assets/images/cookies/wedding/cookies-wedding-15.jpeg" alt="" />
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="/assets/js/cookies-slider.js"></script>
        </div>
    )
}

export default Cookies;