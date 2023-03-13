/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { EventTargetMixin } from 'ojs/ojeventtarget';
import CachedIteratorResultsDataProvider from 'ojs/ojcachediteratorresultsdataprovider';
import DedupDataProvider from 'ojs/ojdedupdataprovider';
import MutateEventFilteringDataProvider from 'ojs/ojmutateeventfilteringdataprovider';

function getEnhancedDataProvider(dataProvider, options) {
    var _a, _b, _c;
    let fetchCapability = (_a = options === null || options === void 0 ? void 0 : options.capabilities) === null || _a === void 0 ? void 0 : _a.fetchCapability;
    let dedupCapability = (_b = options === null || options === void 0 ? void 0 : options.capabilities) === null || _b === void 0 ? void 0 : _b.dedupCapability;
    let eventFilteringCapability = (_c = options === null || options === void 0 ? void 0 : options.capabilities) === null || _c === void 0 ? void 0 : _c.eventFilteringCapability;
    let dataProviderFetchCapability = dataProvider.getCapability('fetchCapability');
    let dataProviderDedupCapability = dataProvider.getCapability('dedup');
    let dataProviderEventFilteringCapability = dataProvider.getCapability('eventFiltering');
    let needsCaching = true;
    let needsDedup = true;
    let needsEventFiltering = true;
    const dataProviderFetchCapabilityCaching = dataProviderFetchCapability === null || dataProviderFetchCapability === void 0 ? void 0 : dataProviderFetchCapability.caching;
    if ((fetchCapability === null || fetchCapability === void 0 ? void 0 : fetchCapability.caching) == 'none' ||
        dataProviderFetchCapabilityCaching == 'all' ||
        dataProviderFetchCapabilityCaching == 'visitedByCurrentIterator') {
        needsCaching = false;
    }
    const dataProviderDedupCapabilityType = dataProviderDedupCapability === null || dataProviderDedupCapability === void 0 ? void 0 : dataProviderDedupCapability.type;
    if ((dedupCapability === null || dedupCapability === void 0 ? void 0 : dedupCapability.type) == 'none' ||
        dataProviderDedupCapabilityType == 'global' ||
        dataProviderDedupCapabilityType == 'iterator') {
        needsDedup = false;
    }
    const dataProviderEventFilteringCapabilityType = dataProviderEventFilteringCapability === null || dataProviderEventFilteringCapability === void 0 ? void 0 : dataProviderEventFilteringCapability.type;
    if ((eventFilteringCapability === null || eventFilteringCapability === void 0 ? void 0 : eventFilteringCapability.type) == 'none' ||
        dataProviderEventFilteringCapabilityType == 'global' ||
        dataProviderEventFilteringCapabilityType == 'iterator') {
        needsEventFiltering = false;
    }
    let wrappedDataProvider = dataProvider;
    if (needsCaching) {
        wrappedDataProvider = new CachedIteratorResultsDataProvider(wrappedDataProvider);
    }
    if (needsDedup) {
        wrappedDataProvider = new DedupDataProvider(wrappedDataProvider);
    }
    if (needsEventFiltering) {
        wrappedDataProvider = new MutateEventFilteringDataProvider(wrappedDataProvider);
    }
    if (dataProvider['getChildDataProvider']) {
        wrappedDataProvider = new EnhancedTreeDataProvider(dataProvider, wrappedDataProvider, options);
    }
    return wrappedDataProvider;
}
class EnhancedTreeDataProvider {
    constructor(treeDataProvider, enhancedDataProvider, options) {
        this.treeDataProvider = treeDataProvider;
        this.enhancedDataProvider = enhancedDataProvider;
        this.options = options;
        enhancedDataProvider.addEventListener(EnhancedTreeDataProvider._MUTATE, (event) => {
            this.dispatchEvent(event);
        });
        enhancedDataProvider.addEventListener(EnhancedTreeDataProvider._REFRESH, (event) => {
            this.dispatchEvent(event);
        });
        if (enhancedDataProvider.createOptimizedKeyMap) {
            this.createOptimizedKeyMap = (initialMap) => {
                return enhancedDataProvider.createOptimizedKeyMap(initialMap);
            };
        }
        if (enhancedDataProvider.createOptimizedKeySet) {
            this.createOptimizedKeySet = (initialSet) => {
                return enhancedDataProvider.createOptimizedKeySet(initialSet);
            };
        }
    }
    getChildDataProvider(parentKey) {
        const childDataProvider = this.treeDataProvider.getChildDataProvider(parentKey);
        if (childDataProvider) {
            return getEnhancedDataProvider(childDataProvider, this.options);
        }
        return null;
    }
    containsKeys(parameters) {
        return this.enhancedDataProvider.containsKeys(parameters);
    }
    fetchByKeys(parameters) {
        return this.enhancedDataProvider.fetchByKeys(parameters);
    }
    fetchByOffset(parameters) {
        return this.enhancedDataProvider.fetchByOffset(parameters);
    }
    fetchFirst(parameters) {
        return this.enhancedDataProvider.fetchFirst(parameters);
    }
    getCapability(capabilityName) {
        return this.enhancedDataProvider.getCapability(capabilityName);
    }
    getTotalSize() {
        return this.enhancedDataProvider.getTotalSize();
    }
    isEmpty() {
        return this.enhancedDataProvider.isEmpty();
    }
}
EnhancedTreeDataProvider._REFRESH = 'refresh';
EnhancedTreeDataProvider._MUTATE = 'mutate';
EventTargetMixin.applyMixin(EnhancedTreeDataProvider);

export { getEnhancedDataProvider };
