import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleCounter = () => {
        this.setState({
            status: 'tick'
        })
    }
     
    componentDidMount() {
        this.interval = setInterval(() => {
                this.setState({
                    count: this.state.count + 1
                })
                if (this.state.count >= 8) {
                    this.setState({
                        status: 'BOOM!!!!'
                    })
                    clearInterval(this.interval)
                } else if (this.state.count % 2 === 0) {
                    this.setState({
                        status: 'tick'
                    })
                } else {
                    this.setState({
                        status: 'tock'
                    })
                }
            }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render () {
        return (
            <div>
                <p> {this.state.status}</p>
            </div>
        )
    }
}