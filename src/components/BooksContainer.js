import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';
import { getBooks, clearBooks } from '../redux/books/books';

function BooksContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearBooks());
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.books);
  return (
    <div>
      <BooksList books={books} />
      <FormAddBook />
    </div>
  );
}

export default BooksContainer;
