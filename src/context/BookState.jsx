import { useEffect, useState } from "react";
import BookContext from "./Bookcontext";

const BookState = (props) => {

    let host = "http://localhost:5000"; // Default host for development

    // if (process.env.NODE_ENV === 'production') {
    //     host = "https://notedin-api.vercel.app"; // API host for production
    // }


    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({ title: "", description: "", author: "", price: 0, genre: "fiction", coverlink: "", pdflink: "" });

    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNTc2ZTY1ZjhjNjJlYTQ0ZGI3NThhIn0sImlhdCI6MTcxMjY4MjgzNX0.Dux6S1nd7W_YNh30qu6-iBT5K32RSblzAXdU8DZy_Zw";
    // const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxNTc2ZTY1ZjhjNjJlYTQ0ZGI3NThhIn0sImlhdCI6MTcxMjY4MjgzNX0.Dux6S1nd7W_YNh30qu6-iBT5K32RSblzAXdU8DZy_Zw"

    // upload a book
    const uploadBook = async () => {
        // API Call

        try {
            const response = await fetch(`${host}/api/books/addbook`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": authToken
                },
                body: JSON.stringify({
                    "title": book.title, "description": book.description,
                    "author": book.author, "price": book.price,
                    "pdflink": book.pdflink, "coverlink": book.coverlink,
                    "uploadedby": "Bookverse",
                    "genre": book.genre
                }),
            });

            const result = await response.json();
            // console.log("Success:", result);
            if (!result.error) {
                // showAlert("Note added succesfully", "success")
                alert("Book added succesfully!");
            } else {
                // showAlert(result.error, "danger")
                alert("Error: ", result.error)
            }
        } catch (error) {
            // console.error("Error:", error);
            // showAlert(error, "danger")
            alert("Error: ", error)
        }

        console.log(book);

        setBook({ title: "", description: "", author: "", price: 0, genre: "fiction", coverlink: "", pdflink: "" });
    }

    // get all books

    const allBooks = async () => {
        // API Call
        try {
            const response = await fetch(`${host}/api/books/fetchallbooks`, {
                method: "GET",
            });

            const result = await response.json();
            // console.log("Success:", result);
            if (!result.error) {
                // console.log(result);
                setBooks(result);
            } else {
                alert("Error: ", result.error)
            }
        } catch (error) {
            alert("Error: ", error)
        }

    }








    return (
        <BookContext.Provider value={{
            books, uploadBook, book, setBook, setBooks, allBooks, host
        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookState;