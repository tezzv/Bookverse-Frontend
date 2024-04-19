import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import './Banner.css'
import homecorsoul from '../../assets/Group 1.png'
import homecorsoul2 from '../../assets/bookcoverSample.png'
import BookContext from '../../context/Bookcontext';
import { Link } from 'react-router-dom';

const Banner = () => {
    const context = useContext(BookContext);
    const { books } = context;

    return (
        <div className='banner'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {books.map((book) => (
                    <div key={book._id}><SwiperSlide >
                        <Link to={`/bookdetail/${book._id}`}><img style={{width: '300px', height: '500px'}} src={book.coverlink} alt={book.title} /></Link>
                    </SwiperSlide></div>
                ))}
                {/* <SwiperSlide>Slide 3</SwiperSlide> */}
            </Swiper></div>
    )
}

export default Banner