import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Nav() {
  return (
    <header className='main-header'>
      <a href='./index.html' class='main-header__title'>
        <img src='./images/awardbooks.png' alt='logo of the book' />
      </a>
      <nav id='main-header__nav'>
        <ul class='main-header__item-list'>
          <li className='main-header__item'>
            <a href='..'>About us</a>
          </li>
          <li className='main-header__item'>
            <a href='.'>Store</a>
          </li>
          <li className='main-header__item'>
            <a href='.'>Contact Us</a>
          </li>
          <li className='main-header__item'>
            <a href='.'>
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
