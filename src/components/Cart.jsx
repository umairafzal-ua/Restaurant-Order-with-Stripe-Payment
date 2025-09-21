import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteItem } from '../redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Payment from './Payment';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [proceedToPayment, setProceedToPayment] = useState(false);

    const totalBill = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    console.log(cartItems); 
    return (
        <div>
            {/* Banner */}
            <div
                className="relative lg:h-[40vh] h-[30vh] bg-cover bg-center"
                style={{ backgroundImage: "url('https://themewagon.github.io/restoran/img/bg-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full text-white px-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ fontFamily: '"Nunito", sans-serif' }}>
                        Cart
                    </h1>
                </div>
            </div>

            {/* Order Status */}
            <div className="mt-8 sm:mt-12 flex justify-center text-[#f07d15] px-4">
                <h1 className="heading text-xl sm:text-2xl lg:text-3xl font-semibold">Order Status</h1>
            </div>

            {/* Cart Items */}
            <div className="cart-container p-4 w-full sm:w-[80%] lg:w-[50%] mx-auto">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col justify-center items-center text-center px-4">
                        <h1 className="font-bold text-lg sm:text-xl">Hungry?</h1>
                        <p className="text-gray-600 text-sm sm:text-base">You haven't added anything to your cart!</p>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            bounce
                            style={{ color: "#f07d15" }}
                            className="h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] mt-4"
                        />
                    </div>
                ) : (
                    cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="cart-item flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-lg rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                {item.img ? (
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md mr-4"
                                    />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-200 rounded-md mr-4 flex items-center justify-center">
                                        <p className="text-sm">No Image</p>
                                    </div>
                                )}
                                <div>
                                    <h2 className="font-semibold text-base sm:text-lg">{item.name}</h2>
                                    <p className="text-gray-600 text-sm">
                                        Price: <span className="text-[#f07d15] font-semibold">${item.price}</span>
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Quantity: <span className="text-[#f07d15] font-semibold">{item.quantity}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <button
                                    className="px-3 py-1 text-sm sm:text-base bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    +
                                </button>
                                <button
                                    className="px-3 py-1 text-sm sm:text-base bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => dispatch(removeFromCart(item))}
                                >
                                    -
                                </button>
                                <button
                                    className="px-3 py-1 text-sm sm:text-base bg-gray-500 text-white rounded hover:bg-gray-600"
                                    onClick={() => dispatch(deleteItem(item))}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Total Bill + Payment */}
            {cartItems.length > 0 && (
                <div className="total-bill mt-8 text-center px-4">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f07d15]">
                        Total Bill: ${totalBill.toFixed(2)}
                    </h2>
                    <button
                        className="bg-[#f07d15] text-white px-4 py-2 mt-4 rounded hover:bg-[#8A4408] transition-colors duration-300 ease-in-out text-sm sm:text-base"
                        onClick={() => setProceedToPayment(true)}
                    >
                        Proceed to Payment
                    </button>

                    <div className="mt-6">
                        {proceedToPayment && <Payment totalBill={totalBill} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
