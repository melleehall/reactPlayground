import React from 'react'

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletinchamber: 8
    }
    
    state = {
        chamber: null,
        spinningthechamber: false
    }

    componentWillUnmount() {
        clearTimeout(this.Timeout)
    }

    handleButton = () => {
        this.setState({
            spinningthechamber: true
        })
        this.Timeout = setTimeout(() => {
            let randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningthechamber: false
            })
        }, 2000)
    }

    renderDisplay() {
        if (this.state.spinningthechamber === true) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletinchamber) {
            return 'BANG!!!!'
        } else {
            return 'You are safe!'
        }
    }

    render () {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButton}>Pull the trigger!</button>
            </div>
        )
    }
}