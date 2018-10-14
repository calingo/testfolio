import React from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'

class Effects extends React.Component {

    constructor() {
        super();
        this.state = {
          value: 50
        }
      };

    changeValue = (e) =>  {
        this.setState({
          value: e.currentTarget.value
        });
      }
    
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <input type="range" min="1" max="100" className="slider" id="myRange" onInput={this.changeValue} defaultValue={this.state.value}></input>
                <output for="quantity" style={{fontSize:'15px', color:'white'}} >{this.state.value}</output>
            </div>

        )
    }
}

export default Effects