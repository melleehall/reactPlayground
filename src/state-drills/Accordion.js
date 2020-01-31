import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        currentViewIndex: null,
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
                    {section.title}
                </button>
                {(this.state.currentViewIndex === index) && <p>{section.content}</p>}
            </li>
        ))
      }

    render () {
        return (
            <ul className='Accordion'>
                {this.renderButtons()}
            </ul>
        )
    }
}