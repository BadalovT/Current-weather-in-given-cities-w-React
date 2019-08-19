import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { AddCountry } from '../src/action';
import RenderCountry from './components/rendercountry/RenderCountry'
import Radiobuttons from './components/radiobuttons/Radiobuttons';

const API_KEY= "989a121215272ec19afb144c538b957b"

class App extends Component {

  getCountriesHandle=(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    let header=document.querySelector(".header")
    let headerP = document.createElement(("p"));
    headerP.classList.add("headerP");
    const headerPTag=document.querySelector(".headerP")
    headerPTag.remove()
    this.countryName.value = "";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => {
        const response = res.data;
        this.props.AddCountry(response)
        this.countryName.value = "";
        header.appendChild(headerP)
    })
    .catch(function (error) {
        headerP.innerText = "City not found";
        header.appendChild(headerP)
    });
  }
  render() {
    return (
      <div className="app">
        <div className="container">
            <h3 className="my-3">Current weather in given cities</h3>
                <div className="row">
              <div className="col-md-6">
                <header className="header" >
                  <form onSubmit={this.getCountriesHandle}>
                    <input name="city" placeholder="Add City" type="text" ref={item=>this.countryName = item}/>
                  </form>
                  <p className="headerP"></p>
                </header>
              </div>
              <div className="col-md-6">
                <Radiobuttons/>
              </div>
              <div className="col-md-6">
                  <RenderCountry/>
              </div>
            
            </div>
        </div>
      </div>
    
    );
  }
}



export default connect(null,{AddCountry})(App);

