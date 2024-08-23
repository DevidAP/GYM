import React, { Component } from "react";
import Exercicetempla  from "../../Screen/template/exerciceType";
import "../../Screen/screen.css";
export default class abdomenLower extends Component {
  render() {
    return (
      <div>
        <h2 className="title-2">EJERCICIO PARA ABDOMEN INFERIOR</h2>
        <div className="container-exercice">
          <div className="inferiores">
            <div className="grid-item-1 knee-Raise">
              <Exercicetempla     
             carpet="abdomen-Low"
                imagen="kneeRaise"
                exercice="ELEVACION DE RODILLAS SENTADO "
                linkto="abdomen"
               
              />
            </div>
            <div className="grid-item-1 hagingLeg">
              <Exercicetempla     
             carpet="abdomen-Low"
                imagen="hagingLeg"
                exercice="ELEVACIONES DE PIERNAS COLGANTES"
                linkto="abdomen"
              />
            </div>
            <div className="grid-item-1 flatBench">
              <Exercicetempla    
              carpet="abdomen-Low"
                imagen="flatBench"
                exercice="ELEVACIONES DE PIERNAS EN BANCO PLANO"
                linkto="flatbeanch"
              />
            </div>
            <div className="grid-item-1 parallet">
              <Exercicetempla     
             carpet="abdomen-Low"
                imagen="parallet"
                exercice="ELEVACIONES DE PIERNAS EN PARALELAS"
                linkto="parallet"
              />
            </div>
            <div className="grid-item-1 shrinkage">
              <Exercicetempla    
              carpet="abdomen-Low"
                imagen="shrinkage"
                exercice="ENCOGIMIENTO EN V"
                linkto="shrinkage"
              />
            </div>
            <div className="shrinkage-inverted grid-item-1">
              <Exercicetempla    
              carpet="abdomen-Low"
                imagen="shrinkageinverted"
                exercice="ENCOGIMIENTO INVERTIDOS"
                linkto="shrinkageinverted"
              />
            </div>
            <div className="grid-item-1 shrinkage-inverted-bench">
              <Exercicetempla    
              carpet="abdomen-Low"
                imagen="shrinkageinvertedbench"
                exercice="ENCOGIMIENTO INVERTIDOS EN BANCO INCLINADO"
                linkto="shrinkageinvertedbench"
              />
            </div>
            <div className="grid-item-1 leg-scissors">
              <Exercicetempla   
               carpet="abdomen-Low"
                imagen="scissoresleg"
                exercice="TIJERA DE PIERNAS"
                linkto="shrinkageinvertedbench"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
