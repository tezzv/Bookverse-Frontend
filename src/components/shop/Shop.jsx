import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import BookContext from '../../context/Bookcontext';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import './Shop.css'

const Shop = () => {
    const context = useContext(BookContext);
    const { host } = context;
    
    const [books1, setBooks1] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${host}/api/books/fetchallbooks`); 
                const data = await response.json();
                setBooks1(data);
                setFilteredBooks(data); // Initialize filteredBooks with all books
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []);

    const filterBooksByGenre = (genre) => {
        if (genre) {
            const filtered = books1.filter(book => book.genre === genre);
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(books1); // Reset to all books
        }
    };


    return (
        <div className='container'>
            <Navbar />
            <div class="genre-card">
                <form action="#">
                    <div class="radio-wrapper">
                        <input
                            class="books-radio-buttons"
                            id="all"
                            value="all"
                            name="genre"
                            type="radio"
                        />
                        <label class="bookslabel allbutton" onClick={() => filterBooksByGenre('')} for="all">All</label>

                        <input
                            class="books-radio-buttons"
                            id="fiction"
                            value="fiction"
                            name="genre"
                            type="radio"
                        />
                        <label class="bookslabel fictionbutton" onClick={() => filterBooksByGenre('Fiction')} for="fiction">Fiction</label>

                        <input
                            class="books-radio-buttons"
                            id="horror"
                            value="horror"
                            name="genre"
                            type="radio"
                        />
                        <label class="bookslabel horrorbutton" onClick={() => filterBooksByGenre('Horror')} for="horror">Horror</label>

                        <input
                            class="books-radio-buttons"
                            id="romance"
                            value="romance"
                            name="genre"
                            type="radio"
                        />
                        <label class="bookslabel romancebutton" onClick={() => filterBooksByGenre('Romance')} for="romance">Romance</label>

                        <input
                            class="books-radio-buttons"
                            id="thriller"
                            value="thriller"
                            name="genre"
                            type="radio"
                        />
                        <label class="bookslabel thrillerbutton" onClick={() => filterBooksByGenre('Thriller')} for="thriller">Thriller</label>
                    </div>
                </form>
            </div>
            <div className='cardswrap1'>
                {filteredBooks.map((book) => (
                    <div key={book._id}><Link style={{ textDecoration: 'none' }} to={`/bookdetail/${book._id}`}><Card book={book} /></Link></div>
                ))}
            </div>
        </div>
    )
}

export default Shop