// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { CartContext } from "context/CartContext.jsx";

// const BookDetails = () => {
//   const { addToCart, cartItems } = CartContext();
//   const [book, setBook] = useState(null);
//   const [count, setCount] = useState(0);
//   const { name } = useParams();

//   useEffect(() => {
//     // Fetch book details based on the name
//     fetch(`http://localhost:8080/books?name=${encodeURIComponent(name)}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setBook(data[0]);
//           // If the book is already in the cart, set the initial quantity
//           const foundItem = cartItems.find(
//             (item) => item.name === data[0].name
//           );
//           if (foundItem) {
//             setCount(foundItem.quantity);
//           }
//         }
//       })
//       .catch((error) => console.error("Error fetching book details:", error));
//   }, [name, cartItems]);

//   const handleAddToCart = () => {
//     addToCart({ ...book, quantity: count });
//     setCount(0);
//   };
//   const handleDecrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   return (
//     <div>
//       {/* Render book details */}
//       <h2>Book Details</h2>
//       {book && (
//         <div>
//           <p>Name: {book.name}</p>
//           <p>Quantity: {count}</p>
//           <p>Description: {book.description}</p>
//           <p>Price: {book.price}</p>
//         </div>
//       )}

//       {/* Quantity controls */}
//       {book && (
//         <div>
//           <button onClick={handleDecrease}>Decrease</button>
//           <button onClick={() => setCount(count + 1)}>Increase</button>
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       )}

//       {/* Link to Cart */}
//       <Link to="/cart">Go to Cart</Link>
//     </div>
//   );
// };

// export default BookDetails;
