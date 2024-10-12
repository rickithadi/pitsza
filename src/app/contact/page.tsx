
// pages/contact.js

"use client"
import Carousel from "@/app/carousel";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <div className=" flex justify-center  bg-orange h-screen">
        <div className="bg-orange  rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-lg text-white">
            <span className="font-semibold">Address:</span> Jl. Sunset Road X No.168 Blok A-B, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia
          </p>
          <p className="text-lg text-white">
            <span className="font-semibold">Phone:</span> +6287847101222

          </p>

          <p className="text-lg text-white">
            <span className="font-semibold">Opening Hours:</span> Mon - Fri: 10:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </>
  );
}
