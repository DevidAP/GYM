import React, { Component } from 'react'
import ExerciceLower from './abdomenLower'
import Abdomenmiddle from './abdomenmiddle'
import AbdomenLateral from './abdomenLateral'

export default class abdomen extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>EJERCICIOS PARA ABDOMEN</h1>
        <ExerciceLower/>
        <Abdomenmiddle />
        <AbdomenLateral />
      </div>
    )
  }
}
