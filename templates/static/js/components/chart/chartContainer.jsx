import React, { Component } from 'react'
import QualityScoreZoomline from '../chart/QualityScoreZoomline'

export default class ChartContainer extends Component {
 render() {
  return (  
   <div className='chartContainer'>
    <QualityScoreZoomline/>
   </div>
  )
 }
}