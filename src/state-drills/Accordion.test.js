import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

// an array of objects each containing two keys, 'title' and 'content'
const sectionsProp = [
    {
      title: 'Section 1',
      content: 'ONE Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'TWO Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'THREE Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

describe('Accordion Component', () => {
    it('renders without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty list item given no sections', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    // it('renders no sections as active by default', () => {
    //     const wrapper = shallow(<Accordion sections={sectionsProp} />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // })
})