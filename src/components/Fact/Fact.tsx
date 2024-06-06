import React from 'react'
import { FactProps } from './type'
import { FactComponent } from './styles'

function Fact ({id, fact}:FactProps) {
  return (
      <FactComponent key={id}>{fact}</FactComponent>
  )
}

export default Fact