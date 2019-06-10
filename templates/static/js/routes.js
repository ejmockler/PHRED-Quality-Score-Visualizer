import React from 'react'
import { HashRouter, Route, hashHistory } from 'react-router-dom'
import Layout from './components/Layout'

export default (
 <HashRouter history={hashHistory}>
  <div>
   <Route path='/' component={Layout} />
  </div>
 </HashRouter>
);