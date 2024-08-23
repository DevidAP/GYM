import React, { Component } from "react";
import Exercicetempla from "../../Screen/template/exerciceType";
import "../../Screen/screen.css";
export default class abdomenmiddle extends Component {
  render() {
    return (
      <div>
        <h2 className="title-2">
          EJERCICIOS PARA ABDOMEN PAZA ZONA MEDIA Y SUPERIOR{" "}
        </h2>
        <div className="container-exercice">
          <div className="grid-item-1 shrinkage-floor">
            <Exercicetempla
              carpet="abdomen-Middle"
              imagen="abdominalfloor"
              exercice="ENCOGIMIENTOS ABDOMINALES EN EL SUELO"
              linkto="shrinkagefloor"
            />
          </div>
          <div className="grid-item-1 shrinkage-ballon">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="shrinkageball"
              exercice="ENCOGIMIENTOS EN BALÓN DE EJERCICIO"
              linkto="shrinkageball"
            />
          </div>
          <div className="grid-item-1 shrinkage-inclined-bench">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="shrinakegeinclined"
              exercice="ENCOGIMIENTOS EN BANCO INCLINADO"
              linkto="shrinkageinclied"
            />
          </div>
          <div className="grid-item-1 shrinkage-inclined-machine">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="shrinkagemachine"
              exercice="ENCOGIMIENTOS EN MAQUINA"
              linkto="shrinkagemachine"
            />
          </div>
          <div className="grid-item-1 shrinkage-inclined-pulley-kneeling">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="shrinkagepulley"
              exercice="ENCOGIMIENTOS EN POLEA, ARRODILLADO"
              linkto="shrinkagepulley"
            />
          </div>
          <div className="grid-item-1 shrinkage-inclined-pulley-stading">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="shrinkagesta"
              exercice="ENCOGIMIENTOS EN POLEA, DE PIE"
              linkto="shrinkagestading"
            />
          </div>
          <div className="grid-item-1 roll-bar">
          <Exercicetempla
              carpet="abdomen-Middle"
              imagen="roll"
              exercice="RODAR CON LA BARRA"
              linkto="rollbar"
            />
          </div>
        </div>
      </div>
    );
  }
}
