import "./style.css";
const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="socail">
            <p>
              Movies & TV Shows, actors of cinema, Movie database HTML Template.
            </p>
            <div className="effect aeneas">
              <div className="buttons">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100019862141727"
                  target="_blank"
                  className="fb"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/"
                  target="_blank"
                  className="tw"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/ahmed__jamal99/"
                  target="_blank"
                  className="insta"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ahmed-jamal-43b76b205/"
                  target="_blank"
                  className="in"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5">
          <div className="List">
            <h5>Movie Box</h5>
            <ul>
              <li>About us</li>
              <li>My profile</li>
              <li>Pricing plans</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5">
          <div className="List">
            <h5>Browse</h5>
            <ul>
              <li>Live TV</li>
              <li>Live News</li>
              <li>Live Sports</li>
              <li>Stream Library</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5">
          <div className="List">
            <h5>Catogry</h5>
            <ul>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Kids</li>
              <li>Collections</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5">
          <div className="List">
            <h5>Help</h5>
            <ul>
              <li>Account & Billing</li>
              <li>Plans & Pricing</li>
              <li>Supported devices</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center">
        Copyright ©2021 All rights reserved | This template designed & Developed
        by
        <span className="ml-2 text-primary">Ahmed Jamal</span>
      </p>
    </div>
  );
};

export default Footer;
