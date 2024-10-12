'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';


import { useState } from 'react';
import Carousel from '@/app/carousel';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div>
      <Head>
        <title>Bake & Shake</title>
        <meta name="description" content="Debonairs Pizza Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-black p-4 shadow-md z-60 flex">
        <div className="container mx-auto flex justify-between items-center z-50">
          <Image
            src="/images/logo-removebg.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {/* Icon for the Hamburger menu */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex md:space-x-6">

            <a href="#" className="text-white hover:underline">About Us</a>
            <a href="#" className="text-white hover:underline">Menu</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </nav>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-85 z-40 flex flex-col items-center justify-center pt-16 h-screen">

            <nav className="flex flex-col items-start p-4 space-y-2">
              <a href="#" className="text-white hover:underline">About Us</a>
              <a href="#" className="text-white hover:underline">Menu</a>
              <a href="#" className="text-white hover:underline">Contact</a>
            </nav>
          </div>
        )}
      </header>
      <Carousel></Carousel>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">

          <h3 className="text-3xl font-bold mb-8">Home of the Deep Dish</h3>
          <p>Amazing pizza is more than just food – it’s the centrepiece for gatherings with loved ones. From the Triple-Decker® Topped to the Real Deal there’s always something amazing to try on our pizza menu. It’s what makes us the fave pizza restaurant near you.

          </p>
          <button className="bg-yellow hover:bg-orange text-black font-bold py-3 px-6 rounded-full mt-4">
            Learn More About Bake & Shake
          </button>
          <h3 className="text-3xl font-bold m-8 ">Have a look at our amazing menus</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6  rounded">
              <h4 className="text-xl font-bold mb-4">Pizza</h4>
              <p>Delight in our range of mouth-watering pizzas with various toppings.</p>
            </div>
            <div className="bg-white p-6  rounded">
              <h4 className="text-xl font-bold mb-4">Sides</h4>
              <p>Add delicious sides to your meal for the perfect combo.</p>
            </div>
            <div className="bg-white p-6 rounded">
              <h4 className="text-xl font-bold mb-4">Desserts</h4>
              <p>Finish off with our indulgent desserts for a sweet treat.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/logo.jpg"
              alt="Family enjoying pizza"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold">The Amazing<br />DEBONAIRS PIZZA<br />Story</h2>
            <p className="text-lg md:text-xl">
              The Debonairs Pizza menu has been bringing families together, over something amazing to share, since 1991. It's how we became the fave pizza restaurant near you. With so many ways to order, getting your amazing pizza delivery is always just a call or click away. And we always deliver in style.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full mt-4">
              Learn More About Bake & Shake
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/images/logo.jpg" alt="Pizza Delivery" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold mb-2">AMAZING PIZZA DELIVERY</h3>
            <p className="text-sm mb-4">When it comes to amazing pizza, we always deliver! With so many ways to order, ordering your fave pizzas for delivery has never been easier!</p>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600">ORDER ONLINE FOR DELIVERY</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/images/logo.jpg" alt="Order Pizza" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold mb-2">AMAZING WAYS TO ORDER PIZZA ONLINE</h3>
            <p className="text-sm mb-4">Delivery or collect – we've got more ways to order pizza online. Let’s just say it’s a love letter to your taste buds.</p>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600">FIND YOUR WAY TO ORDER</button>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Image Section */}
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold">The Amazing<br />DEBONAIRS PIZZA<br />Story</h2>
            <p className="text-lg md:text-xl">
              The Debonairs Pizza menu has been bringing families together, over something amazing to share, since 1991. It's how we became the fave pizza restaurant near you. With so many ways to order, getting your amazing pizza delivery is always just a call or click away. And we always deliver in style.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full mt-4">
              Learn More About Bake & Shake
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/logo.jpg"
              alt="Family enjoying pizza"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>


        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bake & Shake. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

