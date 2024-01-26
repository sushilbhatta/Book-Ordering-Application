import "./booksShared.css";
export default function Book({ bookUrl, bookName, bookPrice }) {
  return (
    <article class='book-item'>
      <div className='book-image'>
        <img src={bookUrl} alt={bookName} />
      </div>
      <div className='book-description'>
        <h3>{bookName}</h3>
        <p>{bookPrice}</p>
        <button className='btn'>View Details</button>
      </div>
    </article>
  );
}
