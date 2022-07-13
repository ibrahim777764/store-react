import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';

function BooksContainer() {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      <BooksList books={books} />
      <FormAddBook />
    </div>
  );
}

export default BooksContainer;
