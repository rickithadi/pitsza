// app/menu/pizza/page.js
"use client"
import Link from "next/link";

import Header from "@/components/Header";

import Carousel from "@/app/carousel";
type Item = { name: string, desc: string, p1: number, p2: number, p3: number }
const pizzaList = [
  {
    name: 'Chicken Supreme', desc: 'shokhouse chicken, chicken sausage,mushroom, red/ green capsicum, onion, diced tomato, black olives, mozzarella cheese.tomato or bbq sauce.', p1: 90, p2: 110, p3: 125
  },
  {
    name: 'Sunset Supreme',
    desc: 'Pepperoni, ground beef, sausage, Beef Belly bacon,BBQ sauce.".', p1: 110, p2: 128, p3: 150
  },
  {
    name: 'Hawaiian',
    desc: 'Beef Ham, onion, fresh pineapple, beef belly bacon, • mozzarella cheese. Tomato or BBQ sauce.', p1: 100, p2: 110, p3: 125
  },
  {
    name: 'Vegetarian',
    desc: 'Mushroom, diced tomato, Red/Green capsicum, Onion, black olives, mozzarella cheese. Tomato orBBQ sauce.', p1: 65, p2: 80, p3: 95
  },
  {
    name: 'Peperoni Max',
    desc: 'Pepperoni, mozzarella cheese. Tomato or BBQ.',
    p1: 80,
    p2: 95,
    p3: 110
  },
  {
    name: 'Mexican Meat Lovers',
    desc: 'Chorizo sausage, ground beef, peperoni, beet belly bacon, onion, jalapeno, taco sprinkle, salsa, chili flakes, mozzarella cheese. Tomato or BBQ sauce.',
    p1: 90,
    p2: 110,
    p3: 125
  },
  {
    name: 'Chicken BBQ',
    desc: 'Smokehouse BBQ Chicken, chicken sausage, Beef belly bacon, onion, mozzarella cheese. Tomato or BBQ sauce.',
    p1: 110,
    p2: 128,
    p3: 150
  }, {
    name: 'Crazy Hot Pants (The Ring Stinger)',
    desc: 'Pepperoni, hot salami, chorizo sausage, Beef belly bacon, Red/green capsicum, jalapeno, fine cut Birdseye chili, onion, mozzarella cheese, (Tomato,•Sambal, Samyang sauce blend) Only for the brave or crazy.',
    p1: 110,
    p2: 125,
    p3: 140
  }, {
    name: 'The Kitchen Sink',
    desc: 'Peperoni, salami, sausage, beef belly bacon, Red/green capsicum, onion, mushroom, mozzarella cheese. Tomato or BBQ sauce',
    p1: 90,
    p2: 110,
    p3: 125
  }, {
    name: 'Cheese & Garlic',
    desc: 'Lashings of Garlic butter, mozzarella cheese. Tomato cheese Diced tomato, mozzarella cheese. Tomato or BBQ sauce.',
    p1: 50,
    p2: 65,
    p3: 95
  }, {
    name: 'Tomato cheese',
    desc: 'Diced Tomato, mozzarella chese, Tomato or BBQ saucw',
    p1: 45,
    p2: 60,
    p3: 85
  },




]
const pastaList = [
  {
    name: 'Original',
    desc: 'Beef Bacon and Onion',
    p1: 75,
    p2: 0,
    p3: 0
  },
  {
    name: 'Chicken Supreme',
    desc: 'Smokehouse Chicken, Chicken sausage, mushroom, red/green capsicum, onion, diced tomato, black olives',
    p1: 90,
    p2: 0,
    p3: 0
  },
  {
    name: 'Sunset Supreme',
    desc: 'Pepperoni, ground beef, sausage, Beef Belly bacon, Mushroom,Red/Green Capsicum, onion, diced tomato. Black olives',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Vegetarian',
    desc: 'Mushroom, diced tomato, Red/Green capsicum, Onion, black olives, mozzarella cheese. Tomato or BBQ sauce',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Peperoni Max',
    desc: 'Pepperoni, mozzarella cheese',
    p1: 75,
    p2: 0,
    p3: 0
  },
  {
    name: 'Meat Lovers',
    desc: 'Pepperoni, Salami, Ground beef, sausage, beef ham',
    p1: 80,
    p2: 0,
    p3: 0
  },
  {
    name: 'Mexican Supreme ',
    desc: 'Red/green capsicum, onion, jalapeno, diced tomato, taco sprinkle, salsa, chilli flakes, mozzarella cheese',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Mexican meat lovers',
    desc: 'Chorizo sausage, ground beef, peperoni, beef belly bacon, onion, jalapeno, taco sprinkle, salsa, chili flakes, mozzarella cheese',
    p1: 80,
    p2: 0,
    p3: 0
  },
  {
    name: 'Chicken BBQ',
    desc: 'Smokehouse BBQ Chicken, chicken sausage. Beef belly bacon, onion, mozzarella cheese',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Crazy Hot Pants (The Ring Stinger)',
    desc: `Pepperoni, hot salami, chorizo sausage,
Beef belly bacon,
Red/green capsicum, jalapeno, fine cut Birdseye chili, onion mozzarella cheese (Tomato, Sambal, Samyang sauce blend)
Only for the brave or crazy.`,
    p1: 85,
    p2: 0,
    p3: 0
  },
  {
    name: 'The Kitchen Sink',
    desc: 'Peperoni, salami, sausage, beef belly bacon, Red/green capsicum, onion, mushroom, mozzarella cheese',
    p1: 80,
    p2: 0,
    p3: 0
  }
]

