import { useState } from "react";
import Sidebar from "./Sidebar";


export default function NavBar({ cart, onOpenCart }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar bg-white border-bottom py-3 px-3">
      <button
        className="btn border-0 p-0 fs-3 text-dark shadow-none"
        onClick={() => setDrawerOpen(true)}
      >
        <i className="bi bi-list"></i>
      </button>

      <a href="#home" className="navbar-brand fw-bold fs-4 text-dark m-0">
        Framework
      </a>

      <div className="d-flex gap-3 fs-4">
        <a href="#account" className="text-dark">
          <i className="bi bi-person"></i>
        </a>

        {/* Make the bag a button that opens the cart */}
        <button
          className="btn border-0 p-0 fs-4 text-dark position-relative shadow-none"
          onClick={onOpenCart}
          aria-label="Open cart"
        >
          <i className="bi bi-bag"></i>
          {cart.length > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.6rem" }}
            >
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </nav>
  );
}
