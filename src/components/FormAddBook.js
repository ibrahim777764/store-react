import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBookApi } from '../redux/books/books';
import './FormAddBook.css';

function FormAddBook() {
  const titleInputRef = useRef();
  const categoryInputRef = useRef();
  const dispatch = useDispatch();

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      item_id: nanoid(),
      title: titleInputRef.current.value,
      category: categoryInputRef.current.value,
    };
    dispatch(addBookApi(newBook));
    titleInputRef.current.value = '';
    categoryInputRef.current.value = '';
  }

  return (
    <div className="add-book-container">
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="flex justify-between">
        <input
          type="text"
          name="name"
          placeholder="Book Title"
          id="title"
          ref={titleInputRef}
          required
          className="input-title"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          id="category"
          ref={categoryInputRef}
          required
          className="input-category"
        />
        <div>
          <button type="submit" className="btn-add-book">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default FormAddBook;
