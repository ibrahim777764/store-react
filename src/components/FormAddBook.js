import React from 'react';

function FormAddBook() {
  return (
    <div>
      <h2>Add new book</h2>
      <form>
        <input type="text" name="name" placeholder="Book Title" />
        <input type="text" name="category" placeholder="Category" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
