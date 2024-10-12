// app/menu/pizza/page.js
"use client"
import Carousel from "@/app/carousel";
import Header from "@/components/Header";

const Pizza = () => {
  return (
    <><Header></Header>
      <Carousel />
      <div className="max-w-6xl mx-auto p-4 " id="pizza">
        <h1 className="text-3xl font-bold text-center my-6">Pizzas</h1>
        <ul className="list-disc pl-5">
          <li>Margherita Pizza - $10.99</li>
          <li>Pepperoni Pizza - $11.99</li>
          <li>BBQ Chicken Pizza - $12.99</li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto p-4 " id="pasta">
        <h1 className="text-3xl font-bold text-center my-6">Pastas</h1>
        <ul className="list-disc pl-5">
          <li>Margherita Pizza - $10.99</li>
          <li>Pepperoni Pizza - $11.99</li>
          <li>BBQ Chicken Pizza - $12.99</li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto p-4 " id="parmi">
        <h1 className="text-3xl font-bold text-center my-6">Parmis</h1>
        <ul className="list-disc pl-5">
          <li>Margherita Pizza - $10.99</li>
          <li>Pepperoni Pizza - $11.99</li>
          <li>BBQ Chicken Pizza - $12.99</li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto p-4 " id="shake">
        <h1 className="text-3xl font-bold text-center my-6">Crazy Shakes & Gelatos </h1>
        <ul className="list-disc pl-5">
          <li>Margherita Pizza - $10.99</li>
          <li>Pepperoni Pizza - $11.99</li>
          <li>BBQ Chicken Pizza - $12.99</li>
        </ul>
      </div>

    </>
  );
};

export default Pizza;
