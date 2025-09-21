import React from 'react';
import './Dashboard.css';
import Slider from 'react-slick';
import './TestimonialSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Menu.css'


const testimonials = [
  {
    quote: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name 1",
    profession: "Profession 1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name 2",
    profession: "Profession 2",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name 3",
    profession: "Profession 3",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '60px', 
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const gotoMenu=()=>{
    navigate('/menu')
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative lg:h-screen h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://themewagon.github.io/restoran/img/bg-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 flex lg:flex-row flex-col items-center justify-around h-full text-white">
          <div className='lg:w-[40vw] left-0 lg:text-start text-center lg:mt-0 mt-48'>
            <h1 className="lg:text-5xl font-bold mb-4 text-2xl slide-in-left">
              Enjoy Our <br />
              Delicious Meal
            </h1>
            <p className="lg:text-xl mb-6 text-xs slide-in-left" style={{ animationDelay: '0.2s' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum similique blanditiis, modi laudantium temporibus expedita. Reiciendis natus tempore adipisci libero velit debitis, incidunt ipsum quaerat?
            </p>
            <button onClick={gotoMenu} className=" bg-[#f07d15] hover:bg-[#f07d15] transition-colors duration-500 text-white font-bold py-3 px-10 rounded-lg slide-in-left" style={{ animationDelay: '0.4s' }}>
              Book a Table
            </button>
          </div>
          <div className='lg:w-[40vw] lg:text-start lg:mt-20 flex justify-center'>
            <img src="https://themewagon.github.io/restoran/img/hero.png" alt="Restaurant Icon" className="rounded-full h-auto animate-spin-slow object-contain lg:w-[85%] w-[60%]" />
          </div>
        </div>
      </div>

      <div className='h-10'>

      </div>


      <div className="flex flex-col lg:flex-row justify-around items-center mt-[20px] px-4">
        {/* Left Side Images */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="w-[20vw]">
              <img className="h-[300px] w-full" src="https://themewagon.github.io/restoran/img/about-1.jpg" alt="" />
            </div>
            <div className="w-[20vw] flex flex-col justify-end">
              <img className="h-[223px] w-full" src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="" />
            </div>
          </div>
          <div className="flex justify-end gap-5">
            <div className="w-[20vw]">
              <img className="h-[223px] w-full" src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" />
            </div>
            <div className="w-[20vw]">
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
    
      <div className='h-10'>

      </div>

      <div className="py-12 bg-white">
  <div className="text-center">
    <h2 className="heading3">Team Members</h2>
    <h1 className="text-4xl font-bold text-gray-800">Our Master Chefs</h1>
  </div>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    
    {/* Card 1 */}
    <div className="w-64 text-center shadow-lg p-6 rounded-lg">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
        <img
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          src="https://avatar.iran.liara.run/public/boy"
          alt="Chef 1"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
      <p className="text-sm text-gray-500">Designation</p>
    </div>

    {/* Card 2 */}
    <div className="w-64 text-center shadow-lg p-6 rounded-lg">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
        <img
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          src="https://avatar.iran.liara.run/public/girl"
          alt="Chef 2"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
      <p className="text-sm text-gray-500">Designation</p>
    </div>

    {/* Card 3 */}
    <div className="w-64 text-center shadow-lg p-6 rounded-lg">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
        <img
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          src="https://avatar.iran.liara.run/public/boy"
          alt="Chef 3"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
      <p className="text-sm text-gray-500">Designation</p>
    </div>

    {/* Card 4 */}
    <div className="w-64 text-center shadow-lg p-6 rounded-lg">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
        <img
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          src="https://avatar.iran.liara.run/public/girl"
          alt="Chef 4"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
      <p className="text-sm text-gray-500">Designation</p>
    </div>

  </div>
</div>



      {/* Testimonial Section */}
      <div className="testimonial-section">
      <h2 className="heading">Testimonial</h2>
      <h3 className="section-subtitle">Our Clients Say!!!</h3>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card bg-[#FEA116] text-white">
            <div className="testimonial-quote text-white font-bold">
              <span className="quote-icon">“</span>
              {testimonial.quote}
            </div>
            <div className="testimonial-client flex flex-col items-center text-white">
              <img src={testimonial.image} alt={testimonial.name} className="client-image" />
              <div className=''>
                <h4 className="client-name text-white">{testimonial.name}</h4>
                <p className="client-profession text-white">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Dashboard;
