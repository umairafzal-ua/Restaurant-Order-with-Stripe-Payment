import React from 'react'
import './Menu.css'
const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-12 mt-5">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-2xl font-semibold text-orange-400 mb-4 heading3">Company</h3>
      <ul>
        <li><a href="#" class="hover:text-orange-400">About Us</a></li>
        <li><a href="#" class="hover:text-orange-400">Contact Us</a></li>
        <li><a href="#" class="hover:text-orange-400">Reservation</a></li>
        <li><a href="#" class="hover:text-orange-400">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-orange-400">Terms & Condition</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-2xl font-semibold text-orange-400 mb-4 heading3">Contact</h3>
      <p><i class="fas fa-map-marker-alt mr-2"></i> 123 Street, New York, USA</p>
      <p><i class="fas fa-phone-alt mr-2"></i> +012 345 67890</p>
      <p><i class="fas fa-envelope mr-2"></i> info@example.com</p>
      <div class="mt-4 flex space-x-3">
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-youtube"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>


    <div>
      <h3 class="text-2xl font-semibold text-orange-400 mb-4 heading3">Opening</h3>
      <p>Monday - Saturday: 09AM - 09PM</p>
      <p>Sunday: 10AM - 08PM</p>
    </div>


    <div>
      <h3 class="text-2xl font-semibold text-orange-400 mb-4 heading3">Newsletter</h3>
      <p class="mb-4">Subscribe to our newsletter for the latest updates.</p>
      <div class="flex">
        <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l-lg focus:outline-none"/>
        <button class="bg-orange-400 text-white px-4 py-2 rounded-r-lg hover:bg-orange-500">SIGN UP</button>
      </div>
    </div>
  </div>

  <div class="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
    <p>© Your Site Name, All Rights Reserved. Designed by <a href="#" class="text-orange-400 hover:underline">HTML Codex</a></p>
    <p class="mt-2">Distributed by <a href="#" class="text-orange-400 hover:underline">Umair</a></p>
  </div>
</footer>

  )
}

export default Footer

