// Routine.js
import React from 'react';
import './Routine.css'; // Asegúrate de que el CSS esté en la misma carpeta

const Routine = ({ name, exercises }) => {
  return (
    <div className="routine">
      <h2>{name}</h2>
      <ul>
        {exercises && exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))
        ) : (
          <p>No hay ejercicios disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default Routine;

