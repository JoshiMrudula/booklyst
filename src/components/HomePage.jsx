import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const HomePage = () => {
  const books = [
    { id: 1, title: 'Book 1', price: 500, condition: 'New' },
    { id: 2, title: 'Book 2', price: 300, condition: 'Second-hand' },
  ];

  return (
    <div>
      <h1>Available Books</h1>
      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
