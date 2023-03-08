import React from 'react'
import Header from './Header'
import './style/Home.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <div className="desc-wrapper">
          <h1>Arlando Muhammad Farrel Gamer & Developer</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis obcaecati eius ipsa rerum non, corporis illum voluptates eaque magnam adipisci dolore quod molestiae a optio, harum dolorum minus explicabo aliquam!</h4>
          <div className="social-med">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-linkedin-in" />
            <i className="fa-brands fa-facebook-f"/>
            </div>
        </div>
        <div className="photo-wrapper">
          <img src="/assets/foto.jpeg" />
        </div>
      </div>
    </div>
  )
}

export default Home