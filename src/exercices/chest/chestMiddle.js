import React, { Component } from "react";
import Exercicetempla from "../../Screen/template/exerciceType";

export default class chestMiddle extends Component {
  render() {
    return (
      <div>
        <div className="container-exercice">
          <div className="grid-item-1 opening-dumbells">
            <Exercicetempla
              carpet="chest-middle"
              imagen="openin-dumbbells"
              exercice="APERTURA CON MANCUERNAS EN BANCO PLANO"
              linkto="opening-dumbbells"
            />
          </div>
          <div className="grid-item-1 opening-pulley">
            <Exercicetempla
              carpet="chest-middle"
              imagen="opening-pulley"
              exercice="APERTURA CON POLEA EN BANCO PLANO"
              linkto="opening-pulley"
            />
          </div>
          <div className="grid-item-1 machine-chest">
            <Exercicetempla
              carpet="chest-middle"
              imagen="machine-chest"
              exercice="APERTURAS DE PECHO EN MÁQUINA"
              linkto="chine-chest"
            />
          </div>
          <div className="grid-item-1 peck-deck">
            <Exercicetempla
              carpet="chest-middle"
              imagen="peck-deck"
              exercice="APERTURA EN PECK DECK"
              linkto="peck-deck"
            />
          </div>
          <div className="grid-item-1 pulley-crossigs">
            <Exercicetempla
              carpet="chest-middle"
              imagen="pulley-crossigs"
              exercice="CRUCES EN POLEA ALTA"
              linkto="pulley-crossigs"
            />
          </div>
          <div className="grid-item-1 low-crossers">
            <Exercicetempla
              carpet="chest-middle"
              imagen="crossers-low"
              exercice="CRUCES EN POLEA BAJA"
              linkto="low-crossers"
            />
           
          </div>
          <div className="grid-item-1 pushups">
            <Exercicetempla
              carpet="chest-middle"
              imagen="pushups"
              exercice="FLEXIONES"
              linkto="pushups"
            />
          </div>
          <div className="grid-item-1  machine-backgrounds">
            <Exercicetempla
              carpet="chest-middle"
              imagen="machine-backgrounds"
              exercice="FONDOS EN MAQUINA"
              linkto=" machine-backgrounds"
            />
          </div>
          <div className="grid-item-1 parallet-funds">
            <Exercicetempla
              carpet="chest-middle"
              imagen="parallel-funds"
              exercice="FONDOS EN PARALELAS PARA PECHO"
              linkto="parallel-funds"
            />
          </div>
          <div className="grid-item-1 one-hand">
            <Exercicetempla
              carpet="chest-middle"
              imagen="onehand"
              exercice="PRESS BANCA A UNA MANO EN MULTIPOWER"
              linkto="one-hand"
            />
          </div>
          <div className="grid-item-1 press-bar">
            <Exercicetempla
              carpet="chest-middle"
              imagen="press-bar"
              exercice="PRESS DE BANCO CON BARRA"
              linkto="press-bar"
            />
          </div>
          <div className="grid-item-1 press-bar-multipower">
            <Exercicetempla
              carpet="chest-middle"
              imagen="press-multipower"
              exercice="PRESS DE BANCO EN MULTIPOWER"
              linkto="press-multipower"
            />
          </div>
          <div className="grid-item-1 press-machine">
            <Exercicetempla
              carpet="chest-middle"
              imagen="press-machine"
              exercice="PRESS DE PECHO EN MÁQUINA HORIZONTAL"
              linkto="press-machine"
            />
          </div>
          <div className="grid-item-1 press-machine-vertical">
            <Exercicetempla
              carpet="chest-middle"
              imagen="press-machine-vertical"
              exercice="PRESS DE PECHO EN MÁQUINA VERTICAL"
              linkto="press-machine-vertical"
            />
          </div>
          <div className="grid-item-1 press-cufflinks">
            <Exercicetempla
              carpet="chest-middle"
              imagen="press-cufflinks"
              exercice="PRESS EN BANCO PLANO CON MANCUERNAS"
              linkto="press-cuffllinks"
            />
          </div>
          <div className="grid-item-1 pullover-bar">
            <Exercicetempla
              carpet="chest-middle"
              imagen="pullover-bar"
              exercice="PULLOVER CON BARRA"
              linkto="pullover-bar"
            />
          </div>
          <div className="grid-item-1 pullover-cufflinks">
            <Exercicetempla
              carpet="chest-middle"
              imagen="pullover-cufflinks-"
              exercice="PULLOVER CON MANCUERNAS"
              linkto="pullover-cufflinks"
            />
          </div>
          <div className="grid-item-1 pullover-inclined">
            <Exercicetempla
              carpet="chest-middle"
              imagen="pullover-inclined"
              exercice="PULLOVER EN BANCO INCLINADO"
              linkto="pullover-inclined"
            />
          </div>
          
        </div>
      </div>
    );
  }
}
