import React from 'react'
import cartIcon from '../../assets/cartIcon.svg'
import './Card.css'
import bookCover from '../../assets/bookcoverSample.png'


const Card = (props) => {
    return (
        <div className='cardBox'>
            {/* <img src={cartIcon} alt="asdfd" /> */}
            <img className='bookCover' src={bookCover} alt="asdfd" />
            <div className='justifyflexrow' style={{ width: '200px' }}>
                <div>

                    <p>{props.bookName} book name</p>
                    <p>{props.authorName} author name</p>

                </div>
                <div>

                    <p>{props.price} price</p>
                    <img src={cartIcon} alt="safd" />

                </div>

            </div>
        </div>
    )
}

export default Card