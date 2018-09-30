import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import AppFrame from './../../../src/components/appFrame/AppFrame';
import appFrameStyles from './../../../src/components/appFrame/AppFrame.css'

describe('testing AppFrame component', () => {
    const appTitle = "test title";
    const testSpy = spy();
    const testFilters = [
        {
            id: Math.random(),
            text: "Filter 1",
            colour: "green",
            active: true
        },
        {
            id: Math.random(),
            text: "Filter 2",
            colour: "green",
            active: true
        },
        {
            id: Math.random(),
            text: "Filter 3",
            colour: "indigo",
            active: true
        }
    ];

    it('renders a single AppFrame component', () => {
        const component = shallow(<AppFrame />);
        expect(component).toHaveLength(1);

        const instance = component.instance();
        expect(instance).toBeInstanceOf(AppFrame);
    });

    it('state contains a \'sideBarOpen\' boolean', () => {
        const component = shallow(
            <AppFrame appTitle={appTitle}
                    filters={testFilters}
                    onToggleFilter={testSpy}
                    onDeleteFilter={testSpy}/>
        ).dive();
        const appFrameState = component.state();
        expect(typeof appFrameState.sideBarOpen).toBe('boolean');
    });
});