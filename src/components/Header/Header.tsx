const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <a href="#">
              <img src="./img/logo.svg" className="logo" alt="Logo" />
            </a>
          </div>
          <div className="header__navbar">
            <nav>
              <ul className="header__nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__button">
            <a className="button__transparent-marmalade" href="#">
              GIFT FINDER
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
