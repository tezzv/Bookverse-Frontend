import React, { useState } from 'react';
import './BookUpload.css'

function BookUpload() {
    const [book, setBook] = useState({ title: "", description: "", author: "", price: 0, genre: "fiction", coverlink: "", pdflink: "" });

    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNTc2ZTY1ZjhjNjJlYTQ0ZGI3NThhIn0sImlhdCI6MTcxMjY4MjgzNX0.Dux6S1nd7W_YNh30qu6-iBT5K32RSblzAXdU8DZy_Zw"

    const handleSubmit = async (e) => {
        e.preventDefault();
        // addBook(note.title, note.description, note.tag);

        try {
            const response = await fetch(`http://localhost:5000/api/books/addbook`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": authToken
                },
                body: JSON.stringify({
                    "title": book.title, "description": book.description,
                    "author": book.author, "price": book.price,
                    "pdflink": book.pdflink, "coverlink": book.coverlink,
                    "uploadedby": "Bookverse"
                }),
            });

            const result = await response.json();
            // console.log("Success:", result);
            // getNotes(authToken);
            if (!result.error) {
                // showAlert("Note added succesfully", "success")
                alert("Book added succesfully!");
            } else {
                // showAlert(result.error, "danger")
                alert("Error: ", result.error)
            }
            // setNotes(notes.concat(result));
        } catch (error) {
            // console.error("Error:", error);
            // showAlert(error, "danger")
            alert("Error: ", error)
        }

        console.log(book);

        setBook({ title: "", description: "", author: "", price: 0, genre: "fiction", coverlink: "", pdflink: "" });
    }


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
                                <label htmlFor="title" className="form-label">Book Title</label>
                                <input type="text" className="form-control" id="title" name="title" required minLength={3} value={book.title} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="coverlink" className="form-label">Cover Page Link</label>
                                <input type="text" className="form-control" id="coverlink" name="coverlink" required value={book.coverlink} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pdflink" className="form-label">Pdf Link</label>
                                <input type="text" className="form-control" id="pdflink" name="pdflink" required value={book.pdflink} onChange={onChange} />
                            </div>
                        </div>
                        <div className='formright'>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Author Name</label>
                                <input type="text" className="form-control" id="author" name="author" required value={book.author} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" name="price" required min={1} value={book.price} onChange={onChange} />
                            </div>
                            <div>
                                <label htmlFor="genre" className="form-label">Genre</label>
                                <select class="form-select" id='genre' aria-label="Default select example" required value={book.genre} name='genre' onChange={onChange}>
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
                        <label htmlFor="description" className="form-label vh-20">Description</label>
                        <textarea type="text" className="form-control" aria-label="With textarea" required minLength={5} id="description" name="description" value={book.description} onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary ">Submit</button>
                </div>
            </form>
            {/* <iframe className='mt-5' style={{width: "70vw", height: "500px"}} title='dsff' src='https://www.junkybooks.com/book/reader.php?book=thebooks/63975905ae5d3-new-moon.pdf'></iframe> */}
        </div>

    );
}

export default BookUpload;
