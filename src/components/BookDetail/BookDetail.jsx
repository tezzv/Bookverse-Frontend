import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './BookDetail.css';
import carticon from './carticon.png';
import usericon from './usericon1.svg'
import bookCover from '../../assets/bookcoverSample.png'

const BookDetail = () => {
    const { bookID } = useParams();
    console.log(bookID);

    return (
        <div>
            <Navbar />
            <div className='bookdetails1'>
                <div className='bookdetailleft1'>
                    <div className='bookimgdiv1'>
                        <img src={bookCover} className='bookimgdim1' alt='add to cart' />
                    </div>
                    <button className='buynowbtn1'>
                        <div>BUY NOW</div>
                        <div style={{ fontSize: '20px' }}>₹ 50/-</div>
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
                            <span className='uploadedbyuser1'>tejveer singh</span>
                        </div>
                    </div>
                    <div className='hrlinebook2' />
                </div>
                <div className='bookdetailright1'>
                    <div className='booktitle1'>Book Title</div>
                    <div className='author1txt'>-author</div>
                    <div style={{ marginTop: '24px' }}>
                        <div className='hrlinebook1' />
                        <div className='bookgenre1'>Genre : Romance</div>
                        <div className='hrlinebook1' />
                    </div>
                    <div className='descriptionhead1'>
                        Description :
                    </div>
                    <div className='description1'>
                        Download New Moon by Stephenie Meyer Pdf book free online. Edward Cullen is the one thing that Bella Swan values more than life itself. However, Bella had no idea how hazardous it would be to fall in love with a vampire. Although Edward has already saved Bella from the grasp of one evil vampire, they now understand that their problems might just be just beginning as their daring relationship threatens everything they hold dear.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail