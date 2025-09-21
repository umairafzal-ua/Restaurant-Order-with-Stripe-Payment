import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [navbarShrink, setNavbarShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
      setNavbarShrink(true); 
    } else {
      setNavbarBg(false);
      setNavbarShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`body-font  fixed w-full z-50 transition-all duration-500 ease-in-out  
        ${navbarBg ? 'bg-black' : 'bg-transparent'} 
        ${navbarShrink ? 'py-2' : 'py-5'}`}
      >
         <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto w">
      <Link to='/' class="lg:mr-5 mr-2 cursor-pointer text-white hover:text-[#FEA116] transition-colors duration-700 ease-in-out">Home</Link>
      <Link to='/about' class="lg:mr-5 mr-2 cursor-pointer text-white hover:text-[#FEA116] transition-colors duration-700 ease-in-out">About</Link>
      <Link to='/services' class="lg:mr-5 mr-2 cursor-pointer text-white hover:text-[#FEA116] transition-colors duration-700 ease-in-out">Services</Link>
      <Link to='/menu' class=" cursor-pointer text-white hover:text-[#FEA116] transition-colors duration-700 ease-in-out">Menu</Link>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <svg fill="#FEA116" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-48.98 -48.98 587.73 587.73" xml:space="preserve" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.938638"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_95_"> <path id="XMLID_98_" d="M155.183,305.646c-2.081,0.175-4.157,0.265-6.238,0.265c-5.693,0-11.23-0.826-16.652-2.081L6.834,429.293 c-6.158,6.149-6.158,16.137,0,22.287l32.47,32.478c6.158,6.15,16.135,6.15,22.276,0l150.785-150.757l-27.944-30.15L155.183,305.646 z"></path> <path id="XMLID_97_" d="M485.345,104.649c-5.888-5.885-15.417-5.885-21.304,0l-81.303,81.301c-7.693,7.685-20.154,7.685-27.847,0 c-7.659-7.679-7.659-20.13,0-27.807l80.901-80.884c6.112-6.118,6.112-16.036,0-22.168c-6.141-6.11-16.055-6.11-22.167,0 l-80.868,80.876c-7.693,7.693-20.14,7.693-27.833,0c-7.677-7.676-7.677-20.136,0-27.806l81.286-81.293 c5.904-5.894,5.904-15.441,0-21.343c-5.888-5.895-15.434-5.895-21.338,0l-91.458,91.463 c-21.989,22.003-28.935,52.888-21.816,80.991l61.31,61.314c28.101,7.093,59.001,0.144,80.965-21.841l91.471-91.458 C491.249,120.1,491.249,110.543,485.345,104.649z"></path> <path id="XMLID_96_" d="M41.093,13.791c-3.134-3.135-7.372-4.854-11.724-4.854c-0.926,0-1.857,0.079-2.766,0.231 c-5.295,0.896-9.838,4.295-12.172,9.133c-26.79,55.373-15.594,121.631,27.894,165.121l77.801,77.791 c7.676,7.685,18.055,11.939,28.819,11.939c1.151,0,2.305-0.048,3.456-0.143l45.171-3.855l196.971,212.489 c3.058,3.303,7.342,5.221,11.855,5.31c0.093,0,0.19,0,0.288,0c4.412,0,8.636-1.743,11.771-4.855l33.734-33.741 c3.117-3.11,4.859-7.331,4.859-11.73c0-4.398-1.742-8.622-4.846-11.732L41.093,13.791z"></path> </g> </g></svg>
      <span class="ml-3 text-xl text-[#FEA116]">Restaurant</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link to='/cart' class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 bg-[#FEA116]">Cart
      </Link>
    </div>
  </div>
</header>
</div>
  );
};

export default Navbar;
