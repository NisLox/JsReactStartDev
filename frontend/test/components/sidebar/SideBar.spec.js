import React  from 'react';
import { shallow } from 'enzyme';
import SideBar from '../../../src/components/sidebar/SideBar';

describe('GIVEN the sidebar is visible to the user', () => {
    describe('WHEN the SideBar is rendered', () => {
        test('THEN a single SideBAr component is created', () => {
            const component = shallow(<SideBar />);
            expect(component).toHaveLength(1);

            const instance = component.instance();
            expect(instance).toBeInstanceOf(SideBar);
        })
    })
});