import React from 'react';
import { choice } from './Helpers';
import './Box.css';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = { color: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
        
        this.setState({ color: newColor });
    }
    handleClick(){
        this.pickColor();
    }
    render() {
        return (
            <div className='Box' onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
            </div>
        )
    }
}

export default Box;