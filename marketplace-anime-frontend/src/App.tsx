
import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Figura de colección',
    category: 'Figuras',
    price: 899,
    image: 'figura1.jpg',
    color: '#49365e',
  },
  {
    id: 2,
    name: 'Manga edición especial',
    category: 'Mangas',
    price: 249,
    image: 'manga.jpg',
    color: '#69404e',
  },
  {
    id: 3,
    name: 'Peluche kawaii',
    category: 'Peluches',
    price: 399,
    image: 'peluche.jpg',
    color: '#59415f',
  },
  {
    id: 4,
    name: 'Llavero de colección',
    category: 'Accesorios',
    price: 129,
    image: 'llavero.jpg',
    color: '#354c67',
  },
]

function App() {
  const [cart, setCart] = useState<number[]>([])

  return (
    <div className="store">
      <header className="navbar">
        <a className="logo" href="#inicio">
          ✦ ANIME<span>VERSE</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#categorias">Categorías</a>
        </nav>

        <a className="cart" href="#productos">
          🛒 <span>Mi tienda ({cart.length})</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">✦ TU UNIVERSO ANIME ✦</span>

            <h1>
              Todo el anime que amas
              <br />
              <span>en un solo click.</span>
            </h1>

            <p>
              Encuentra tus personajes favoritos, coleccionables y
              productos únicos para verdaderos fans del anime.
            </p>

            <a className="primary-button" href="#productos">
              Explorar productos <span className="shuriken">✥</span>
            </a>

            <div className="hero-note">
              ✨ Encuentra tu próximo objeto favorito
            </div>
          </div>

          <div className="anime-orb">
            <div className="anime-ring ring-one" />
            <div className="anime-ring ring-two" />

            <div className="anime-core">
              <div className="pergamino-rodillo rodillo-arriba" />
              <span className="japanese-title">アニメ</span>
              <span className="japanese-subtitle">アニメの世界</span>
              <span className="anime-line" />
              <span className="anime-caption">ANIME UNIVERSE</span>
              <div className="pergamino-rodillo rodillo-abajo" />
            </div>

            <span className="anime-mark mark-one">✦</span>
            <span className="anime-mark mark-two">十</span>
            <span className="anime-mark mark-three">+</span>
          </div>
        </section>

        <section className="categories" id="categorias">
          <div>
            <span className="section-kicker">EXPLORA TU FANDOM</span>
            <h2>¿Qué estás buscando?</h2>
          </div>

          <div className="category-list">
            <a href="#productos">🧸 Figuras</a>
            <a href="#productos">📚 Mangas</a>
            <a href="#productos">🐱 Peluches</a>
            <a href="#productos">💖 Accesorios</a>
          </div>
        </section>

        <section className="products-section" id="productos">
          <div className="section-heading">
            <div>
              <span className="section-kicker">SELECCIÓN ESPECIAL</span>
              <h2>
                Favoritos del fandom <span>♡</span>
              </h2>
            </div>

            <span className="product-count">
              {products.length} productos
            </span>
          </div>

          <div className="product-grid">
            {products.map((product) => {
              const isAdded = cart.includes(product.id)

              return (
                <article className="product-card" key={product.id}>
                  <div
                    className="product-image"
                    style={{ backgroundColor: product.color }}
                  >
                   <img className="product-emoji"
                   src={product.image}
                   alt={product.name}/>
                    <span className="product-badge">DESTACADO</span>

                    <button
                      className="favorite-button"
                      aria-label={`Marcar ${product.name} como favorito`}
                      onClick={(event) => {
                        event.currentTarget.classList.toggle('is-favorite')
                      }}
                    >
                      ♡
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>

                    <div className="product-bottom">
                      <strong>
                        ${product.price.toLocaleString('es-MX')} MXN
                      </strong>

                      <button
                        className="add-button"
                        onClick={() => {
                          if (isAdded) {
                            setCart((previousCart) =>
                              previousCart.filter((id) => id !== product.id)
                            )
                          } else {
                            setCart((previousCart) => [
                              ...previousCart,
                              product.id,
                            ])
                          }
                        }}
                      >
                        {isAdded ? '− Quitar' : '+ Agregar'}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="community">
          <span>🌙 UN UNIVERSO HECHO PARA TI</span>
          <h2>Tu próxima obsesión está aquí.</h2>
          <p>Explora, descubre y encuentra productos que te encanten.</p>
          <a href="#productos">Descubrir colección →</a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#inicio">
          ✦ ANIME<span>VERSE</span>
        </a>

        <p>Hecho con ♡ para la comunidad anime.</p>
        <span>© 2026 AnimeVerse · Proyecto escolar</span>
      </footer>
    </div>
  )
}

export default App
