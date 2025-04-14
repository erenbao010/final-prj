import React, { useState, useEffect, useContext } from "react";
// import Excel from "components/Excel";
import { Space, Table, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../store/models/users";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add User
    </Button>
  );
};

const ListBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = () => {
    // Fetch the list of books from the API
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  };
  const handleDelete = (bookName) => {
    // Trigger the DELETE request to the API
    fetch(`http://localhost:8080/books/${encodeURIComponent(bookName)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => {
        if (response.ok) {
          // If the DELETE request is successful, fetch the updated list of books
          fetchBooks();
        } else {
          console.error("Error deleting book:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div className="About">
      <h1>Books Information</h1>
      <a style={{ color: "red" }}>Add Book</a>
      <table cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>
                <img src={book.image} alt={book.id} width="50" />
              </td>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.quantity}</td>
              <td>
                <a
                  style={{ color: "red" }}
                  onClick={() => handleDelete(book.name)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBook;
