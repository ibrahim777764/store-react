import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './BookItem.css';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="flex book-item-container">
      <div>
        <h3 className="category">{book.category}</h3>
        <h2 className="title">{book.title}</h2>
        <h4 className="author">Author Name</h4>
        <div className="flex">
          <h5 className="comments">Comments</h5>
          <button type="button" className="remove" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          <h5 className="edit">Edit</h5>
        </div>
      </div>
      <div className="flex">
        <div className="rectangle-3">
          <div className="oval-2" />
        </div>
        <div>
          <h5 className="percent">67%</h5>
          <h5 className="completed">Completed</h5>
        </div>
      </div>
      <div>
        <h6 className="chapter">CURRENT CHAPTER</h6>
        <h5 className="lesson">Introduction</h5>
        <h5 className="btn" type="button">UPDATE PROGRESS</h5>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
