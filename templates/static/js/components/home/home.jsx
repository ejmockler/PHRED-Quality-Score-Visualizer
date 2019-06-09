import React, { Component } from 'react';
import styles from './home.sass'

export default class Home extends Component {
  render() {
   return (
    <div className={styles.home}>
     <h1>Hello React!</h1>
    </div>
   )
  }
}