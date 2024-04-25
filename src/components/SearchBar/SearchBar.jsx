import React, { useContext, useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import searchbtn from './seacrnbtn1.svg';
import BookContext from '../../context/Bookcontext';
import { useNavigate } from 'react-router-dom';
import useOutsideClick from './useOutsideClick';


const SearchBar = ({ onSearch }) => {
    const context = useContext(BookContext);
    const { host } = context;

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const ref = useRef(null);

    // Function to handle the search operation
    const fetchBooks = async (e) => {
        // e.preventDefault();
        try {
            const response = await fetch(`${host}/api/books/search/?searchTerm=${searchTerm}`);
            const data = await response.json();
            setBooks(data)
            // console.log(data); // Or update state with the search results
            // if (onSearch) {
            //     onSearch(data); // Passing the search result back to parent if needed
            // }
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (searchTerm) {
                fetchBooks();
            }
        }, 300); // Debounce time set to 300 milliseconds

        return () => clearTimeout(timerId); // Clear timeout when the component unmounts or the searchTerm updates
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleSelectBook = (bookId) => {
        navigate(`/bookdetail/${bookId}`) // Navigate to book details page
        setBooks([]); // Clear the search results
        setSearchTerm(''); // Clear the search term
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetchBooks();
    }

    useOutsideClick(ref, () => {
        if (books.length > 0) {
            setBooks([]); // Clears the book list when clicking outside
        }
    });


    return (
        <div ref={ref}>
            <div className='seachbar1'>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className='inputsearch1'
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search books..."
                    />
                    <button type='submit' className='seachbtn1'>
                        <img src={searchbtn} alt='search' />
                    </button>
                </form>
            </div>
            <div>
                {books.length > 0 && (
                    <ul className='search-results'>
                        {books.map(book => (
                            <li key={book._id} onClick={() => handleSelectBook(book._id)}>
                                {/* {book.title} */}
                                <div className='searchlist'>
                                    <img className='coverimgsearch' src={book.coverlink} alt={book.title} />
                                    <div className='searchbookdetals'>
                                        <p style={{ width: '200px' }}>{book.title}</p>
                                        <div className='searchbookdetals2'>
                                            <p>-{book.author}</p>
                                            <p>{book.genre}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
