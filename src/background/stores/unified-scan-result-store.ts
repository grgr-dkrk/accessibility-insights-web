// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { StoreNames } from '../../common/stores/store-names';
import { UnifiedResults } from '../../common/types/store-data/unified-data-interface';
import { UnifiedScanCompletedPayload } from '../actions/action-payloads';
import { UnifiedScanResultActions } from '../actions/unified-scan-result-actions';
import { BaseStoreImpl } from './base-store-impl';

export class UnifiedScanResultStore extends BaseStoreImpl<UnifiedResults> {
    constructor(private readonly unifiedScanResultActions: UnifiedScanResultActions) {
        super(StoreNames.UnifiedScanResultStore);
    }

    public getDefaultState(): UnifiedResults {
        const defaultValue: UnifiedResults = {
            results: null,
        };

        return defaultValue;
    }

    protected addActionListeners(): void {
        this.unifiedScanResultActions.getCurrentState.addListener(this.onGetCurrentState);
        this.unifiedScanResultActions.scanCompleted.addListener(this.onScanCompleted);
    }

    private onScanCompleted = (payload: UnifiedScanCompletedPayload): void => {
        this.state = payload.scanResult;
        this.emitChanged();
    };
}