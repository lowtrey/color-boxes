import React from 'react';
import { choice } from './Helpers';
import './Box.css';

class Box extends React.Component {
    static defaultProps = {
        allColors: ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'white', 'yellow']
    }
    constructor(props){
        super(props);
        this.state = { color: choice(this.props.allColors) };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){

    }
    render() {
        return (
            <div className='Box' onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
                <h1>Box</h1>
            </div>
        )
    }
}

export default Box;