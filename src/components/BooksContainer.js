import React from 'react';
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';

const books = [
  {
    id: 1,
    category: 'Action',
    name: 'The hunger games',
    author: 'Suzane Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzzane Collins',
  },
];

function BooksContainer() {
  return (
    <div className="container">
      <BooksList books={books} />
      <FormAddBook />
    </div>
  );
}

export default BooksContainer;
