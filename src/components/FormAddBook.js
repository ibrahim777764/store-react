import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBookApi } from '../redux/books/books';

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
    <div>
      <h2>Add new book</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" name="name" placeholder="Book Title" id="title" ref={titleInputRef} required />
        <input type="text" name="category" placeholder="Category" id="category" ref={categoryInputRef} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
