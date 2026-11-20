import { useState } from "react";
import "./App.css";

// ==========================================
// MENÚ COMPLETO 18•18 CAFÉ
// ==========================================

const menuItems = [
  // ========================================
  // CAFÉ
  // ========================================

  {
    id: 1,
    category: "cafe",
    name: "Affogato",
    description: "Shot de café espresso con una bola de helado de la casa.",
    size: "1 oz.",
    price: 50,
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
    description: "Espresso con leche cremada a tu elección.",
    size: "12 oz.",
    price: 60,
    image: "/menu/cappuccino.jpg",
  },
  {
    id: 4,
    category: "cafe",
    name: "Moka",
    description: "Espresso combinado con chocolate y leche cremosa.",
    size: "12 oz.",
    price: 75,
    image: "/menu/moka.jpg",
  },
  {
    id: 5,
    category: "cafe",
    name: "Caramel Macchiato",
    description: "Espresso con leche cremosa y un toque de caramelo.",
    size: "12 oz.",
    price: 80,
    image: "/menu/caramel-macchiato.jpg",
  },

  // ========================================
  // ESPECIALES
  // ========================================

  {
    id: 6,
    category: "especiales",
    name: "Chocolate con Leche",
    description: "Bebida cremosa de chocolate. Caliente: $75 · Frío: $70",
    size: "12 oz.",
    image: "/menu/chocolate.jpg",
  },
  {
    id: 7,
    category: "especiales",
    name: "Horchata",
    description:
      "Bebida cremosa con sabor tradicional de horchata. Caliente: $75 · Frío: $70",
    size: "12 oz.",
    image: "/menu/horchata.jpg",
  },
  {
    id: 8,
    category: "especiales",
    name: "Taro",
    description:
      "Bebida cremosa con el sabor característico del taro. Caliente: $75 · Frío: $70",
    size: "12 oz.",
    image: "/menu/taro.jpg",
  },
  {
    id: 9,
    category: "especiales",
    name: "Chai Latte",
    description:
      "Mezcla aromática de especias con leche cremosa. Caliente: $75 · Frío: $70",
    size: "12 oz.",
    image: "/menu/chai.jpg",
  },
  {
    id: 10,
    category: "especiales",
    name: "Matcha Latte",
    description:
      "Té verde matcha combinado con leche cremosa. Caliente: $75 · Frío: $70",
    size: "12 oz.",
    image: "/menu/matcha.jpg",
  },

  // ========================================
  // FRAPPÉS
  // ========================================

  {
    id: 11,
    category: "frappes",
    name: "Frappé Cappuccino",
    description: "Café cappuccino mezclado con leche y hielo.",
    size: "16 oz.",
    image: "/menu/frappe-cappuccino.jpg",
  },
  {
    id: 12,
    category: "frappes",
    name: "Frappé Moka",
    description: "Combinación de café, chocolate y hielo.",
    size: "16 oz.",
    image: "/menu/frappe-moka.jpg",
  },
  {
    id: 13,
    category: "frappes",
    name: "Frappé Caramelo",
    description: "Bebida helada de café con caramelo.",
    size: "16 oz.",
    image: "/menu/frappe-caramelo.jpg",
  },
  {
    id: 14,
    category: "frappes",
    name: "Frappé Chocolate",
    description: "Chocolate cremoso mezclado con hielo.",
    size: "16 oz.",
    image: "/menu/frappe-chocolate.jpg",
  },
  {
    id: 15,
    category: "frappes",
    name: "Frappé Horchata",
    description: "El sabor tradicional de horchata en una bebida helada.",
    size: "16 oz.",
    image: "/menu/frappe-horchata.jpg",
  },
  {
    id: 16,
    category: "frappes",
    name: "Frappé Taro",
    description: "Bebida helada con el delicioso sabor del taro.",
    size: "16 oz.",
    image: "/menu/frappe-taro.jpg",
  },
  {
    id: 17,
    category: "frappes",
    name: "Frappé Chai",
    description: "Mezcla de especias, leche y hielo.",
    size: "16 oz.",
    image: "/menu/frappe-chai.jpg",
  },
  {
    id: 18,
    category: "frappes",
    name: "Frappé Matcha",
    description: "Matcha con leche y hielo.",
    size: "16 oz.",
    image: "/menu/frappe-matcha.jpg",
  },

  // ========================================
  // TISANAS
  // ========================================

  {
    id: 19,
    category: "tisanas",
    name: "Tisana de Frutas",
    description: "Infusión aromática de frutas.",
    size: "12 oz.",
    price: 65,
    image: "/menu/tisana.jpg",
  },

  // ========================================
  // BEBIDAS FRÍAS
  // ========================================

  {
    id: 20,
    category: "frias",
    name: "Limonada",
    description: "Refrescante bebida preparada con limón.",
    size: "16 oz.",
    price: 50,
    image: "/menu/limonada.jpg",
  },
  {
    id: 21,
    category: "frias",
    name: "Naranjada",
    description: "Refrescante bebida preparada con naranja.",
    size: "16 oz.",
    price: 50,
    image: "/menu/naranjada.jpg",
  },
  {
    id: 22,
    category: "frias",
    name: "Soda Italiana",
    description: "Bebida refrescante con sabores frutales.",
    size: "16 oz.",
    price: 85,
    image: "/menu/soda-italiana.jpg",
  },
  {
    id: 23,
    category: "frias",
    name: "Granizado",
    description: "Bebida refrescante con hielo triturado.",
    size: "16 oz.",
    price: 80,
    image: "/menu/granizado.jpg",
  },
  {
    id: 24,
    category: "frias",
    name: "Smoothie",
    description: "Bebida frutal de textura suave y cremosa.",
    size: "16 oz.",
    price: 75,
    image: "/menu/smoothie.jpg",
  },

  // ========================================
  // PANADERÍA — CROISSANTS
  // ========================================

  {
    id: 25,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Natural",
    description: "Croissant artesanal de mantequilla.",
    price: 70,
    image: "/menu/croissant-natural.jpg",
  },
  {
    id: 26,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Nutella",
    description: "Croissant artesanal relleno de Nutella.",
    price: 70,
    image: "/menu/croissant-nutella.jpg",
  },
  {
    id: 27,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Pistache",
    description: "Croissant artesanal con crema de pistache.",
    price: 75,
    image: "/menu/croissant-pistache.jpg",
  },
  {
    id: 28,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Chocolate Turin",
    description: "Croissant relleno de chocolate.",
    price: 80,
    image: "/menu/croissant-chocolate.jpg",
  },
  {
    id: 29,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Dulce de Leche y Almendra",
    description: "Croissant con dulce de leche y almendras.",
    price: 75,
    image: "/menu/croissant-dulce-leche.jpg",
  },
  {
    id: 30,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Almendra",
    description: "Croissant artesanal con almendras.",
    price: 80,
    image: "/menu/croissant-almendra.jpg",
  },
  {
    id: 31,
    category: "panaderia",
    subcategory: "croissants",
    name: "Croissant Frutos Rojos y Matcha",
    description: "Croissant con frutos rojos y matcha.",
    price: 75,
    image: "/menu/croissant-frutos-rojos.jpg",
  },

  // ========================================
  // PANADERÍA — ROLES DE CANELA
  // ========================================

  {
    id: 32,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Guayaba y Queso Crema",
    description: "Rol artesanal con guayaba y queso crema.",
    price: 70,
    image: "/menu/rol-guayaba.jpg",
  },
  {
    id: 33,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Oreo",
    description: "Rol de canela con deliciosa cobertura de Oreo.",
    price: 75,
    image: "/menu/rol-oreo.jpg",
  },
  {
    id: 34,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Nutella",
    description: "Rol de canela con cremosa Nutella.",
    price: 75,
    image: "/menu/rol-nutella.jpg",
  },
  {
    id: 35,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Nutella con Nuez",
    description: "Rol de canela con Nutella y trocitos de nuez.",
    price: 75,
    image: "/menu/rol-nutella-nuez.jpg",
  },
  {
    id: 36,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Fresas",
    description: "Rol de canela acompañado de fresas.",
    price: 75,
    image: "/menu/rol-fresas.jpg",
  },
  {
    id: 37,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Fresas con Nutella",
    description: "Rol de canela con fresas frescas y Nutella.",
    price: 75,
    image: "/menu/rol-fresas-nutella.jpg",
  },
  {
    id: 50,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Lotus",
    description: "Rol de canela con crema de galleta Lotus.",
    price: 75,
    image: "/menu/rol-lotus.jpg",
  },
  {
    id: 51,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Mermelada de Frutos Rojos",
    description: "Rol de canela con mermelada de frutos rojos.",
    price: 75,
    image: "/menu/rol-frutos-rojos.jpg",
  },
  {
    id: 52,
    category: "panaderia",
    subcategory: "roles",
    name: "Rol de Canela Tradicional",
    description: "Clásico rol de canela con una deliciosa cobertura.",
    price: 75,
    image: "/menu/rol-tradicional.jpg",
  },

  // ========================================
  // PANADERÍA — MUFFINS
  // ========================================

  {
    id: 38,
    category: "panaderia",
    subcategory: "muffins",
    name: "Muffin de Ate con Queso",
    description: "Muffin con ate y queso.",
    price: 60,
    image: "/menu/muffin-ate.jpg",
  },
  {
    id: 39,
    category: "panaderia",
    subcategory: "muffins",
    name: "Muffin Limón Poppy Seeds",
    description: "Muffin de limón con semillas de amapola.",
    price: 60,
    image: "/menu/muffin-limon.jpg",
  },
  {
    id: 40,
    category: "panaderia",
    subcategory: "muffins",
    name: "Muffin Manzana con Nuez Pecana",
    description: "Muffin de manzana con nuez pecana.",
    price: 65,
    image: "/menu/muffin-manzana.jpg",
  },
  {
    id: 41,
    category: "panaderia",
    subcategory: "muffins",
    name: "Muffin Blueberry y Chocolate Blanco",
    description: "Muffin de arándanos con chocolate blanco.",
    price: 60,
    image: "/menu/muffin-blueberry.jpg",
  },

  // ========================================
  // PANADERÍA — OTROS PANES
  // ========================================

  {
    id: 42,
    category: "panaderia",
    subcategory: "otros",
    name: "Chocolatín",
    description: "Pan de hojaldre con chocolate.",
    price: 70,
    image: "/menu/chocolatin.jpg",
  },
  {
    id: 43,
    category: "panaderia",
    subcategory: "otros",
    name: "Cruffin Crema de Café",
    description: "Cruffin relleno de crema de café.",
    price: 77,
    image: "/menu/cruffin.jpg",
  },
  {
    id: 44,
    category: "panaderia",
    subcategory: "otros",
    name: "Danés Queso y Blueberry",
    description: "Pan danés con queso y blueberries.",
    price: 80,
    image: "/menu/danes.jpg",
  },
  {
    id: 45,
    category: "panaderia",
    subcategory: "otros",
    name: "Strudel de Manzana con Nuez",
    description: "Strudel artesanal de manzana y nuez.",
    size: "150 g.",
    price: 80,
    image: "/menu/strudel-manzana.jpg",
  },

  // ========================================
  // PANADERÍA — GALLETAS ESTILO NYC
  // ========================================

  {
    id: 53,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Red Velvet",
    description: "Galleta estilo NYC con el delicioso sabor de red velvet.",
    price: 40,
    image: "/menu/galleta-red-velvet.jpg",
  },
  {
    id: 54,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Double Chocolate",
    description: "Galleta estilo NYC con intenso sabor a chocolate.",
    price: 35,
    image: "/menu/galleta-double-chocolate.jpg",
  },
  {
    id: 55,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Chispas con Nutella",
    description: "Galleta con chispas de chocolate y Nutella.",
    price: 40,
    image: "/menu/galleta-chispas-nutella.jpg",
  },
  {
    id: 56,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Nutella Kataifi",
    description: "Galleta estilo NYC con Nutella y kataifi crujiente.",
    price: 50,
    image: "/menu/galleta-nutella-kataifi.jpg",
  },
  {
    id: 57,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Cookies and Cream",
    description: "Galleta con delicioso sabor a galletas y crema.",
    price: 45,
    image: "/menu/galleta-cookies-cream.jpg",
  },
  {
    id: 58,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Kinder Bueno",
    description: "Galleta estilo NYC con chocolate Kinder Bueno.",
    price: 50,
    image: "/menu/galleta-kinder-bueno.jpg",
  },
  {
    id: 59,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Lotus",
    description: "Galleta con el sabor característico de Lotus.",
    price: 55,
    image: "/menu/galleta-lotus.jpg",
  },
  {
    id: 60,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Cheesecake",
    description: "Galleta estilo NYC inspirada en el cheesecake.",
    price: 45,
    image: "/menu/galleta-cheesecake.jpg",
  },
  {
    id: 61,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Raffaello",
    description: "Galleta inspirada en los sabores de Raffaello.",
    price: 55,
    image: "/menu/galleta-raffaello.jpg",
  },
  {
    id: 62,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Ferrero",
    description: "Galleta con chocolate y avellana estilo Ferrero.",
    price: 60,
    image: "/menu/galleta-ferrero.jpg",
  },
  {
    id: 63,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Choco Nuez",
    description: "Galleta de chocolate con trocitos de nuez.",
    price: 45,
    image: "/menu/galleta-choco-nuez.jpg",
  },
  {
    id: 64,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Choco Coco",
    description: "Galleta con una deliciosa combinación de chocolate y coco.",
    price: 45,
    image: "/menu/galleta-choco-coco.jpg",
  },
  {
    id: 65,
    category: "panaderia",
    subcategory: "galletas",
    name: "Galleta Birthday Cookie",
    description: "Galleta estilo NYC con un toque dulce y festivo.",
    price: 40,
    image: "/menu/galleta-birthday-cookie.jpg",
  },

  // ========================================
  // BEBIDAS CON ALCOHOL
  // ========================================

  {
    id: 46,
    category: "opcionales",
    name: "Carajillo",
    description: "Bebida preparada con espresso y licor.",
    size: "4 oz.",
    price: 120,
    image: "/menu/carajillo.jpg",
  },
  {
    id: 47,
    category: "opcionales",
    name: "Fancy Latte",
    description: "Combinación especial de café y licor.",
    size: "8 oz.",
    price: 120,
    image: "/menu/fancy-latte.jpg",
  },
  {
    id: 48,
    category: "opcionales",
    name: "Mimosa",
    description: "Bebida con vino espumoso y jugo de naranja.",
    size: "6 oz.",
    price: 99,
    image: "/menu/mimosa.jpg",
  },
  {
    id: 49,
    category: "opcionales",
    name: "Bellini",
    description: "Bebida con vino espumoso y durazno.",
    size: "6 oz.",
    price: 99,
    image: "/menu/bellini.jpg",
  },
];

