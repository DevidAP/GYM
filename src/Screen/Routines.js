import React from 'react';
import Routine from './Routine'; // Asegúrate de que la ruta es correcta
import './Routine.css'; // Importa el CSS

const Routines = () => {
  const routines = [
    {
      name: 'Rutina de Fuerza',
      exercises: ['Sentadilla', 'Peso Muerto', 'Press de Banca', 'Remo con Barra']
    },
    {
      name: 'Rutina de Cardio',
      exercises: ['Cinta de Correr', 'Bicicleta Estática', 'Elíptica', 'Saltar la Cuerda']
    },
    {
      name: 'Rutina de Abdominales',
      exercises: ['Crunches', 'Planchas', 'Elevaciones de Piernas', 'Bicicleta en el Suelo']
    },
    {
      name: 'Rutina para Piernas',
      exercises: ['Sentadillas (Squats)', 'Peso Muerto Rumano (Romanian Deadlift)', 'rensa de Piernas (Leg Press)','Zancadas (Lunges)']
    },
    {
      name: "Rutina"
    }
  ];

  return (
    <div className="routines-container">
      {routines.map((routine, index) => (
        <Routine key={index} name={routine.name} exercises={routine.exercises} />
      ))}
    </div>
  );
};

export default Routines;
