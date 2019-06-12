import React, { Component } from 'react'
import FASTQfileBox from '../sequenceContainer/FASTQfileBox'
import HistoryTable from '../sequenceContainer/historyTable'

export default class SequenceContainer extends Component {
 render() { 
  return ( 
  <div className='sequenceContainer'>
   <div className='sequenceContainer_FASTQfileContainer'>
    <FASTQfileBox/>
   </div>
   <div className='sequenceContainer_historyContainer'>
    <HistoryTable/>
   </div>
  </div>
   )}
}