// ==========================================
// CATEGORÍAS PRINCIPALES
// ==========================================

const categories = [
  { id: "todos", name: "TODO" },
  { id: "cafe", name: "CAFÉ" },
  { id: "especiales", name: "ESPECIALES" },
  { id: "frappes", name: "FRAPPÉS" },
  { id: "tisanas", name: "TISANAS" },
  { id: "frias", name: "BEBIDAS FRÍAS" },
  { id: "panaderia", name: "PANADERÍA" },
  { id: "opcionales", name: "BEBIDAS CON ALCOHOL" },
];

// ==========================================
// SUBCATEGORÍAS DE PANADERÍA
// ==========================================

const bakeryCategories = [
  { id: "todos", name: "TODA LA PANADERÍA" },
  { id: "roles", name: "ROLES DE CANELA" },
  { id: "galletas", name: "GALLETAS NYC" },
  { id: "muffins", name: "MUFFINS" },
  { id: "croissants", name: "CROISSANTS" },
  { id: "otros", name: "OTROS PANES" },
];

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function App() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeBakeryCategory, setActiveBakeryCategory] = useState("todos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ========================================
  // FILTRAR PRODUCTOS
  // ========================================

  const filteredItems = menuItems.filter((item) => {
    if (
      activeCategory !== "todos" &&
      item.category !== activeCategory
    ) {
      return false;
    }

    if (
      activeCategory === "panaderia" &&
      activeBakeryCategory !== "todos" &&
      item.subcategory !== activeBakeryCategory
    ) {
      return false;
    }

    return true;
  });

  // ========================================
  // CAMBIAR CATEGORÍA
  // ========================================

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveBakeryCategory("todos");
  };

  // ========================================
  // IR A UNA SECCIÓN
  // ========================================

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ==================================
          HEADER
      ================================== */}

      <header className="header">
        <div className="header-container">

          <div
            className="logo"
            onClick={() => scrollTo("inicio")}
            style={{ cursor: "pointer" }}
          >
            <span className="logo-main">18•18</span>
            <span className="logo-sub">CAFÉ</span>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <nav className={mobileMenuOpen ? "nav nav-open" : "nav"}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>
              INICIO
            </a>
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>
              NOSOTROS
            </a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
              MENÚ
            </a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>
              GALERÍA
            </a>
            <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)}>
              UBICACIÓN
            </a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
              CONTACTO
            </a>
          </nav>

        </div>
      </header>

      {/* ==================================
          INICIO
      ================================== */}

      <section id="inicio" className="hero">

        <div className="hero-content">
          <span className="eyebrow">PUEBLA · MÉXICO</span>

          <h1>
            18•18
            <span>CAFÉ</span>
          </h1>

          <p className="hero-slogan">
            DOS FECHAS, UN DESTINO.
            <br />
            MUCHOS MOMENTOS POR COINCIDIR.
          </p>

          <p className="hero-description">
            Un espacio creado para disfrutar
            de un buen café, deliciosas bebidas
            y momentos inolvidables.
          </p>

          <button
            className="primary-button"
            onClick={() => scrollTo("menu")}
          >
            CONOCE NUESTRO MENÚ
          </button>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero.jpg"
            alt="18•18 Café"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

      </section>

      {/* ==================================
          NOSOTROS
      ================================== */}

      <section id="nosotros" className="about section">

        <div className="section-heading">
          <span className="eyebrow">NUESTRA ESENCIA</span>
          <h2>Dos fechas, un destino.</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              18•18 Café nació de una idea
              sencilla: crear un espacio
              especial en San Juan Tepulco,
              donde las personas puedan
              disfrutar de un café, una bebida
              favorita o un delicioso postre
              sin tener que trasladarse
              a otra comunidad.
            </p>

            <p>
              Su nombre representa dos fechas
              importantes que coinciden
              en un mismo número: el 18.
              Una historia que inspira
              la esencia de este proyecto.
            </p>

            <p>
              Más que una cafetería,
              buscamos ser un lugar donde
              las personas compartan
              conversaciones, sonrisas
              y momentos especiales.
            </p>
          </div>

          <div className="about-quote">
            <span>18•18</span>
            <h3>
              Let coffee
              <br />
              connect us.
            </h3>
            <p>Cada taza cuenta una historia.</p>
          </div>

        </div>

      </section>

      {/* ==================================
          FAVORITOS DE LA CASA
      ================================== */}

      <section className="featured section">

        <div className="section-heading">
          <span className="eyebrow">HECHO CON CARIÑO</span>
          <h2>Favoritos de la casa</h2>
          <p>Sabores especiales para disfrutar cada momento.</p>
        </div>

        <div className="featured-grid">
          {menuItems
            .filter((item) => [3, 5, 8].includes(item.id))
            .map((item) => (
              <article key={item.id} className="featured-card">

                <div className="featured-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="featured-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  {item.price != null && (
                    <strong>${item.price}</strong>
                  )}
                </div>

              </article>
            ))}
        </div>

      </section>

      {/* ==================================
          FRASE
      ================================== */}

      <section className="statement">
        <div className="statement-content">
          <span>18•18 CAFÉ</span>
          <h2>
            Un café,
            <br />
            mil momentos.
          </h2>
          <p>Hecho para compartir.</p>
        </div>
      </section>

      {/* ==================================
          MENÚ
      ================================== */}

      <section id="menu" className="menu-section section">

        <div className="section-heading">
          <span className="eyebrow">DESCUBRE NUESTROS SABORES</span>
          <h2>Nuestro Menú</h2>
          <p>
            Bebidas preparadas con cariño
            y deliciosos postres para acompañar.
          </p>
        </div>

        {/* CATEGORÍAS PRINCIPALES */}

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id ? "active" : ""
              }
              onClick={() => changeCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* SUBCATEGORÍAS DE PANADERÍA */}

        {activeCategory === "panaderia" && (
          <div className="categories bakery-categories">
            {bakeryCategories.map((category) => (
              <button
                key={category.id}
                className={
                  activeBakeryCategory === category.id ? "active" : ""
                }
                onClick={() => setActiveBakeryCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* LISTADO HORIZONTAL DE PRODUCTOS */}

        <div className="menu-list">
          {filteredItems.map((item) => (
            <article key={item.id} className="menu-item">

              <div className="menu-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="menu-item-number">
                {String(item.id).padStart(2, "0")}
              </div>

              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                {item.size && (
                  <span className="menu-item-size">
                    {item.size}
                  </span>
                )}
              </div>

              <div className="menu-item-price">
                {item.price != null && (
                  <strong>${item.price}</strong>
                )}
              </div>

            </article>
          ))}
        </div>

      </section>

      {/* ==================================
          GALERÍA
      ================================== */}

      <section id="galeria" className="gallery section">

        <div className="section-heading">
          <span className="eyebrow">NUESTROS MOMENTOS</span>
          <h2>Galería</h2>
          <p>
            Un pequeño vistazo a todo
            lo que hace especial a 18•18 Café.
          </p>
        </div>

        <div className="gallery-grid">
          {[1, 2, 3, 4, 5].map((number) => (
            <img
              key={number}
              src={`/images/galeria${number}.jpg`}
              alt={`Galería 18•18 Café ${number}`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ))}
        </div>

      </section>

      {/* ==================================
          UBICACIÓN
      ================================== */}

      <section id="ubicacion" className="location section">

        <div className="section-heading">
          <span className="eyebrow">VEN A CONOCERNOS</span>
          <h2>Nuestra Ubicación</h2>
        </div>

        <div className="location-card">
          <h3>18•18 Café</h3>

          <p>
            San Juan Tepulco,
            Acajete, Puebla.
          </p>

          <p>
            Un lugar para disfrutar
            de tu bebida favorita.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=San+Juan+Tepulco+Acajete+Puebla"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            VER EN GOOGLE MAPS
          </a>
        </div>

      </section>

      {/* ==================================
          CONTACTO
      ================================== */}

      <section id="contacto" className="contact section">

        <div className="section-heading">
          <span className="eyebrow">SIGAMOS CONECTADOS</span>
          <h2>Contáctanos</h2>
          <p>
            Síguenos en nuestras redes
            sociales y descubre nuestras novedades.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://www.instagram.com/eighteencafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            INSTAGRAM
          </a>
        </div>

      </section>

      {/* ==================================
          FOOTER
      ================================== */}

      <footer className="footer">

        <div className="footer-logo">
          18•18
          <span>CAFÉ</span>
        </div>

        <p>
          DOS FECHAS, UN DESTINO.
          <br />
          MUCHOS MOMENTOS POR COINCIDIR.
        </p>

        <p className="footer-location">
          San Juan Tepulco, Acajete, Puebla.
        </p>

        <div className="footer-bottom">
          © {new Date().getFullYear()} 18•18 Café.
          Todos los derechos reservados.
        </div>

      </footer>

    </div>
  );
}