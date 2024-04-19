import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './NewArrivals.css';
import Card from '../card/Card';
import BookContext from '../../context/Bookcontext';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const context = useContext(BookContext);
    const { books } = context;

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
                {books.map((book) => (
                    <div key={book._id}><SwiperSlide >
                        <Link style={{textDecoration: 'none'}} to={`/bookdetail/${book._id}`}><Card book={book} /></Link>
                    </SwiperSlide></div>
                ))}
            </Swiper>
        </div>
    )
}

export default NewArrivals