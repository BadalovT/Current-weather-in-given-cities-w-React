import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetType } from '../../action/index'

class Radiobuttons extends Component {
    
     getTypeHandle=(e)=>{
        this.props.GetType(e.target.value)
    }

    render() {
        return (
            <>
                <label htmlFor="Kelvin" className="radio">Kelvin
                    <input  onChange={this.getTypeHandle} type="radio" id="Kelvin" name="gender" value="Kelvin"/> 
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="Celcius" className="radio">Celcius
                    <input defaultChecked={true} onChange={this.getTypeHandle} type="radio" id="Celcius" name="gender" value="Celcius"/> 
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="Fehrenheight" className="radio">Fehrenheight
                    <input onChange={this.getTypeHandle} type="radio" id="Fehrenheight" name="gender" value="Fehrenheight"/>
                    <span className="checkmark"></span> 

                </label>
               
            </>
        );
    }
}

export default connect(null,{GetType})(Radiobuttons);