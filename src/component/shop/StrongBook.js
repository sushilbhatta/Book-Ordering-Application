import Book from "./Book";
import {} from "./booksShared.css";
import book1 from "../../images/s_b_1.webp";
import book2 from "../../images/s_b_2.webp";
import book3 from "../../images/s_b_3.webp";
import book4 from "../../images/s_b_4.webp";
import book5 from "../../images/s_b_5.webp";
export default function StrongBook({ bookTitle }) {
  return (
    <section id='book-section'>
      <h3>{bookTitle}</h3>
      <div className='books'>
        <Book
          bookUrl={book1}
          bookName='Missing'
          writer='johaun scriwitz'
          bookPrice='Rs 540'
        ></Book>
        <Book
          bookUrl={book2}
          bookName='No return to Poverty'
          writer='Victorian Socialist'
          price='Rs 600'
        ></Book>
        <Book
          bookUrl={book3}
          bookName='Company of One'
          writer='Paul Jarvis'
          bookPrice='Rs 600'
        ></Book>
        <Book
          bookUrl={book4}
          bookName='How Innovation Works'
          writer='Mat Ridley'
          bookPrice='Rs 600'
        ></Book>
        <Book
          bookUrl={book5}
          bookName='The pysicology of Money'
          writer='Morgan Housel'
          bookPrice='Rs 600'
        ></Book>
      </div>
    </section>
  );
}
