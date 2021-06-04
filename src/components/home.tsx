import React from 'react';
import Animation from './help/animation';
import FadeIn from './help/aniTransition';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Cheese Boards</h1>
      </div>
      <section className="description">
        <div className="pitch-container">
          <h6 className="first-pitch">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deleniti dignissimos minima facilis nesciunt ab. Explicabo nemo
            similique iure, modi porro, doloremque quod, iste quis odit eum
            expedita error molestiae. Perspiciatis voluptatibus maxime ullam atque
            aut repellat saepe reprehenderit harum recusandae temporibus, animi
            corrupti, vero quisquam. Unde recusandae esse fugit, eum, porro at
            nostrum animi accusantium, explicabo cumque culpa doloribus.
          </h6>
        </div>
      </section>
      <section className="display">
        <div className="display-wrapper">
          <div className="display-image"></div>
          <div className="display-image-wrap">
            <div className="display-image-two">
              <img src="images/bottles-table.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="product-info">
        <div className="product-info-stats">
          <h3>With a choice of <span>350</span> cheeses 44 cold cuts...</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            eius dolores quae at tempore numquam, nobis natus nulla eveniet,
            fugit soluta, quasi et. Accusamus officiis maxime, nemo labore
            tenetur magni.
          </p>
        </div>
      </section>
      <div className="product-animation">
        <Animation/>  
      </div>
      <div className="fade-in-animation">
        <FadeIn/>
      </div>
      <div className="sign-up">
        <h1>Subscribe</h1>
        <input type="text" className="subscribe" />
        <input type="submit" placeholder="Subscribe" />
      </div>
    </div>
  );
};

export default Home;
