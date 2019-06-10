import React, { Component } from 'react'
import FASTQfileBox from '../sequenceContainer/FASTQfileBox'
import HistoryTable from '../sequenceContainer/historyTable'

export default class SequenceContainer extends Component {
 render() { 
  return ( 
  <div className='sequenceContainer'>
   <div className='sequenceContainer_FASTQfileBox'>
    <FASTQfileBox/>
   </div>
   <div className='sequenceContainer_historyTable'>
    <HistoryTable/>
   </div>
  </div>
   )}
}