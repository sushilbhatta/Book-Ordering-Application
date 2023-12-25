export default function MobileNav() {
  return (
    <nav className='mobile-nav'>
      <ul className='mobile-nav__item-list'>
        <li className='mobile-nav__item'>
          <a className="<%= path === '/' ? 'active' : '' %>" href='/'>
            Shop
          </a>
        </li>
        <li className='mobile-nav__item'>
          <a
            className="<%= path === '/products' ? 'active' : '' %>"
            href='/products'
          >
            Products
          </a>
        </li>
        <li className='mobile-nav__item'>
          <a className="<%= path === '/cart' ? 'active' : '' %>" href='/cart'>
            Cart
          </a>
        </li>
        <li className='mobile-nav__item'>
          <a
            className="<%= path === '/orders' ? 'active' : '' %>"
            href='/orders'
          >
            Orders
          </a>
        </li>
        <li className='mobile-nav__item'>
          <a
            className="<%= path === '/admin/add-product' ? 'active' : '' %>"
            href='/admin/add-product'
          >
            Add Product
          </a>
        </li>
        <li className='mobile-nav__item'>
          <a
            className="<%= path === '/admin/products' ? 'active' : '' %>"
            href='/admin/products'
          >
            Admin Products
          </a>
        </li>
      </ul>
    </nav>
  );
}
