import React from 'react'
import { CardComponent } from './styles'
import { CardProps } from './type'
import Fact from '../Fact/Fact'

function Card({facts}:CardProps) {
  return (
    <CardComponent>
      {facts.map((fact, index) => <Fact id={index} fact={fact} />)}
    </CardComponent>
  )
}

export default Card