// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { escape } from 'lodash';
import { EnvironmentInfo } from '../../common/environment-info-provider';
import { CreateIssueDetailsTextData } from '../../common/types/create-issue-details-text-data';
import { IssueDetailsGetter } from './issue-details-getter';
import { IssueUrlCreationUtils } from './issue-filing-url-string-utils';

const buildBodySectionHtml = (headingHtml: string, contentHtml: string): string => {
    return `<div><b>${headingHtml}</b></div><div>${contentHtml}</div><br>`;
};

const buildIssueDetailsHtml = (help: string, helpUrl: string, ruleId: string): string => {
    const helpEscapedForHtml = escape(help);
    const ruleIdEscapedForHtml = escape(ruleId);
    const helpUrlEscaped = encodeURI(helpUrl);

    return `${helpEscapedForHtml} (<a href="${helpUrlEscaped}">${ruleIdEscapedForHtml}</a>)`;
};

const buildApplicationHtml = (pageTitle: string, pageUrl: string): string => {
    const pageTitleEscapedForHtml = escape(pageTitle);
    const pageUrlEscapedForUrl = encodeURI(pageUrl);

    return `<a href="${pageUrlEscapedForUrl}">${pageTitleEscapedForHtml}</a>`;
};

const buildSnippetHtml = (snippet: string): string => {
    const maxSnippetLength = 256;
    let constrainedSnippet = snippet;

    if (snippet.length > maxSnippetLength) {
        constrainedSnippet = snippet.substr(0, maxSnippetLength) + '...';
    }

    return `<code>${escape(constrainedSnippet)}</code>`;
};

const buildHowToFixHtml = (failureSummary: string): string => {
    return escape(failureSummary)
        .replace(/\n  /g, '<br>- ')
        .replace(/\n /g, '<br> ')
        .replace(/\n/g, '<br>');
};

export const getIssueDetailsHtml: IssueDetailsGetter = (
    stringUtils: IssueUrlCreationUtils,
    environmentInfo: EnvironmentInfo,
    data: CreateIssueDetailsTextData,
): string => {
    const body =
        buildBodySectionHtml('Issue', buildIssueDetailsHtml(data.ruleResult.help, data.ruleResult.helpUrl, data.ruleResult.ruleId)) +
        buildBodySectionHtml('Target Application', buildApplicationHtml(data.pageTitle, data.pageUrl)) +
        buildBodySectionHtml('Element Path', escape(data.ruleResult.selector)) +
        buildBodySectionHtml('Snippet', buildSnippetHtml(data.ruleResult.html)) +
        buildBodySectionHtml('How to fix', buildHowToFixHtml(data.ruleResult.failureSummary)) +
        buildBodySectionHtml('Environment', escape(environmentInfo.browserSpec)) +
        '<br>===<br>' +
        stringUtils.getFooter(environmentInfo);

    return body;
};