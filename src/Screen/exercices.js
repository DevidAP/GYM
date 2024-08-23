import React, { Component } from 'react';
import Exercicetempla from './template/exercicestem';
import './screen.css';

export default class Exercices extends Component {
  render() {
    return (
      <div className="container-exercice">
        <div className="grid-item back">
          <Exercicetempla
            imagen='back'
            exercice='ESPALDA'
            linkto='back'
          />
        </div>
        <div className="grid-item biscep">
          <Exercicetempla 
            imagen='biscep'
            exercice='BISCEP'
            linkto='biscep'
          />
        </div>
        <div className="grid-item chest">
          <Exercicetempla 
            imagen='chest'
            exercice='PECHO'
            linkto='chest'
          />
        </div>
        <div className="grid-item legs">
          <Exercicetempla 
            imagen='legs'
            exercice='PIERNA'
            linkto='legs'
          />
        </div>
        <div className="grid-item abdomen">
          <Exercicetempla 
            imagen='abdomen'
            exercice='ABDOMEN'
            linkto='abdomen'
          />
        </div>
        <div className="grid-item shoulders">
          <Exercicetempla 
            imagen='shoulder'
            exercice='HOMBRO'
            linkto='shoulder'
          />
        </div>
        <div className="grid-item buttocks">
          <Exercicetempla 
            imagen='buttocks'
            exercice='GLÚTEOS'
            linkto='buttocks'
          />
        </div>
      </div>
    );
  }
}
