import React, { useState } from 'react';
import './BookUpload.css'

function BookUpload() {
    const [book, setBook] = useState({ title: "", description: "", author: "", price: 0, genre: "fiction", coverlink: "", pdflink: "" });


    const handleSubmit = (event) => {

    };
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    return (
        <div className='BookUpload container'>
            <h3 className='heading1'>Upload a Book!</h3>
            <form onSubmit={handleSubmit}>
                <div className='formmain'>
                    <div className='formmid'>
                        <div className='formleft'>
                            <div className="mb-3">
                                <label for="title" className="form-label">Book Title</label>
                                <input type="text" className="form-control" id="title" name="title" />
                            </div>
                            <div className="mb-3">
                                <label for="coverLink" className="form-label">Cover Page Link</label>
                                <input type="text" className="form-control" id="coverLink" name="coverLink" />
                            </div>
                        </div>
                        <div className='formright'>
                            <div className="mb-3">
                                <label for="author" className="form-label">Author Name</label>
                                <input type="text" className="form-control" id="author" name="author" />
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Genre</option>
                                <option value="1">Fiction</option>
                                <option value="2">Horror</option>
                                <option value="3">Romance</option>
                                <option value="3">Thriller</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="description" className="form-label vh-20">Description</label>
                        <input type="text" className="form-control" id="description" name="description" />
                    </div>

                    <button type="submit" className="btn btn-primary ">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default BookUpload;
