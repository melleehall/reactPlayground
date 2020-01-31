import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from './Tabs';

describe('Tabs Component', () => {
    //array of objects each with a name and content
    const tabsProp = [
        { name: 'First tab',
        content: 'FIRST Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
        content: 'SECOND Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
        content: 'THIRD Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
        ];
    
    // smoke test
    it.skip('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // snapshot test
    it.skip('renders first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    // when no tabs are passed as a prop to the component
    it.skip('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it.skip('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        wrapper.find('button')
        // to select only one element from a list inside a wrapper, use the .at() method with an index number
        console.log(wrapper.find('button').at(1).debug())
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})