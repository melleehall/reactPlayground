import React from 'react';

export default class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }

    handleWorldButton = () => {
        this.setState({
            who: 'World'
        })
    }
    handleFriendButton = () => {
        this.setState({
            who: 'Friend'
        })
    }
    handleReactButton = () => {
        this.setState({
            who: 'React'
        })
    }
    render () {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button type="button" 
                    onClick={this.handleWorldButton}>World</button>
                <button type="button" 
                    onClick={this.handleFriendButton}>Friend</button>
                <button type="button" 
                    onClick={this.handleReactButton}>React</button>
            </div>
        )
    };
}
