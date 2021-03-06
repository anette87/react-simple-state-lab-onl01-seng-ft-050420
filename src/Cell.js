import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        
        super()
        this.state = {
            color: props.value
        } 
    } 
    
    
    handleClick = () => {
        this.setState({
          color: '#333',
        })
    }

    // Create a click listener which, when activated, updates the state to the following hex value: '#333'
    
    render() {
        return (
          <div 
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
          </div>
        )  
    }

    // In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example value here - the value should be the state's color)

}



// Create a click listener which, when activated, updates the state to the following hex value: '#333'