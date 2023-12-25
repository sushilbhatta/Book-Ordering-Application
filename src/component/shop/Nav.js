export default function Nav() {
  return (
    <>
      <nav id='main-header__nav'>
        <ul class='main-header__item-list'>
          <li className='main-header__item'>
            <a href=''>About</a>
          </li>
          <li className='main-header__item'>
            <a href=''>Store</a>
          </li>
          <li className='main-header__item'>
            <a href=''>Contact Us</a>
          </li>
          <li className='main-header__item'>
            <a href=''>
              <img src='...' alt='Cart-Add to Cart' />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
