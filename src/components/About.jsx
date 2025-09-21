import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const About = () => {

  useEffect(() => {
    const images = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the image is visible
      }
    );

    images.forEach(image => {
      observer.observe(image);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      images.forEach(image => observer.unobserve(image));
    };
  }, []);

  return (
    <div>

      <div className="relative lg:h-[300px] h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://themewagon.github.io/restoran/img/bg-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full text-white">
          <h1 className="text-3xl font-bold" style={{ fontFamily: '"Nunito", sans-serif' }}>About us</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center mt-[10px] px-4">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="w-[20vw] fade-in-up">
              <img className="h-[300px] w-full" src="https://themewagon.github.io/restoran/img/about-1.jpg" alt="" />
            </div>
            <div className="w-[20vw] flex flex-col justify-end fade-in-up">
              <img className="h-[223px] w-full" src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="" />
            </div>
          </div>
          <div className="flex justify-end gap-5">
            <div className="w-[20vw] fade-in-up">
              <img className="h-[223px] w-full" src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" />
            </div>
            <div className="w-[20vw] fade-in-up">
              <img className="h-[300px] w-full" src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-[45vw] mt-6 lg:mt-0">
          <h1 className="text-2xl heading3">About Us</h1>
          <br />
          <h1 className="text-4xl font-bold" style={{ fontFamily: '"Nunito", sans-serif' }}>Welcome to <FontAwesomeIcon icon={faUtensils} style={{ color: "#FEA116" }} /> Restaurant</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur ullam animi fugit quasi officiis.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam hic expedita perferendis ipsum explicabo labore obcaecati sapiente iusto accusantium est.</p>
          <button className="mt-[15px] bg-[#FEA116] text-white p-[10px]">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
