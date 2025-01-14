// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { WindowStateActionCreator } from 'electron/flux/action-creator/window-state-action-creator';
import {
    DeviceConnectFooter,
    DeviceConnectFooterDeps,
    DeviceConnectFooterProps,
} from 'electron/views/device-connect-view/components/device-connect-footer';
import { footerButtonCancel, footerButtonStart } from 'electron/views/device-connect-view/components/device-connect-footer.scss';
import { shallow } from 'enzyme';
import { Button } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
import { EventStubFactory } from 'tests/unit/common/event-stub-factory';
import { IMock, Mock, Times } from 'typemoq';

describe('DeviceConnectFooterTest', () => {
    let windowStateActionCreatorMock: IMock<WindowStateActionCreator>;
    let deps: DeviceConnectFooterDeps;

    const onClickMock = Mock.ofInstance(() => {});
    const eventStub = new EventStubFactory().createMouseClickEvent() as React.MouseEvent<Button>;

    beforeEach(() => {
        windowStateActionCreatorMock = Mock.ofType(WindowStateActionCreator);
        deps = { windowStateActionCreator: windowStateActionCreatorMock.object };
    });

    test('render', () => {
        const props: DeviceConnectFooterProps = {
            cancelClick: () => {
                return;
            },
            canStartTesting: false,
            deps,
        };
        const rendered = shallow(<DeviceConnectFooter {...props} />);

        expect(rendered.getElement()).toMatchSnapshot();
    });

    test('cancel click', () => {
        const props: DeviceConnectFooterProps = {
            cancelClick: onClickMock.object,
            canStartTesting: false,
            deps,
        };

        const rendered = shallow(<DeviceConnectFooter {...props} />);
        const button = rendered.find(`.${footerButtonCancel}`);
        button.simulate('click', eventStub);

        onClickMock.verify(onClick => onClick(), Times.once());
    });

    test('start testing changes route', () => {
        windowStateActionCreatorMock.setup(w => w.setRoute({ routeId: 'resultsView' })).verifiable(Times.once());

        const props: DeviceConnectFooterProps = {
            cancelClick: onClickMock.object,
            canStartTesting: true,
            deps,
        };

        const rendered = shallow(<DeviceConnectFooter {...props} />);
        const button = rendered.find(`.${footerButtonStart}`);
        button.simulate('click', eventStub);
        windowStateActionCreatorMock.verifyAll();
    });
});
