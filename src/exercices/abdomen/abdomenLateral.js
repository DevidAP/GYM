import React, { Component } from "react";
import Exercicetempla from "../../Screen/template/exerciceType";

export default class abdomenLateral extends Component {
  render() {
    return (
      <div>
        <h2 className="title-2">EJERCICIOS PARA ABDOMEN LATERAL</h2>
        <div className="container-exercice">
          <div className="grid-item-1 lumberjack">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="lumberjack"
              exercice="CORTAR TRONCOS EN POLEA "
              linkto="lumberjack"
            />
          </div>
          <div className="grid-item-1 bicycle">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="bicycle"
              exercice="BICICLETA EN EL AIRE PARA OBLICUOS "
              linkto="bicycle"
            />
          </div>
          <div className="grid-item-1 hanging-leg-lift">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="hanging"
              exercice="ELEVACION LATERAL DE PIERNAS COLGADO  "
              linkto="haging"
            />
          </div>
          <div className="grid-item-1 jacknife">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="jacknife"
              exercice="ELEVACION DE PIERNAS PARA OBLICUOS TUMBADO"
              linkto="haging"
            />
          </div>
          <div className="grid-item-1 torsion">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="torsion"
              exercice="ENCOGIMIENTO LATERAL CON MANCUERN DE PIE"
              linkto="torsion"
            />
          </div>
          <div className="grid-item-1 shrinkage-ankles">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="shrinkage-ankles"
              exercice="ENCOGIMIENTOS LATERALES DEDOS A LOS TOBILLOS"
              linkto="shrinkages-ankles"
            />
          </div>
          <div className="grid-item-1 obliques">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="obliques"
              exercice="ENCOGIMIENTO PARA OBLICUOS"
              linkto="obliques"
            />
          </div>
          <div className="grid-item-1 obliques-inclined">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="obliques-inclined"
              exercice="ENCOGIMIENTO PARA OBLICUOS EN BANCO INCLINADO"
              linkto="obliques-inclined"
            />
          </div>
          <div className="grid-item-1 obliques-pulley">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="obliques-pulley"
              exercice="ENCOGIMIENTO PARA OBLICUOS EN POLEA"
              linkto="obliques-inclined"
            />
          </div>
          <div className="grid-item-1 lateral-pulley">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="lateral-pulley"
              exercice="INCLINACION LATERAL CON POLEA"
              linkto="lateral-pulley"
            />
          </div>
          <div className="grid-item-1 Press-Pallof">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="pallof"
              exercice="PRESS PALLOF"
              linkto="pallof"
            />
          </div><div className="grid-item-1 plancha">
            <Exercicetempla
              carpet="abdomen-lateral"
              imagen="plancha"
              exercice="PLANCHA"
              linkto="plancha"
            />
          </div>
        </div>
      </div>
    );
  }
}
