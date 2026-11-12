import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { usePrice } from "./Usecontext";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: parseFloat(price),
      description: description.trim() || "No description provided.",
      image: image.trim() || "public/Laptop 13.jpg",
      isAvailable,
    };

    onAddProduct(newProduct);

    setName("");
    setPrice("");
    setDescription("");
    setImage("");
    setIsAvailable(true);
  }

  return (
    <div className="col-12 mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="h5 mb-3">Add New Product</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., Framework Laptop 13"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="e.g., 999.99"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="col-md-5">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="public/Laptop 13.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="col-md-9">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-md-3 d-flex align-items-end">
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isAvailableCheck"
                  checked={isAvailable}
                  onChange={(e) => setIsAvailable(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="isAvailableCheck">
                  In Stock
                </label>
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Create and Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Market({ cart, addToCart }) {
  const { currency } = usePrice();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Framework Laptop 13 (Intel® Core™ Ultra Series 1)",
      price: 1099,
      description: "Thin, light, and modular 13.5-inch laptop built for easy upgrades and repairs.",
      image: "public/Hp Omega 16 Max Ultra.webp",
      isAvailable: true,
    },
    {
      id: 2,
      name: "Framework Laptop 13 DIY Edition (AMD Ryzen™ 7040 Series)",
      price: 88000,
      description: "Customize your memory, storage, and operating system on a high-performance Ryzen 13-inch chassis.",
      image: "public/imege 1.jpg",
      isAvailable: true,
    },
    {
      id: 3,
      name: "Framework Laptop 16 (AMD Ryzen™ 7040 Series)",
      price: 65999,
      description: "High-performance 16-inch modular laptop with upgradeable graphics and swappable input modules.",
      image: "public/Laptop 13.jpg",
      isAvailable: true,
    },
    {
      id: 4,
      name: "Framework Laptop 16 DIY Edition (AMD Ryzen™ 7040 Series)",
      price: 33999,
      description: "Build-it-yourself 16-inch powerhouse featuring Expansion Bay support for discrete GPUs.",
      image: "public/Laptop12.jpg",
      isAvailable: false,
    },
    {
      id: 5,
      name: "public/Framework Laptop 16 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
      price: 90899,
      description: "Pro-grade modular workstation with customizable ports, high-refresh display, and expandable storage.",
      image: "public/Laptop 16.png",
      isAvailable: true,
    },
  ]);

  function handleAddProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="row g-3 align-items-stretch" aria-labelledby="products-heading">
      <AddProductForm onAddProduct={handleAddProduct} />

      <div className="col-12 d-flex justify-content-between align-items-center mb-3">
        <h2 id="products-heading" className="h2 mb-0">
          Laptops
        </h2>
        {cart.length > 0 && (
          <div className="badge bg-success fs-6 p-2">
            Cart: {cart.length} item(s) — Total: {currency}{cartTotal}
          </div>
        )}
      </div>

      {products.map((product) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-5" key={product.id}>
          <ProductCard product={product} />
          <button
            type="button"
            className="btn btn-primary mt-2 w-100"
            onClick={() => addToCart(product)}
            disabled={!product.isAvailable}
          >
            {product.isAvailable
              ? `Add to cart — ${currency}${product.price}`
              : "Out of stock"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Market;
