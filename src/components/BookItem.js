import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="flex justify-between">
      <div>
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <div>
          <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
        </div>
      </div>
      <div className="completed">
        <h2>
          0%
          <br />
          <span>Completed</span>
        </h2>
      </div>
      <div className="update-progress">
        <h3>CURRENT CHAPTER</h3>
        <h5>Introduction</h5>
        <button className="btn" type="button">UPDATE PROGRESS</button>
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
