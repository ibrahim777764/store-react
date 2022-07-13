import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function FormAddBook() {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const categoryInputRef = useRef();
  const dispatch = useDispatch();

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      id: nanoid(),
      title: titleInputRef.current.value,
      author: authorInputRef.current.value,
      category: categoryInputRef.current.value,
    };
    dispatch(addBook(newBook));
    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
    categoryInputRef.current.value = '';
  }

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" name="name" placeholder="Book Title" id="title" ref={titleInputRef} required />
        <input type="text" name="author" placeholder="author" id="author" ref={authorInputRef} required />
        <input type="text" name="category" placeholder="Category" id="category" ref={categoryInputRef} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
