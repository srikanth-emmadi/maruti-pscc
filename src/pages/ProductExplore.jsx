import React, { useState } from "react";

function ProductExplorer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    // Example: mock API call (replace with your backend/API)
    const mockProducts = [
      { id: 1, name: "Laptop", price: 750 },
      { id: 2, name: "Smartphone", price: 500 },
      { id: 3, name: "Headphones", price: 120 },
    ];

    // Simulate network delay
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Explore Products</h1>
      <button onClick={fetchProducts}>Explore Products</button>

      {loading && <p>Loading products...</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductExplorer;
