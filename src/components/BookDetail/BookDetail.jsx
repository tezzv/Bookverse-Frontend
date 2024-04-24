import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './BookDetail.css';
import carticon from './carticon.png';
import usericon from './usericon1.svg'
import bookCover from '../../assets/bookcoverSample.png'

const BookDetail = () => {
    const { bookID } = useParams();
    // console.log(bookID);
    const [book, setBook] = useState('');

    let host = "http://localhost:5000"; // Default host for development

    const bookDetails = async () => {
        // API Call
        try {
            const response = await fetch(`${host}/api/books/bookdetail/${bookID}`, {
                method: "GET",
            });

            const result = await response.json();
            // console.log("Success:", result);
            if (!result.error) {
                // console.log(result.book);
                setBook(result.book);
            } else {
                alert("Error: ", result.error)
            }
        } catch (error) {
            alert("Error: ", error)
        }
        
    }


    useEffect(() => {
        bookDetails();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='bookdetails1'>
                <div className='bookdetailleft1'>
                    <div className='bookimgdiv1'>
                        <img src={book.coverlink} className='bookimgdim1' alt='add to cart' />
                    </div>
                    <button className='buynowbtn1'>
                        <div>BUY NOW</div>
                        <div style={{ fontSize: '20px' }}>₹ {book.price}/-</div>
                    </button>
                    <button className='addtocartbtn1'>
                        <div>ADD TO CART
                        </div>
                        <img src={carticon} alt='add to cart' />
                    </button>
                    <div className='uploadedbybook1'>
                        <div className='uploadedbytxt1'>
                            Uploaded by -
                        </div>
                        <div className='uploadedbyuser3' >
                            <img src={usericon} alt='add to cart' />
                            <span className='uploadedbyuser1'>{book.uploadedby}</span>
                        </div>
                    </div>
                    <div className='hrlinebook2' />
                </div>
                <div className='bookdetailright1'>
                    <div className='booktitle1'>{book.title}</div>
                    <div className='author1txt'>-{book.author}</div>
                    <div style={{ marginTop: '24px' }}>
                        <div className='hrlinebook1' />
                        <div className='bookgenre1'>Genre : {book.genre}</div>
                        <div className='hrlinebook1' />
                    </div>
                    <div className='descriptionhead1'>
                        Description :
                    </div>
                    <div className='description1'>
                        {book.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail