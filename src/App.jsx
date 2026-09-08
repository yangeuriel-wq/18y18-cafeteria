import { useState } from "react";
import "./App.css";

const menuItems = [
  // CAFÉ
  {
    id: 1,
    category: "cafe",
    name: "Affogato",
    description: "Shot de café espresso con una bola de helado de la casa.",
    size: "1 oz.",
    price: 55,
    image: "/menu/affogato.jpg",
  },
  {
    id: 2,
    category: "cafe",
    name: "Americano de Máquina",
    description: "Shot de café espresso de especialidad con agua caliente.",
    size: "12 oz.",
    price: 45,
    image: "/menu/americano.jpg",
  },
  {
    id: 3,
    category: "cafe",
    name: "Cappuccino",
    description:
      "Combinación de café espresso con leche cremada a tu elección (entera o deslactosada) y una cubierta espumosa.",
    size: "12 oz.",
    price: 60,
    image: "/menu/cappuccino.jpg",
  },
  {
    id: 4,
    category: "cafe",
    name: "Moka",
    description:
      "Salsa de chocolate semi-amargo + espresso + leche cremada (entera o deslactosada).",
    size: "12 oz.",
    price: 75,
    image: "/menu/moka.jpg",
  },
  {
    id: 5,
    category: "cafe",
    name: "Caramel Macchiato",
    description:
      "Salsa de caramelo + espresso + leche fría (entera o deslactosada) + hielos.",
    size: "16 oz.",
    price: 80,
    image: "/menu/caramel-macchiato.jpg",
  },

  // ESPECIALES
  {
    id: 6,
    category: "especiales",
    name: "Chocolate con Leche",
    description:
      "Combinación de chocolate especial de la casa con leche cremada a tu elección (entera o deslactosada).",
    size: "12 oz.",
    price: 70,
    image: "/menu/chocolate.jpg",
  },
  {
    id: 7,
    category: "especiales",
    name: "Horchata",
    description:
      "Bebida de horchata con un toque de nuez de macadamia, canela y leche cremada a tu elección.",
    size: "12 oz.",
    price: 75,
    image: "/menu/horchata.jpg",
  },
  {
    id: 8,
    category: "especiales",
    name: "Taro",
    description:
      "Bebida a base de raíz de taro con leche cremada (entera o deslactosada).",
    size: "12 oz.",
    price: 75,
    image: "/menu/taro.jpg",
  },
  {
    id: 9,
    category: "especiales",
    name: "Chai Latte",
    description:
      "Mezcla de especias con leche cremada (entera o deslactosada).",
    size: "12 oz.",
    price: 75,
    image: "/menu/chai.jpg",
  },
  {
    id: 10,
    category: "especiales",
    name: "Matcha Latte",
    description:
      "Té verde molido de origen japonés + leche cremada (entera o deslactosada).",
    size: "12 oz.",
    price: 75,
    image: "/menu/matcha.jpg",
  },

  // TISANAS
  {
    id: 11,
    category: "tisanes",
    name: "Tisana",
    description:
      "Infusión frutal con frutos deshidratados y agua caliente.",
    size: "12 oz.",
    price: 65,
    image: "/menu/tisana.jpg",
  },

  // FRÍAS
  {
    id: 12,
    category: "frias",
    name: "Limonada o Naranjada",
    description: "Bebida natural preparada al momento.",
    size: "12 oz.",
    price: 50,
    image: "/menu/limonada.jpg",
  },
  {
    id: 13,
    category: "frias",
    name: "Soda Italiana",
    description: "Popping pearls + sabor + agua mineral.",
    size: "16 oz.",
    price: 85,
    image: "/menu/soda-italiana.jpg",
  },
  {
    id: 14,
    category: "frias",
    name: "Granizados",
    description:
      "Pulpa de fruta + agua fría + hielo frappé, acompañado con chamoy, picafresa, skwinkles y tarugo.",
    size: "16 oz.",
    price: 80,
    image: "/menu/granizado.jpg",
  },
  {
    id: 15,
    category: "frias",
    name: "Smoothie Frutal",
    description: "Pulpa de fruta + agua fría + hielo frappé.",
    size: "16 oz.",
    price: 75,
    image: "/menu/smoothie.jpg",
  },

  // PANADERÍA
  {
    id: 16,
    category: "panaderia",
    name: "Croissant Natural",
    description: "Croissant artesanal de mantequilla.",
    price: 25,
    image: "/menu/croissant-natural.jpg",
  },
  {
    id: 17,
    category: "panaderia",
    name: "Croissant Nutella",
    description: "Croissant artesanal relleno de Nutella.",
    price: 34,
    image: "/menu/croissant-nutella.jpg",
  },
  {
    id: 18,
    category: "panaderia",
    name: "Croissant Pistache",
    description: "Croissant artesanal con pistache.",
    price: 38,
    image: "/menu/croissant-pistache.jpg",
  },
  {
    id: 19,
    category: "panaderia",
    name: "Croissant Chocolate Turin",
    description: "Croissant artesanal con chocolate Turin.",
    price: 33,
    image: "/menu/croissant-chocolate.jpg",
  },
  {
    id: 20,
    category: "panaderia",
    name: "Croissant Dulce de Leche y Almendra",
    description: "Croissant con dulce de leche y almendra.",
    price: 34,
    image: "/menu/croissant-dulce-leche.jpg",
  },
  {
    id: 21,
    category: "panaderia",
    name: "Chocolatín",
    description: "Panadería francesa artesanal con chocolate.",
    price: 32,
    image: "/menu/chocolatin.jpg",
  },
  {
    id: 22,
    category: "panaderia",
    name: "Cruffin Crema de Café",
    description: "Cruffin artesanal relleno de crema de café.",
    price: 32,
    image: "/menu/cruffin.jpg",
  },
  {
    id: 23,
    category: "panaderia",
    name: "Danes de Queso y Blueberry",
    description: "Dane artesanal con queso y blueberry.",
    price: 35,
    image: "/menu/danes.jpg",
  },
  {
    id: 24,
    category: "panaderia",
    name: "Monkey Bread con Chocolate y Plátano",
    description: "Pan dulce artesanal con chocolate y plátano.",
    price: 34,
    image: "/menu/monkey-bread.jpg",
  },
  {
    id: 25,
    category: "panaderia",
    name: "Concha Vainilla o Chocolate",
    description: "Concha tradicional disponible en vainilla o chocolate.",
    price: 16,
    image: "/menu/concha.jpg",
  },
  {
    id: 26,
    category: "panaderia",
    name: "Rol de Canela, Arándano y Nuez",
    description: "Rol artesanal de canela con arándano y nuez.",
    price: 32,
    image: "/menu/rol-canela.jpg",
  },
  {
    id: 27,
    category: "panaderia",
    name: "Croissant de Almendra",
    description: "Croissant artesanal con almendra.",
    price: 42,
    image: "/menu/croissant-almendra.jpg",
  },
  {
    id: 28,
    category: "panaderia",
    name: "Croissant de Frutos Rojos y Matcha",
    description: "Croissant artesanal con frutos rojos y matcha.",
    price: 38,
    image: "/menu/croissant-matcha.jpg",
  },
  {
    id: 29,
    category: "panaderia",
    name: "Croissant de Strudel de Manzana",
    description: "Croissant artesanal inspirado en el strudel de manzana.",
    price: 35,
    image: "/menu/croissant-manzana.jpg",
  },
  {
    id: 30,
    category: "panaderia",
    name: "Rol de Guayaba y Queso Crema",
    description: "Rol artesanal de guayaba y queso crema.",
    price: 38,
    image: "/menu/rol-guayaba.jpg",
  },
  {
    id: 31,
    category: "panaderia",
    name: "Muffin de Ate con Queso",
    description: "Muffin artesanal de ate con queso.",
    price: 45,
    image: "/menu/muffin-ate.jpg",
  },
  {
    id: 32,
    category: "panaderia",
    name: "Muffin de Limón con Poppy Seeds Glaseado",
    description: "Muffin de limón con semillas de amapola y glaseado.",
    price: 45,
    image: "/menu/muffin-limon.jpg",
  },
  {
    id: 33,
    category: "panaderia",
    name: "Muffin de Manzana con Nuez y Crumble",
    description: "Muffin de manzana con nuez y crumble.",
    price: 50,
    image: "/menu/muffin-manzana.jpg",
  },
  {
    id: 34,
    category: "panaderia",
    name: "Muffin de Arándanos, Blueberry y Chocolate Blanco",
    description: "Muffin de arándanos, blueberry y chocolate blanco.",
    price: 50,
    image: "/menu/muffin-blueberry.jpg",
  },
  {
    id: 35,
    category: "panaderia",
    name: "Strudel de Manzana con Nuez",
    description: "Strudel artesanal de manzana con nuez.",
    size: "150 g.",
    price: 55,
    image: "/menu/strudel.jpg",
  },

  // OPCIONALES
  {
    id: 36,
    category: "opcionales",
    name: "Carajillo",
    description: "Espresso de especialidad + Licor 43.",
    size: "4 oz.",
    price: 150,
    image: "/menu/carajillo.jpg",
  },
  {
    id: 37,
    category: "opcionales",
    name: "Fancy Latte",
    description:
      "Espresso de especialidad + leche cremada + shot de Baileys.",
    size: "8 oz.",
    price: 135,
    image: "/menu/fancy-latte.jpg",
  },
  {
    id: 38,
    category: "opcionales",
    name: "Mimosa",
    description: "Vino espumoso + jugo de naranja.",
    size: "6 oz.",
    price: 135,
    image: "/menu/mimosa.jpg",
  },
  {
    id: 39,
    category: "opcionales",
    name: "Bellini",
    description: "Vino espumoso + néctar de durazno.",
    size: "6 oz.",
    price: 135,
    image: "/menu/bellini.jpg",
  },
];

