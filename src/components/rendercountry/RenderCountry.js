import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCountry } from '../../action/index';

class RenderCountry extends Component {

    deleteCountryHandle=(id)=>{
        this.props.deleteCountry(id)
      }
    renderCountry=()=>{
        const {country} = this.props;
        return(
          country.map((item,index)=>{
            switch (this.props.type) {
              case "Fehrenheight":
                return (
                        <li key={index}>
                          <button onClick={()=>this.deleteCountryHandle(item.id)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                          <span className="mr-1">{item.name.name}  </span>
                          <span>{(item.name.main.temp * 9/5) + 32 + "F"}</span>
                        </li>)
               case "Kelvin":
                      return (
                          <li key={index}>
                            <button onClick={()=>this.deleteCountryHandle(item.id)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                             <span className="mr-1">{item.name.name}</span>   
                             <span>{(item.name.main.temp) + 273 + "K"}</span>
                          </li>)
              default:
                 return(
                      <li key={index}>
                        <button onClick={()=>this.deleteCountryHandle(item.id)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                         <span className="mr-1">{item.name.name}</span> 
                         <span>{item.name.main.temp + "C"}</span>
                      </li>
                    )
            }
          })
        )
      }

    render() {
        return (
            <ul>
                {this.renderCountry()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return{
      country: state.countryReducer,
      type: state.typeReducer
    }
  }
  
  export default connect(mapStateToProps,{deleteCountry})(RenderCountry);