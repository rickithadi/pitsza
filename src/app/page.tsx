'use client';

import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import Header from '@/components/Header';
import localFont from 'next/font/local';

const myFont = localFont({
  src:

    '../../public/fonts/mid.otf',
})



// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {

  return (

    <div className={myFont.className}>
      <Header />
      {/* <Carousel></Carousel> */}

      <video loop autoPlay muted width="1920" height="728" poster="" preload="auto"><source src="/images/menu.mp4" type="video/mp4" />Your browser does not support the <code>video</code> tag.</video>

      {/* Categories Section */}
      <section className="p-6   bg-[#d60115]">
        <div className="container mx-auto text-center">


          <img src='/images/banner.jpg' width="100%" />


          <p className={`${myFont.className} p-12 text-[#f7ed3b]`} >Amazing pizza is more than just food – it’s the centrepiece for gatherings with loved ones. From the Chicken Supreme to the Pepperoni Max there’s always something amazing to try on our pizza menu. It’s what makes us the fave pizza restaurant near you.

          </p>


          <Link href="/menu">
            <button className="bg-yellow hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full mt-4  hover:scale-110 p2 ">
              Our Menu
            </button>
          </Link>
        </div>
      </section>

      <div className="bg-orange text-white py-8" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-fit">
            <img
              src="/images/car3.jpg"
              alt="Family enjoying pizza"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:pl-8 p-2">
            <h2 className="text-4xl md:text-5xl font-bold">The Amazing<br />BAKE & SHAKE PIZZA<br />Story</h2>
            <p className="text-lg md:text-xl">
              The Bake & Shake Pizza menu has been bringing families together over something amazing to share for a long time. It's how we became the fave pizza restaurant near you. With so many ways to order, getting your amazing pizza delivery is always just a call or click away. And we always deliver in style.
            </p>
            <Link href="#about">
              <button className="bg-yellow hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full mt-4  hover:scale-110 ">
                Learn More About Bake & Shake
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/images/eat.jpg" alt="Pizza Delivery" className="w-full h-64 object-contain rounded-md mb-4" />
            <h3 className="text-2xl font-bold mb-2">All You Can Eat</h3>
            <p className="text-sm mb-4">When it comes to amazing pizza, we always deliver! With so many ways to order, ordering your fave pizzas for delivery has never been easier!</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/images/car2.jpg" alt="Order Pizza" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold mb-2">Amazing Pan Pizza</h3>
            <p className="text-sm mb-4">Delivery or collect – we've got more ways to order pizza online. Let’s just say it’s a love letter to your taste buds.</p>
          </div>
        </div>
      </section>

      <div className="bg-red text-white py-8" id='red'>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 p-2">
          {/* Image Section */}
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:pl-8 ">
            <h2 className="text-4xl md:text-5xl font-bold">The Amazing<br />Bake & Shake<br />Story</h2>
            <p className="text-lg md:text-xl">
              The Bake & Shake Pizza menu has been bringing families together, over something amazing to share, since 2024. It's how we became the fave pizza restaurant near you. With so many ways to order, getting your amazing pizza delivery is always just a call or click away. And we always deliver in style.
            </p>

          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/car2.jpg"
              alt="Family enjoying pizza"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>


        </div>
      </div>



      <section className='bg-orange ' id='menu'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10">


          <div className=" p-6  bg-gray-800 rounded-md z-10">
            <Link href='/menu#pizza'>
              <h4 className="text-xl font-bold mb-4 text-white">Pizza</h4>
              <p className='pb-4 text-white'>Delight in our range of mouth-watering pizzas with various toppings.</p>
              <img src='images/car1.jpg' className="w-full h-64 object-cover rounded-md mb-4 object:contain" />
              <button
                className="bg-orange  text-white font-bold py-3 px-6 rounded-full mt-4 float-end">
                Our Pizzas
              </button>
            </Link>
          </div>
          <div className=" p-6  bg-gray-800   rounded-md z-10">
            <Link href='/menu#pasta'>
              <h4 className="text-xl font-bold mb-4 text-white">Pastas</h4>
              <p className="pb-4 text-white">Indulge in our selection of delicious pastas.</p>
              <img src='images/pasta.jpg' className="w-full h-64 object-cover rounded-md mb-4 object-bottom" />
              <button className="bg-orange  text-white font-bold py-3 px-6 rounded-full mt-4 float-end">
                Our Pastas
              </button></Link>
          </div>
          <div className=" p-6   bg-gray-800  rounded-md z-10">

            <Link href='/menu#parmi'>
              <h4 className="text-xl font-bold mb-4 text-white">Parmis</h4>
              <p className="pb-4 text-white">Experience our delectable Parmis.</p>
              <img src='images/parmi.webp' className="w-full h-64 object-cover rounded-md mb-4 object-center " />
              <button className="bg-orange text-white font-bold py-3 px-6 rounded-full mt-4 float-end">
                Our Parmis
              </button>
            </Link>
          </div>
          <div className=" p-6 bg-gray-800 rounded-md  z-10">

            <Link href='/menu#shake'>
              <h4 className="text-xl font-bold mb-4 text-white">Crazy Shakes & Gelatos</h4>
              <p className="pb-4 text-white">Finish off with our indulgent desserts for a sweet treat.</p>
              <div className='flex'>
                <img src='images/shake.jpeg' className="w-1/2 h-64 object-contain rounded-md mb-4" />
                <img src='images/shake2.jpeg' className="w-1/2 h-64 object-contain rounded-md mb-4" />
              </div>
              <button className="bg-orange  text-white font-bold py-3 px-6 rounded-full mt-4 float-end">
                Our Shakes
              </button></Link>
          </div>
        </div>
      </section >



    </div >
  );
}

