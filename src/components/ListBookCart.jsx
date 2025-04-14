import { Routes, Route } from "react-router-dom";

import BookList from "pages/BookList";
import BookDetails from "pages/BookDetails";
import Cart from "pages/Cart.jsx";

const ListBookCart = () => {
  return (
    <div>
      <BookList></BookList>
    </div>
  );
};

export default ListBookCart;
