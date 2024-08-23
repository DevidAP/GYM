import React, { Component } from 'react'
import Exercicetempla from "../../Screen/template/exerciceType";

export default class chestLower extends Component {
  render() {
    return (
      <div>
        <h2 className='title-2'>EJERCICIO DE PECHO PARA ZONA INFERIOR</h2>
        <div className="container-exercice">
        <div className="grid-item-1 dumbbelles-declined">
            <Exercicetempla
              carpet="chest-Low"
              imagen="dumbbells-declined"
              exercice="APERTURA CON MANCUERNAS EN BANCO DECLINADO"
              linkto="opening-dumbbells-declined"
            />
          </div>
          <div className="grid-item-1 funds-bank">
            <Exercicetempla
              carpet="chest-Low"
              imagen="funds-banks"
              exercice="FONDOS ENTRE BANCOS"
              linkto="funds-banks"
            />
          </div>
          <div className="grid-item-1 press-declined-bar">
            <Exercicetempla
              carpet="chest-Low"
              imagen="declined-bar"
              exercice="PRESS CON BARRA EN BANCO DECLINADO"
              linkto="declined-bar"
            />
          </div>
          <div className="grid-item-1 press-declined-dumbbells">
            <Exercicetempla
              carpet="chest-Low"
              imagen="declined-dumbbells"
              exercice="PRESS CON MANCUERNAS EN BANCO DECLINADO"
              linkto="declined-bar"
            />
          </div>
          
          <div className="grid-item-1 declined-multipower">
            <Exercicetempla
              carpet="chest-Low"
              imagen="declined-multipower"
              exercice="PRESS DECLINADO EN MULTIPOWER"
              linkto="declined-multipower"
            />
          </div>
          
        </div>
      </div>
    )
  }
}
