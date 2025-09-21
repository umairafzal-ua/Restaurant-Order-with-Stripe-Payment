import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen, faCartPlus, faHeadphones, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'

const Services = () => {
  return (
    <>
    <div className="relative lg:h-[300px] h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://themewagon.github.io/restoran/img/bg-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full text-white">
          <h1 className="text-3xl font-bold" style={{ fontFamily: '"Nunito", sans-serif' }}>Services</h1>
        </div>
      </div>

      <div className='bg-gray-100 flex justify-center text-[#f07d15]'>
          <h1 className='heading'>Food Menu</h1>
        </div>

    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Explore Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        
        {/* Card 1: Master Chefs */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-100">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faChessQueen} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Master Chefs</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 2: Quality Food */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-200">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faUtensils} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Quality Food</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 3: Online Order */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-300">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faCartPlus} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Online Order</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 4: 24/7 Service */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-400">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faHeadphones} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">24/7 Service</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>



        {/* Card 1: Master Chefs */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-100">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faChessQueen} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Master Chefs</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 2: Quality Food */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-200">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faUtensils} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Quality Food</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 3: Online Order */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-300">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faCartPlus} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">Online Order</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

        {/* Card 4: 24/7 Service */}
        <div className="text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-[#f07d15] hover:text-white group animate-fadeInUp delay-400">
          <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faHeadphones} className="transition-colors duration-300 text-[#f07d15] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">24/7 Service</h3>
          <p className="text-sm transition-colors duration-300">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>

      </div>
    </section>
    </>
  );
}

export default Services;
