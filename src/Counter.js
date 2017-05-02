import React from 'react';

/** 
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    render() {
        return(
            <button 
                onClick={() => {
                    this.setState({ counter: this.state.counter + 1})
                }}
            >
                Count: {this.state.counter}
            </button>
        );
    }
}
export default Counter;