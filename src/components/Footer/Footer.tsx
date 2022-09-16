const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer__navbar">
            <nav>
              <ul className="footer__nav">
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
          <div className="footer__hr"></div>
          <div className="footer__copyright">
            <p>© 2010 — 2020 Privacy — Terms</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
