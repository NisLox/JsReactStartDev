import React from 'react';
import { shallow } from 'enzyme';
import App from './../../../src/components/App/App';


describe('testing App component', () => {
    it('renders a single App component', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1);

        const instance = component.instance();
        expect(instance).toBeInstanceOf(App);
    });
});