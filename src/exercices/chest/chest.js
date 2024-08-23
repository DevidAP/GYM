import React, { Component } from 'react'
import ChestMiddle from './chestMiddle'
import ChestLower from './chestLower'

export default class chest extends Component {
  render() {
    return (
      <div>
        <h2 className='title-2'>EJERCICIOS DE PECHO PARA ZONA MEDIA</h2>
        <ChestMiddle />
        <ChestLower />
      </div>
    )
  }
}