const parmiList = [
  {
    name: 'Sunset Supreme',
    desc: "Pepperoni, ground beef, sausage, Beef Belly bacon, Mushroom, Red/Green Capsicum, onion,' diced tomato, black olives",
    p1: 110,
    p2: 0,
    p3: 0
  },
  {
    name: 'Peperoni Max',
    desc: 'Pepperoni, mozzarella cheese',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Meat Lovers',
    desc: 'Pepperoni, Salami, Ground beef, sausage, beef ham',
    p1: 105,
    p2: 0,
    p3: 0
  },
  {
    name: 'Mexican Supreme N',
    desc: 'Red/green capsicum, onion, jalapeno, diced tomato, taco sprinkle, salsa, chilli flakes, mozzarella cheese',
    p1: 110,
    p2: 0,
    p3: 0
  },
  {
    name: 'Mexican meat lovers',
    desc: 'Chorizo sausage, ground beef, peperoni, beef belly bacon, onion, jalapeno, taco sprinkle, salsa, chili flakes, mozzarella cheese',
    p1: 105,
    p2: 0,
    p3: 0
  },
  {
    name: 'Crazy Hot Pants (The Ring Stinger)',
    desc: `Pepperoni, hot salami, chorizo sausage,
Beef belly bacon,
Red/green capsicum, jalapeno, fine cut Birdseye chili, onion mozzarella cheese (Tomato, Sambal, Samyang sauce blend)
Only for the brave or crazy.`,
    p1: 110,
    p2: 0,
    p3: 0
  },
  {
    name: 'The Kitchen Sink',
    desc: 'Peperoni, salami, sausage, beef belly bacon, Red/green capsicum, onion, mushroom, mozzarella cheese',
    p1: 110,
    p2: 0,
    p3: 0
  }
]
const shakeList = [
  {
    name: 'Oreo Shake',
    desc: "",
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Strawberry Shake',
    desc: '',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Salted Caramel Shake',
    desc: '',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Magnum Shake',
    desc: '',
    p1: 105,
    p2: 0,
    p3: 0
  },
  {
    name: 'Coffee Shake',
    desc: '',
    p1: 95,
    p2: 0,
    p3: 0
  },
  {
    name: 'Nutella',
    desc: ``,
    p1: 95,
    p2: 0,
    p3: 0
  }

]
function MenuTable({ itemList }: any) {
  const hideSize = itemList.some((item: any) => item.p2 == 0 || item.p3 == 0);

  return (
    <table className="table-auto w-full max-w-screen-md mx-auto">
      <thead>
        <tr className="py-2">
          <th></th>
          {!hideSize &&
            (<><th className='text-right'>M</th>
              <th className='text-right'>L</th>
              <th className='text-right'>XL</th>
            </>
            )
          }

          {hideSize && <th className='text-right'>Price</th>}

        </tr>
      </thead>
      <tbody>
        {itemList.length > 0 && itemList.map((item: Item, index: number) => (
          <tr key={index}>
            <td><h2>{item.name} </h2>
              <p>
                {item.desc}
              </p>
            </td>
            <td className='text-right align-top'>{item.p1}K</td>
            {!hideSize && <td className='text-right align-top'>{item.p2}K</td>}
            {!hideSize && <td className='text-right align-top'>{item.p3}K</td>}
          </tr>
        ))}

      </tbody>
    </table>
  )
}


const Menu = () => {
  return (
    <>
      <Header></Header>

      <Carousel />
      <div className="bg-orange w-full p-4 shadow-md flex">

        <div className="container mx-auto flex justify-between items-center z-50">
          <h4 className="text-white hover:text-yellow">
            <Link href="#pizza" >
              Pizzas
            </Link>
          </h4>
          <h4 className="text-white hover:text-yellow">
            <Link href="#pasta" >

              Pastas

            </Link>
          </h4>
          <h4 className="text-white hover:text-yellow">
            <Link href="#parmi" >

              Parmis

            </Link>
          </h4>
          <h4 className="text-white hover:text-yellow">
            <Link href="#shake" >

              Shakes
            </Link>
          </h4>
        </div>
      </div>

      <div className=" mx-auto p-4 " id="pizza">
        <h1 className="text-3xl font-bold text-center my-6">Pizzas</h1>

        <MenuTable itemList={pizzaList} sizes />
      </div>
      <div className=" mx-auto p-4 " id="pasta">
        <h1 className="text-3xl font-bold text-center my-6">Pastas</h1>

        <MenuTable itemList={pastaList} />
      </div>

      <div className=" mx-auto p-4 " id="parmi">
        <h1 className="text-3xl font-bold text-center my-6">Parmis</h1>

        <MenuTable itemList={parmiList} />
      </div>
      <div className=" mx-auto p-4 " id="shake">
        <h1 className="text-3xl font-bold text-center my-6">Crazy Shakes & Gelatos </h1>

        <MenuTable itemList={shakeList} />
      </div>
    </>

  );
};

export default Menu;


