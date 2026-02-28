import Footer from "../components/Footer";
import "./Products.css";

export default function Products() {
  return (
    <>
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Standard PSCC Poles</h3>
            <p>Durable poles suitable for general infrastructure projects.</p>
          </div>
          <div className="product-card">
            <h3>Heavy Duty PSCC Poles</h3>
            <p>Designed for industrial and high-load applications.</p>
          </div>
          <div className="product-card">
            <h3>Custom Solutions</h3>
            <p>Tailored PSCC poles for specialized requirements.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
