import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteItem } from '../redux/cartSlice'; 
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faMugHot, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const menuItems = [
    {
      name: 'Chicken Burger',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      price: 115,
      img: 'https://themewagon.github.io/restoran/img/menu-1.jpg',
      category: 'Breakfast'
    },
    {
      name: 'Pancakes',
      description: 'Fluffy pancakes with syrup',
      price: 80,
      img: 'https://themewagon.github.io/restoran/img/menu-2.jpg',
      category: 'Breakfast'
    },
    {
      name: 'Grilled Sandwich',
      description: 'Grilled sandwich with cheese',
      price: 90,
      img: 'https://themewagon.github.io/restoran/img/menu-5.jpg',
      category: 'Lunch'
    },
    {
      name: 'Steak',
      description: 'Grilled steak with veggies',
      price: 200,
      img: 'https://themewagon.github.io/restoran/img/menu-4.jpg',
      category: 'Dinner'
    },
    {
      name: 'Pizza',
      description: 'Pizza with extra cheese',
      price: 150,
      img: 'https://themewagon.github.io/restoran/img/menu-7.jpg',
      category: 'Dinner'
    },
  ];
  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    const isInCart = cartItems.find(cartItem => cartItem.name === item.name);
    if (isInCart) {
      alert(`${item.name} is already added to the cart.`);
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <>
      <div className="relative lg:h-[40vh] h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://themewagon.github.io/restoran/img/bg-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full text-white">
          <h1 className="text-3xl font-bold mt-36" style={{ fontFamily: '"Nunito", sans-serif' }}>Food Menu</h1>
          <div className='flex gap-2'>
            <button className='text-[#f07d15]'> Home </button> /
            <button className='text-[#f07d15]'> Pages </button> /
            <button> Menu</button>
          </div>
        </div>
      </div>
      <div className='mt-12 flex justify-center text-[#f07d15]'>
          <h1 className='heading'>Food Menu</h1>
        </div>

      <div className='mt-6 flex justify-center text-black'>
        <h1 className='text-4xl font-bold' style={{ fontFamily: '"Nunito", sans-serif' }}> Most Popular Items </h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex space-x-8 border-b-2 border-gray-300 pb-2 w-[360px]">

          <div className="flex flex-row items-center">
            <button
              className={`text-xl font-bold flex items-center gap-2 ${selectedCategory === 'Breakfast' ? 'text-[#f07d15] underline underline-offset-8' : 'text-gray-500'}`}
              onClick={() => setSelectedCategory('Breakfast')}
            >
              <FontAwesomeIcon icon={faMugHot} style={{ color: "#f07d15" }} />
              <span>Breakfast</span>
            </button>
          </div>

          <div className="flex flex-row items-center">
            <button
              className={`text-xl font-bold flex items-center gap-2 ${selectedCategory === 'Lunch' ? 'text-[#f07d15] underline underline-offset-8' : 'text-gray-500'}`}
              onClick={() => setSelectedCategory('Lunch')}
            >
              <FontAwesomeIcon icon={faBurger} style={{ color: "#f07d15" }} />
              <span>Lunch</span>
            </button>
          </div>

          {/* Dinner Button */}
          <div className="flex flex-row items-center">
            <button
              className={`text-xl font-bold flex items-center gap-2 ${selectedCategory === 'Dinner' ? 'text-[#f07d15] underline underline-offset-8' : 'text-gray-500'}`}
              onClick={() => setSelectedCategory('Dinner')}
            >
              <FontAwesomeIcon icon={faUtensils} style={{ color: "#f07d15" }} />
              <span>Dinner</span>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-container grid lg:grid-cols-2 gap-8 px-10 py-10">
        {filteredItems.map((item, index) => (
          <div key={index} className="menu-item flex justify-between items-center border-b-2 pb-4">
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded" />
            <div className="item-info">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="item-price text-[#f07d15] font-bold text-xl">{item.price}</div>
            <div>
              <div className='flex justify-center'>
                <lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#f07d15,secondary:#000000"
                  className="width:250px;height:250px"
                  onClick={() => handleAddToCart(item)}
                ></lord-icon>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
