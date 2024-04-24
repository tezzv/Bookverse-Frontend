import React, { useContext, useEffect } from 'react'
import './Home.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Banner from './Banner';
import NewArrivals from './NewArrivals';
import BookContext from '../../context/Bookcontext';

const Home = () => {
    const context = useContext(BookContext);
    const { allBooks, books } = context;

    useEffect(() => {
        allBooks();
    }, [])

    return (
        <div className='home container'>
            <Navbar />
            <div className='home1'>
                <div className='section1'>
                    <div className='homel1'>
                        <p className='texthead1'>

                            BUY AND SELL YOUR <br />
                            BOOKS FOR <span style={{ color: "#F98AC9" }}> THE BEST <br />
                                PRICE </span><br />

                            <p className='texthead2 my-2'>
                                Find and read your books for  you will love and <br />
                                alffalkjflkasjflksajdflaskfjlskadjflkasjdflkasjdlkfjslakfjlkas<br />
                                jflksdjflkasjflksddflasjdl
                            </p>
                        </p>
                        <div className='explorebtn'>
                            <Link className='exploretxt' to='/shop'>Explore</Link>
                        </div>
                    </div>
                    <div>
                        <Banner />
                    </div>
                </div>

                <div className='section2'>
                    <h2 className='bestsellertxgt'>BEST SELLER’S</h2>
                    <div className='cardswrap1'>
                        {books.map((book) => (
                            <div key={book._id}><Link style={{textDecoration: 'none'}} to={`/bookdetail/${book._id}`}><Card book={book} /></Link></div>
                        ))}
                    </div>
                    <div className='horizLine1' />
                </div>

                <div className='section3'>
                    <div className='newarrivals'>
                        <h4 className='newarrivalsTxt'>
                            NEW ARRIVALS
                        </h4>
                        <p className='newarrivalPara'>
                            Dive into our latest arrivals and discover captivating stories waiting to be explored. From gripping thrillers to heartwarming tales, our collection offers something for every reader. Immerse yourself in the excitement of new releases and embark on a literary adventure today. Happy reading!
                        </p>
                    </div>
                    <div className='courosoul2D'>
                        <NewArrivals />
                    </div>
                    <div className='horizLine1' />
                </div>
                <div className="section4">
                    <h4 className='newarrivalsTxt'>
                        OUR CUSTOMERS
                    </h4>
                    <div className='reviews'>
                        <div className='customerReviews' />
                        <div className='customerReviews' />
                        <div className='customerReviews' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home