import React, { useEffect } from "react";
import "./Carousel.css";

// Import images
import img1 from "../components/assets/3.png";
import img2 from "../components/assets/4.png";
import img3 from "../components/assets/5.png";
import img4 from "../components/assets/7.png";
import img5 from "../components/assets/8.png";
import img6 from "../components/assets/9.png";

const Carousel = () => {

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');

    let clickLock;
    const animationDuration = 1100;

    const showSlider = (type) => {
      nextButton.disabled = true;
      prevButton.disabled = true;

      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');

      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(clickLock);
      clickLock = setTimeout(() => {
        nextButton.disabled = false;
        prevButton.disabled = false;
      }, animationDuration);
    };

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    seeMoreButtons.forEach((button) => {
      button.onclick = () => carousel.classList.add('showDetail');
    });

    backButton.onclick = () => carousel.classList.remove('showDetail');

  }, []);

  // Use the imported images
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="carousel"id="about">
      <div className="list">
        {images.map((img, i) => (
          <div className="item" key={i}>
            <img src={img} alt={`Slide ${i+1}`} />
            <div className="introduce">
              <div className="title">ABOUT US</div>
              <div className="topic">WHO WE ARE</div>
              <div className="des">
                Bringing homes to life, one piece at a time. We are a passionate team dedicated to curating beautiful, functional, and timeless home decor. From statement clocks to cozy textiles, we believe every product should inspire comfort and style.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">OUR COLLECTIONS</div>
              <br />
              <div className="des">
               

At SquareOne, we offer a thoughtfully curated selection of home decor that brings beauty and function to every space. 
<br />
From elegant furniture and cozy bedding to eye-catching wall art, statement clocks, and unique kitchenware, our pieces are chosen to complement a variety of styles and tastes.
<br />
​

Whether you’re refreshing a single room or transforming your entire home, our diverse range—including carpets, mirrors, lighting, and more—helps you create spaces that feel welcoming, personal, and timeless. Every item is designed with care to make your home truly yours.
              </div>
              <br />
              <br />
              
              <div className="checkout">
                <button>ADD TO CART </button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">See All &#8599;</button>
      </div>
    </div>
  );
};

export default Carousel;
