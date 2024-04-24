import React, { useContext, useState } from 'react'
import './SearchBar.css'
import searchbtn from './seacrnbtn1.svg'
import BookContext from '../../context/Bookcontext';

const SearchBar = ({ onSearch }) => {
    const context = useContext(BookContext);
    const { host } = context;

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`${host}/api/books/search/?searchTerm=${searchTerm}`); // Backend should handle the search
            // setBooks(response.data);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='seachbar1'>
            <input
                type="text"
                className='inputsearch1'
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search books..."
            />
            <button onClick={handleSearch} className='seachbtn1'>
                <img src={searchbtn} alt='search' />
            </button>
        </div>
    )
}

export default SearchBar