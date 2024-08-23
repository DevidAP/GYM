import React from "react";
import './home.css'

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <p>Este es el blog de nuestro gimnasio, donde encontrarás recomendaciones y guías para mejorar tu rutina de ejercicios.</p>

      <div className="featured-article">
        <h2>Artículo Destacado</h2>
        <p>Los 5 Mejores Ejercicios para Fortalecer tu Core</p>
        <button>Leer más</button>
      </div>

      <div className="video-tutorial">
        <h3>Video Tutorial</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/exampleVideo"
          title="Tutorial de Ejercicio"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Aprende la forma correcta de hacer sentadillas.</p>
      </div>

      <div className="exercise-categories">
        <h3>Categorías de Ejercicios</h3>
        <ul>
          <li>Cardio</li>
          <li>Fuerza</li>
          <li>Flexibilidad</li>
          <li>Recuperación</li>
        </ul>
      </div>

      <div className="daily-tip">
        <h4>Consejo del Día</h4>
        <p>Recuerda estirar bien después de cada rutina para evitar lesiones.</p>
      </div>

      <div className="testimonials">
        <h3>Testimonios</h3>
        <blockquote>
          <p>"Gracias a este blog, he mejorado mi rendimiento en el gimnasio."</p>
          <cite>- Juan Pérez</cite>
        </blockquote>
      </div>


    </div>
  );
};

export default Home;
