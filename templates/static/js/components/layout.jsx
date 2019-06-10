import React, { Component } from 'react'
import ChartContainer from './chart/chartContainer'
import SequenceContainer from './sequenceContainer/sequenceContainer'

export default class Layout extends Component {
 render() {
  return (
   <div>
    <ChartContainer/>
    <SequenceContainer/>
   </div>
  )
 }
}