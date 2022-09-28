import React from 'react';
import './carousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from '../../../components/card/Card'
import {sliders} from "../../../assets/constant/constatn";

const Carousel = () => {

    return (
        <div>
            <Swiper
                pagination={{type: "fraction"}}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper carousel"
            >
                { sliders.map((slider, sliderIndex) =>(
                    <SwiperSlide className='swiper-slide'>
                                         <Card
                                             //slider={sliders}
                                             logo={slider.url} title={slider.title} text={slider.text}
                                         />
                    </SwiperSlide>
                                  ))}
            </Swiper>
        </div>
        // <div>
        //     <div className='carousel'>
        //         <div style={{display:"flex", flexDirection:"row"}}>
        //             {/*{ sliders.map((slider, sliderIndex) =>(*/}
        //             {/*    <div>*/}
        //             {/*        <Card logo={sliders.url} title={slider.title} text={slider.text} focus={slider.focus} />*/}
        //             {/*    </div>*/}
        //             {/* ))}*/}
        //             {/*<Card sliders={sliders}  />*/}
        //             {/*<Card logo={organic} title='Choose organic'/>*/}
        //             {/*<Card logo={trees} title='plant trees' />*/}
        //             {/*<Card logo={water}*/}
        //             {/*      alt='water'*/}
        //             {/*      title='Save watter'*/}
        //             {/*      text='Taking on the issue of ensuring access to safe water requires worldwide effort.'*/}
        //             {/*      focus={true}/>*/}
        //             {/*<Card logo={plastic} title='avoid plastic'/>*/}
        //             {/*<Card logo={energy} title='save energy'/>*/}
        //
        //         </div>
        //         <div style={{justifyContent:"center" }}>
        //             <Pagination count={5} />
        //         </div>
        //     </div>
        //     <div className='mobileCarousel'>
        //         <div>
        //             {/*<Card logo={water}*/}
        //             {/*      alt='water'*/}
        //             {/*      title='Save watter'*/}
        //             {/*      text='Taking on the issue of ensuring access to safe water requires worldwide effort.'*/}
        //             {/*      focus={true}/>*/}
        //         </div>
        //         <div style={{justifyContent:"center" }}>
        //             <Pagination count={5} />
        //         </div>
        //     </div>
        // </div>

    );
};

export default Carousel;
