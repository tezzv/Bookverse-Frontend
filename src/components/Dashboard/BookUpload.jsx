import React, { useContext, useState } from 'react';
import './BookUpload.css'
import Dashboardlabel from './Dashboardlabel';
import BookContext from '../../context/Bookcontext';

function BookUpload() {
    const context = useContext(BookContext);
    const { setBook, uploadBook, book } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        uploadBook();
    }


    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }


    return (
        <div style={{ display: 'flex' }}>
            <Dashboardlabel />

            <div className='BookUpload container'>
                <h3 className='heading1'>Upload a Book!</h3>
                <form onSubmit={handleSubmit}>
                    <div className='formmain'>
                        <div className='formmid'>
                            <div className='formleft'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label inputl1">Book Title</label>
                                    <input type="text" className="form-control inputf1" id="title" name="title" required minLength={3} value={book.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="coverlink" className="form-label inputl1">Cover Page Link</label>
                                    <input type="text" className="form-control inputf1" id="coverlink" name="coverlink" required value={book.coverlink} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pdflink" className="form-label inputl1">Pdf Link</label>
                                    <input type="text" className="form-control inputf1" id="pdflink" name="pdflink" required value={book.pdflink} onChange={onChange} />
                                </div>
                            </div>
                            <div className='formright'>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label inputl1">Author Name</label>
                                    <input type="text" className="form-control inputf1" id="author" name="author" required value={book.author} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label inputl1">Price</label>
                                    <input type="number" className="form-control inputf1" id="price" name="price" required min={1} value={book.price} onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="genre" className="form-label inputl1">Genre</label>
                                    <select class="form-select inputf1" id='genre' aria-label="Default select example" required value={book.genre} name='genre' onChange={onChange}>
                                        {/* <option selected>Genre</option> */}
                                        <option selected value="Fiction">Fiction</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Romance">Romance</option>
                                        <option value="Thriller">Thriller</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label d2  inputl1">Description</label>
                            <textarea type="text" className="form-control inputd1" aria-label="With textarea" required minLength={5} id="description" name="description" value={book.description} onChange={onChange} />
                        </div>

                        <button type="submit" className="btn btn-primary submitbtnup1 ">SUBMIT</button>
                    </div>
                </form>
                {/* <iframe className='mt-5' style={{width: "70vw", height: "500px"}} title='dsff' src='https://www.junkybooks.com/book/reader.php?book=thebooks/63975905ae5d3-new-moon.pdf'></iframe> */}
            </div>
        </div>
    );
}

export default BookUpload;
