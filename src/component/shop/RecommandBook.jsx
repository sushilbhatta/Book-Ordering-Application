import Book from "./Book";
import "./booksShared.css";
import book1 from "../../images/book1.png";
import book2 from "../../images/book2.png";
import book3 from "../../images/book3.png";
import book4 from "../../images/book4.png";
import book5 from "../../images/book5.png";
export default function RecommandBook({ bookTitle }) {
  return (
    <section id='book-section'>
      <h3>{bookTitle}</h3>
      <div className='books'>
        <Book
          bookUrl={book1}
          bookName='Young Mongo'
          writer='Douglas Staurt'
          bookPrice='Rs 540'
        ></Book>
        <Book
          bookUrl={book2}
          bookName='An Immense World'
          writer='YONG'
          bookPrice='Rs 600'
        ></Book>
        <Book
          bookUrl={book3}
          bookName='Constructing A Nervous System'
          writer='Margo ReferSon'
          bookPrice='Rs 600'
        ></Book>
        <Book
          bookUrl={book4}
          bookName='I am glad my mom died'
          writer='Jennette mcCurdy'
          bookPrice='Rs 600'
        ></Book>
        <Book
          bookUrl={book5}
          bookName='Rememberly Bright Creature'
          writer='YONG'
          bookPrice='Rs 600'
        ></Book>
      </div>
    </section>
  );
}
