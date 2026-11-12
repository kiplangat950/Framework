import { useState } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Footer from "./Components/Footer";
import CartDrawer from "./Components/CartDrawer";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights";
import { PriceProvider } from "./Components/Usecontext";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const removeFromCart = (indexToRemove) => {

    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <PriceProvider>
      <header className="app-header py-3 py-md-4">
        <NavBar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      </header>

      <main className="container app-main">
        <Hero />
        <Market cart={cart} addToCart={addToCart} />
        <Features />
        <Highlights />
      </main>

      <footer className="mt-4">
        <Footer />
      </footer>

      {}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </PriceProvider>
  );
}

export default App;
