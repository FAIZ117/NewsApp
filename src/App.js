import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      categoryType:"general",
    }
  }
  
  render() {
    return (
      <div> 
        <Router>
        <Navbar/> 
        <Routes>
        <Route path="/"  element={<News key="general" pageSize={6} country="in" category="general"/>}/>
        <Route path="/Home"element={<News key="general" pageSize={6} country="in" category="general"/>}/>
        <Route path="/Business" element={<News key="Business" pageSize={6} country="in" category="Business"/>}/>
        <Route path="/Health" element={<News key="Health" pageSize={6} country="in" category="Health"/>}/>
        <Route path="/Science" element={<News key="Science" pageSize={6} country="in" category="Science"/>}/>
        <Route path="/Sports" element={<News key="Sports" pageSize={6} country="in" category="Sports"/>}/>
        <Route path="/Technology" element={<News key="Technology" pageSize={6} country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

