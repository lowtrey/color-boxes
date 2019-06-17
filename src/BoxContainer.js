import React from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends React.Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'white', 'yellow']
    };
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
        <Box colors={this.props.allColors} />
        ));
        return <div className="BoxContainer">{boxes}</div>;
    }
}

export default BoxContainer;