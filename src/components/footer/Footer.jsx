import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Srinu Korra</h1>

            <ul className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>

            </ul>

            <div className="footer__social">
            <a href="https://x.com/SrinuChauhan2" className="home__social-icon" target="_blank">
                <i class="uil uil-twitter"></i>
                </a>

                <a href="https://github.com/SRINU1221" className="home__social-icon" target="_blank">
                <i class="uil uil-github-alt"></i>   
                </a>

                <a href="https://www.linkedin.com/in/srinuchauhan/" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>
            </div>
            <span className='footer__copy'>&#169; srinu Korra. All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
