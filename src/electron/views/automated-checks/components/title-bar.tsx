// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { BrowserWindow } from 'electron';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';

import { NamedFC } from 'common/react/named-fc';
import { brand } from 'content/strings/application';
import { WindowStateActionCreator } from 'electron/flux/action-creator/window-state-action-creator';
import { WindowTitle } from 'electron/views/device-connect-view/components/window-title';
import { BrandWhite } from 'icons/brand/white/brand-white';
import { titleBar } from './title-bar.scss';

export type TitleBarDeps = {
    currentWindow: BrowserWindow;
    windowStateActionCreator: WindowStateActionCreator;
};

export interface TitleBarProps {
    deps: TitleBarDeps;
}

export const TitleBar = NamedFC<TitleBarProps>('TitleBar', (props: TitleBarProps) => {
    const minimize = () => props.deps.windowStateActionCreator.setWindowState({ currentWindowState: 'minimized' });
    const maximize = () => props.deps.windowStateActionCreator.setWindowState({ currentWindowState: 'restoredOrMaximized' });
    const close = () => props.deps.currentWindow.close();

    const icons = [
        <ActionButton
            ariaHidden={true}
            iconProps={{
                iconName: 'ChromeMinimize',
            }}
            id="minimize-button"
            onClick={minimize}
            tabIndex={-1}
            key="minimize"
        />,
        <ActionButton
            ariaHidden={true}
            iconProps={{
                iconName: 'Stop',
            }}
            id="maximize-button"
            onClick={maximize}
            tabIndex={-1}
            key="maximize"
        />,
        <ActionButton
            ariaHidden={true}
            iconProps={{
                iconName: 'Cancel',
            }}
            id="close-button"
            onClick={close}
            tabIndex={-1}
            key="close"
        />,
    ];

    return (
        <WindowTitle title={brand} actionableIcons={icons} className={titleBar}>
            <BrandWhite />
        </WindowTitle>
    );
});
