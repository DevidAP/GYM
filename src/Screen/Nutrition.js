import React from 'react';
import './Nutrition.css';

const Nutrition = () => {
  const meals = [
    {
      name: 'Desayuno Energético',
      items: ['Avena con Frutas', 'Batido de Proteína', 'Tostadas Integrales con Aguacate']
    },
    {
      name: 'Almuerzo Saludable',
      items: ['Pollo a la Parrilla', 'Ensalada de Quinoa', 'Brócoli al Vapor']
    },
    {
      name: 'Cena Ligera',
      items: ['Pescado al Horno', 'Arroz Integral', 'Espárragos Asados']
    },
    {
      name: 'Snacks',
      items: ['Nueces y Almendras', 'Yogur Griego', 'Frutas Frescas']
    }
  ];

  return (
    <div className="nutrition-container">
      <h1>Plan de Nutrición</h1>
      <p>Una dieta balanceada es esencial para complementar tu rutina de ejercicios. Aquí te presentamos algunas opciones de comidas para cada momento del día:</p>
      {meals.map((meal, index) => (
        <div key={index} className="meal">
          <h2>{meal.name}</h2>
          <ul>
            {meal.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Nutrition;
