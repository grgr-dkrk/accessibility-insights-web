// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
export const axeRuleResultExample = {
    axeContext: {
        axeMetaData: {
            appIdentifier: 'com.test.scan-result',
            axeVersion: 'axe-android-test-version',
        },
    },
    axeRuleResults: [
        {
            axeViewId: 1467971545,
            props: {
                isImportantForAccessibility: false,
                contentDescription: null,
                className: 'android.widget.ImageView',
            },
            ruleId: 'ImageViewName',
            ruleSummary: 'Focusable Informative Views must have Text or a ContentDescription.',
            status: 'PASS',
        },
        {
            axeViewId: -167704646,
            props: {
                isImportantForAccessibility: false,
                contentDescription: null,
                className: 'android.widget.ImageView',
            },
            ruleId: 'ImageViewName',
            ruleSummary: 'Focusable Informative Views must have Text or a ContentDescription.',
            status: 'PASS',
        },
        {
            axeViewId: 2076590804,
            props: {
                'Color Contrast Ratio': 15.472099266835668,
                'Background Color': 'ffffffff',
                'Visible Text': 'Welcome to OneNote',
                'Confidence in Color Detection': 'High',
                className: 'android.widget.TextView',
                'Foreground Color': 'ff212526',
            },
            ruleId: 'ColorContrast',
            ruleSummary: 'Text adequately contrasts with its background.',
            status: 'PASS',
        },
        {
            axeViewId: 1100437139,
            props: {
                'Color Contrast Ratio': 5.244908611149115,
                'Background Color': 'ffffffff',
                'Visible Text': 'Take notes. Get Organized.',
                'Confidence in Color Detection': 'High',
                className: 'android.widget.TextView',
                'Foreground Color': 'ff636e72',
            },
            ruleId: 'ColorContrast',
            ruleSummary: 'Text adequately contrasts with its background.',
            status: 'PASS',
        },
        {
            axeViewId: 348799259,
            props: {
                'Screen Dots Per Inch': 2.625,
                width: 954,
                isActive: true,
                boundsInScreen: {
                    bottom: 1193,
                    left: 63,
                    right: 1017,
                    top: 1081,
                },
                height: 112,
            },
            ruleId: 'TouchSizeWcag',
            ruleSummary: 'Active views adhere to WCAG Touch Target Size requirements.',
            status: 'FAIL',
        },
        {
            axeViewId: 348799259,
            props: {
                labeledBy: null,
                className: 'android.widget.EditText',
            },
            ruleId: 'EditTextName',
            ruleSummary: 'Views that have modifiable Values should get their name from a nearby Label.',
            status: 'FAIL',
        },
        {
            axeViewId: 348799259,
            props: {
                'Color Contrast Ratio': 2.2691424910346987,
                'Background Color': 'ffa3aeb2',
                'Visible Text': 'Enter your email, phone, or Skype name',
                'Confidence in Color Detection': 'High',
                className: 'android.widget.EditText',
                'Foreground Color': 'ffffffff',
            },
            ruleId: 'ColorContrast',
            ruleSummary: 'Text adequately contrasts with its background.',
            status: 'INCOMPLETE',
        },
        {
            axeViewId: 348799259,
            props: {
                'Speakable Text': 'Enter your email, phone, or Skype name ',
                isActive: true,
            },
            ruleId: 'ActiveViewName',
            ruleSummary: 'Views that users can interact with must have a Name.',
            status: 'PASS',
        },
        {
            axeViewId: 348799259,
            props: {
                contentDescription: null,
                className: 'android.widget.EditText',
            },
            ruleId: 'EditTextValue',
            ruleSummary: 'Editable Views must not override the Value spoken by TalkBack.',
            status: 'PASS',
        },
        {
            axeViewId: 818878762,
            props: {
                'Color Contrast Ratio': 2.3502802603890585,
                'Background Color': 'ffa9a9a9',
                'Visible Text': 'Next',
                'Confidence in Color Detection': 'High',
                className: 'android.widget.Button',
                'Foreground Color': 'ffffffff',
            },
            ruleId: 'ColorContrast',
            ruleSummary: 'Text adequately contrasts with its background.',
            status: 'FAIL',
        },
        {
            axeViewId: null,
            props: {
                'Applicable Event Stream': [],
            },
            ruleId: 'DontMoveAccessibilityFocus',
            ruleSummary: 'Applications should not forcibly move focus around.',
            status: 'PASS',
        },
    ],
};
