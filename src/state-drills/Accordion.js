import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        currentViewIndex: 0,
    }

    handleButtonClick(index) {
        this.setState({currentViewIndex: index})
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li className='Accordion__item' key={index}>
                <button 
                    type='button'
                    onClick={() => this.handleButtonClick(index)}
                >
                    {this.props.sections[index]['title']}
                </button>
            </li>
        ))
      }

    renderContent() {
        const currentContent = this.props.sections[this.state.currentViewIndex]
        return (
            <p className='Accordion__item'>
                {currentContent.content}
            </p>
        )
    }

    render () {
        return (
            <ul className='Accordion'>
                {this.renderButtons()}
                {!!this.props.sections.length && this.renderContent()}
            </ul>
        )
    }
}