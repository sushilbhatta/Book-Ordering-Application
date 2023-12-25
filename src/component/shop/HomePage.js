import Nav from "./Nav";
import "../public/css/main.css";
import Footer from "./Footer";
function HomePage() {
  return (
    <>
      <body>
        <header className='main-header'>
          <a href='./index.html' class='main-header__title'>
            <img src='./images/awardbooks.png' alt='logo of the book' />
          </a>
          <Nav></Nav>
        </header>
        <main>
          <section id='main-section'>
            <div className='background'></div>
            <div className='main-section__description'>
              <h1>Expand your mind reading a book</h1>
              <p>Reading books is wonderful way to spend your time.</p>
              <button className='btn'>Read Free Book</button>
            </div>
          </section>
          <section id='book-section'>
            <h3>Recommanded Books</h3>
            <div className='books'>
              <div class='book-item'>
                <img src='./images/banner-books/book1.png' alt='' />
              </div>
              <div class='book-item'>
                <img src='./images/banner-books/book2.png' alt='' />
              </div>
              <div class='book-item'>
                <img src='./images/banner-books/book3.png' alt='' />
              </div>
              <div class='book-item'>
                <img src='./images/banner-books/book4.png' alt='' />
              </div>
              <div class='book-item'>
                <img src='./images/banner-books/book5.png' alt='' />
              </div>
              <div class='book-item'>
                <img src='./images/banner-books/book5.png' alt='' />
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </body>
    </>
  );
}
export default HomePage;
