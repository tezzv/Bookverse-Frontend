import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import './NewArrivals.css';
import homecorsoul2 from '../../assets/bookcoverSample.png'
import Card from '../card/Card';

const NewArrivals = () => {
    const [numberOfSlides, setnumberOfSlides] = useState(window.innerWidth / 350);
   
    useEffect(() => {
        const handleResize = () => {
            const x = window.innerWidth;
            setnumberOfSlides(x / 350);
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Swiper
                slidesPerView={numberOfSlides}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Card />
                </SwiperSlide>
                <SwiperSlide >
                    <Card />
                </SwiperSlide>
                <SwiperSlide >
                    <Card />
                </SwiperSlide>
                <SwiperSlide >
                    <Card />
                </SwiperSlide>
                <SwiperSlide >
                    <Card />
                </SwiperSlide>
                {/* <SwiperSlide className='mx-3'>
                    <img src={homecorsoul2} style={{ width: '300px', height: '500px' }} alt='fdf' />
                </SwiperSlide>
                <SwiperSlide className='mx-3'>
                    <img src={homecorsoul2} style={{ width: '300px', height: '500px' }} alt='fdf' />
                </SwiperSlide>
                <SwiperSlide className='mx-3'>
                    <img src={homecorsoul2} style={{ width: '300px', height: '500px' }} alt='fdf' />
                </SwiperSlide>
                <SwiperSlide className='mx-3'>
                    <img src={homecorsoul2} style={{ width: '300px', height: '500px' }} alt='fdf' />
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default NewArrivals