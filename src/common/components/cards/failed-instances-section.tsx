// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { NamedFC } from 'common/react/named-fc';
import * as React from 'react';

import { TargetAppData } from '../../../common/types/store-data/unified-data-interface';
import { CardRuleResultsByStatus } from '../../types/store-data/card-view-model';
import { UserConfigurationStoreData } from '../../types/store-data/user-configuration-store';
import { ResultSection, ResultSectionDeps } from './result-section';

export type FailedInstancesSectionDeps = ResultSectionDeps;
export type FailedInstancesSectionProps = {
    deps: FailedInstancesSectionDeps;
    ruleResultsByStatus: CardRuleResultsByStatus;
    userConfigurationStoreData: UserConfigurationStoreData;
    targetAppInfo: TargetAppData;
};

export const FailedInstancesSection = NamedFC<FailedInstancesSectionProps>(
    'FailedInstancesSection',
    ({ ruleResultsByStatus, deps, userConfigurationStoreData, targetAppInfo }) => {
        if (ruleResultsByStatus == null) {
            return null;
        }

        const count = ruleResultsByStatus.fail.reduce((total, rule) => {
            return total + rule.nodes.length;
        }, 0);

        return (
            <ResultSection
                deps={deps}
                title="Failed instances"
                results={ruleResultsByStatus.fail}
                containerClassName={null}
                outcomeType="fail"
                badgeCount={count}
                userConfigurationStoreData={userConfigurationStoreData}
                targetAppInfo={targetAppInfo}
            />
        );
    },
);
