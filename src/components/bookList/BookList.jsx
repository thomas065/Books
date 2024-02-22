import React from 'react';
import './BookList.css';
import { books } from '../data/books';
import Book from '../book/Book';

const BookList = () => {
    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xl-3 g-5 justify-content-evenly'>
            {books.map((book, index) => {
                const { id } = book;
                return <Book key={id} {...book} num={index} />;
            })}
        </div>
    );
};

export default BookList;
