import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>
          Maruti PSCC Poles Industries specializes in manufacturing durable and
          reliable PSCC poles for industrial and infrastructure projects.
        </p>
      </section>
      <Footer />
    </>
  );
}
