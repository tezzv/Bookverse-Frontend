import React from 'react'
import cartIcon from '../../assets/cartIcon.svg'
import './Card.css'
import bookCover from '../../assets/bookcoverSample.png'


const Card = (props) => {
    // console.log(props);
    return (
        <div className='cardBox'>
            {/* <img src={cartIcon} alt="asdfd" /> */}
            <img className='bookCover' src={props.book.coverlink} alt="asdfd" />
            <div className='justifyflexrow' style={{ width: '200px' }}>
                <div style={{width: '150px'}}>

                    <p>{props.book.title}</p>
                    <p>-{props.book.author}</p>

                </div>
                <div>

                    <p>₹ {props.book.price}/-</p>
                    <img src={cartIcon} alt="safd" />

                </div>

            </div>
        </div>
    )
}

export default Card