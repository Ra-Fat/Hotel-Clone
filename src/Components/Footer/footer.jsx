import "./footer.css"

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div data-aos="fade-up" data-aos-duration="1300" className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h5>Home</h5>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Places</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Destination</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Practice Area</h5>
            <ul className="footer-links">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Popular places</a></li>
              <li><a href="#">Destination</a></li>
              <li><a href="#">Tour</a></li>
              <li><a href="#">Family Vacation</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#">Tour</a></li>
              <li><a href="#">Swimming</a></li>
              <li><a href="#">Kayak</a></li>
              <li><a href="#">Surfing</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Contact</h5>
            <address className="footer-contact">
              <p>43 Raymouth Rd. Baltemoor, London 3910</p>
              <p>+1(123)-456-7890</p>
              <p>+1(123)-456-7890</p>
              <p>info@mydomain.com</p>
            </address>

            <h5>Connect</h5>
            <div className="footer-social-icons">
              <a href="#" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon pinterest"><i className="fab fa-pinterest-p"></i></a>
              <a href="#" className="social-icon dribbble"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with{" "}
            <span className="heart">❤️</span> by Colorlib
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
