const BookCard = ({ book }) => (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Price: ₹{book.price}</p>
      <p>Condition: {book.condition}</p>
    </div>
  );
  
  export default BookCard;
  