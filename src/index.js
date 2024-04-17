import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  let numPizzas = pizzaData.length;
  // numPizzas = 0;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic ,all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <h3>We are Still working on our menu please come back later.</h3>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/spinaci.jpg"
        price="6"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut
            ? "Sold Out".toUpperCase()
            : Number(pizzaObj.price) + 3 + "$"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const currHour = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = open <= currHour && currHour <= close;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order open={open} close={close} />
      ) : (
        <p>
          We are happy to welcome you between {open}:00 and {close}:00
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We are closed now");
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        We are open from {open}:00 to {close}:00 Hours. Come visit us or Order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