const categories = [
  { id: "todos", name: "Todo" },
  { id: "cafe", name: "Café" },
  { id: "especiales", name: "Especiales" },
  { id: "tisanes", name: "Tisanas" },
  { id: "frias", name: "Bebidas frías" },
  { id: "panaderia", name: "Panadería" },
  { id: "opcionales", name: "Opcionales" },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredItems =
    activeCategory === "todos"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const featured = menuItems.slice(0, 4);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <button className="logo" onClick={() => scrollTo("inicio")}>
            18<span>&</span>18
          </button>

          <nav className="nav">
            <button onClick={() => scrollTo("inicio")}>Inicio</button>
            <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
            <button onClick={() => scrollTo("menu")}>Menú</button>
            <button onClick={() => scrollTo("galeria")}>Galería</button>
            <button onClick={() => scrollTo("ubicacion")}>Ubicación</button>
            <button onClick={() => scrollTo("contacto")}>Contacto</button>
          </nav>

          <button
            className="header-menu"
            onClick={() => scrollTo("menu")}
          >
            VER MENÚ <span>↗</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>

        <section id="inicio" className="hero">
          <div className="hero-image"></div>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">CAFÉ · PANADERÍA · EXPERIENCIAS</p>

            <h1>
              El café
              <br />
              también es
              <br />
              <em>un momento.</em>
            </h1>

            <p className="hero-text">
              Un espacio para bajar el ritmo, disfrutar un buen café
              y dejar que el momento se quede contigo.
            </p>

            <button
              className="hero-button"
              onClick={() => scrollTo("menu")}
            >
              DESCUBRIR MENÚ <span>↗</span>
            </button>
          </div>

          <div className="hero-bottom">
            <span>PUEBLA · MÉXICO</span>
            <span>SCROLL ↓</span>
          </div>

          <div className="hero-mark">18 — 18</div>
        </section>

        {/* INTRO */}
        <section id="nosotros" className="intro section">
          <div className="section-number">01</div>

          <div className="intro-grid">
            <div>
              <p className="eyebrow dark">NUESTRA ESENCIA</p>
              <h2>
                Hecho para
                <br />
                <em>quedarte.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                En 18&18 creemos que una cafetería es mucho más que
                una bebida. Es una pausa, una conversación, una reunión
                o simplemente ese momento que decides regalarte.
              </p>

              <p>
                Seleccionamos café de especialidad, panadería artesanal
                y bebidas pensadas para acompañar cada visita.
              </p>

              <button
                className="text-button"
                onClick={() => scrollTo("menu")}
              >
                CONOCE NUESTRO MENÚ <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="featured section">
          <div className="section-top">
            <div>
              <p className="eyebrow dark">PARA EMPEZAR</p>
              <h2>Favoritos de la casa</h2>
            </div>

            <span className="section-index">02 / 07</span>
          </div>

          <div className="featured-grid">
            {featured.map((item, index) => (
              <article
                className={`featured-card card-${index + 1}`}
                key={item.id}
              >
                <div className="featured-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span>0{index + 1}</span>
                </div>

                <div className="featured-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>

                  <strong>${item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <div className="statement-image"></div>

          <div className="statement-content">
            <p className="eyebrow">UNA PAUSA BIEN HECHA</p>
            <h2>
              Tómate
              <br />
              el <em>tiempo.</em>
            </h2>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="menu-section section">
          <div className="section-number">03</div>

          <div className="menu-heading">
            <div>
              <p className="eyebrow dark">NUESTRO MENÚ</p>
              <h2>
                Algo para
                <br />
                <em>cada momento.</em>
              </h2>
            </div>

            <p className="menu-intro">
              Café de especialidad, bebidas frías, creaciones de la
              casa y panadería artesanal.
            </p>
          </div>

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id ? "active" : ""
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-list">
            {filteredItems.map((item) => (
              <article className="menu-item" key={item.id}>
                <div className="menu-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="menu-item-number">
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className="menu-item-content">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    {item.size && (
                      <small>{item.size}</small>
                    )}
                  </div>

                  <strong>${item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BIG IMAGE */}
        <section className="big-image-section">
          <div className="big-image"></div>

          <div className="big-image-caption">
            <span>18&18</span>
            <p>CAFÉ · PANADERÍA · EXPERIENCIAS</p>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="gallery section">
          <div className="section-number">04</div>

          <div className="section-top">
            <div>
              <p className="eyebrow dark">EL ESPACIO</p>
              <h2>Un lugar para disfrutar.</h2>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-image gallery-one"></div>
            <div className="gallery-image gallery-two"></div>
            <div className="gallery-image gallery-three"></div>
            <div className="gallery-image gallery-four"></div>
            <div className="gallery-image gallery-five"></div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews section">
          <div className="section-number">05</div>

          <p className="eyebrow dark">LO QUE DICEN DE NOSOTROS</p>

          <div className="review">
            <span className="quote">“</span>

            <blockquote>
              Un lugar para desconectarte un rato, tomar un buen café
              y disfrutar de algo rico. Todo se siente cuidado hasta
              el último detalle.
            </blockquote>

            <div className="review-author">
              <span></span>
              <p>VISITA 18&18</p>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="ubicacion" className="location">
          <div className="location-image"></div>

          <div className="location-content">
            <div className="section-number light">06</div>

            <p className="eyebrow">VISÍTANOS</p>

            <h2>
              Nos vemos
              <br />
              <em>en 18&18.</em>
            </h2>

            <div className="address">
              <p>Calle 5 Oriente 400</p>
              <p>San Juan, Puebla</p>
              <p>México</p>
            </div>

            <button
              className="light-button"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Calle+5+Oriente+400+Puebla",
                  "_blank"
                )
              }
            >
              CÓMO LLEGAR <span>↗</span>
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="contact section">
          <div className="section-number">07</div>

          <div className="contact-grid">
            <div>
              <p className="eyebrow dark">HABLEMOS</p>

              <h2>
                ¿Nos
                <br />
                <em>vemos?</em>
              </h2>
            </div>

            <div className="contact-info">
              <p>
                Síguenos, escríbenos o simplemente ven a compartir
                un momento con nosotros.
              </p>

              <div className="contact-links">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Instagram <span>↗</span>
                </a>

                <a href="#" onClick={(e) => e.preventDefault()}>
                  Facebook <span>↗</span>
                </a>

                <a href="mailto:hola@18y18.com">
                  hola@18y18.com <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">18&18</div>

          <div className="footer-links">
            <button onClick={() => scrollTo("inicio")}>Inicio</button>
            <button onClick={() => scrollTo("menu")}>Menú</button>
            <button onClick={() => scrollTo("galeria")}>Galería</button>
            <button onClick={() => scrollTo("ubicacion")}>
              Ubicación
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>18&18 © 2026</span>
          <span>CAFÉ · PANADERÍA · EXPERIENCIAS</span>
          <span>PUEBLA · MÉXICO</span>
        </div>
      </footer>

    </div>
  );
}

export default App;