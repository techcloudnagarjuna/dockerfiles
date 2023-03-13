/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import oj from 'ojs/ojcore-base';
import ojMap from 'ojs/ojmap';
import ojSet from 'ojs/ojset';
import { DataProviderRefreshEvent, DataProviderMutationEvent, FilterFactory } from 'ojs/ojdataprovider';
import { EventTargetMixin } from 'ojs/ojeventtarget';
import { warn } from 'ojs/ojlogger';

/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/* jslint browser: true,devel:true*/
/**
 *
 * @since 4.1.0
 * @export
 * @final
 * @class ArrayDataProvider
 * @implements DataProvider
 * @classdesc This class implements {@link DataProvider}.
 *            Object representing data available from an array or observableArray. If a plain array is used then it is considered to be immutable.
 *            If an observableArray is used then for mutations, please use the observableArray functions or always call valueHasMutated() if
 *            mutating the underlying array. The decision on whether to use an array or observableArray should therefore be guided
 *            by whether the data will be mutable. This dataprovider can be used by [ListView]{@link oj.ojListView}, [NavigationList]{@link oj.ojNavigationList},
 *            [TabBar]{@link oj.ojTabBar}, and [Table]{@link oj.ojTable}.<br><br>
 *            See the ArrayDataProvider and Table - Base Table demos for examples.<br><br>
 *            The default sorting algorithm used when a sortCriteria is passed into fetchFirst is natural sort.
 *
 * <h3 id="events-section">
 *   Events
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#events-section"></a>
 * </h3>
 * Consumers can add event listeners to listen for the following event types and respond to data change.
 * <h4 id="event:mutate" class="name">
 *   mutate
 * </h4>
 * This event is fired when items have been added or removed from the data.
 * <p>
 * Event payload is found under <code class="prettyprint">event.detail</code>, which implements the {@link DataProviderMutationEventDetail} interface.
 * </p>
 *
 * <h4 id="event:refresh" class="name">
 *   refresh
 * </h4>
 * This event is fired when the data has been refreshed and components need to re-fetch the data.
 * <p>
 * This event contains no additional event payload.
 * </p>
 *
 * <i>Example of consumer listening for the "mutate" event type:</i>
 * <pre class="prettyprint"><code>var listener = function(event) {
 *   if (event.detail.remove) {
 *     var removeDetail = event.detail.remove;
 *     // Handle removed items
 *   }
 * };
 * dataProvider.addEventListener("mutate", listener);
 * </code></pre>
 *
 * @param {(Array|function():Array)} data data supported by the components
 *                                      <p>This can be either an Array, or a Knockout observableArray.</p>
 * @param {ArrayDataProvider.DeprecatedOptions=} options Options for the ArrayDataProvider
 * @ojsignature [{target: "Type",
 *               value: "class ArrayDataProvider<K, D> implements DataProvider<K, D>",
 *               genericParameters: [{"name": "K", "description": "Type of Key"}, {"name": "D", "description": "Type of Data"}]},
 *               {target: "Type",
 *               value: "ArrayDataProvider.Options<K, D> | ArrayDataProvider.DeprecatedOptions<D>",
 *               for: "options"}
 * ]
 * @ojtsimport {module: "ojdataprovider", type: "AMD", imported: ["DataProvider", "SortCriterion", "FetchByKeysParameters",
 * "ContainsKeysResults","FetchByKeysResults","FetchByOffsetParameters","FetchByOffsetResults",
 * "FetchListResult","FetchListParameters"]}
 * @ojtsmodule
 * @ojtsexample
 * // First initialize an array
 * let deptArray = [{DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200},
 *                  {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200},
 *                  {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200}];
 * // Then create an ArrayDataProvider object with the array
 * let dataprovider = new ArrayDataProvider(deptArray, {keyAttributes: 'DepartmentId'});
 * @example
 * // First initialize an array
 * var deptArray = [{DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200},
 *                  {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200},
 *                  {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200}];
 * // Then create an ArrayDataProvider object with the array
 * var dataprovider = new ArrayDataProvider(deptArray, {keyAttributes: 'DepartmentId'});
 * @ojtsexample
 * // Data and Key array
 * let deptArray = [{DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200},
 *                  {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200},
 *                  {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200}];
 * let keysArray = [10, 20, 30];
 * let dataprovider = new ArrayDataProvider(deptArray, {keyAttributes: 'DepartmentId', keys: keysArray});
 * @example
 * // Data and Key array
 * var deptArray = [{DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200},
 *                  {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200},
 *                  {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200}];
 * var keysArray = [10, 20, 30];
 * var dataprovider = new ArrayDataProvider(deptArray, {keyAttributes: 'DepartmentId', keys: keysArray});
 */

/**
 * @typedef {Object} ArrayDataProvider.Options
 * @property {ArrayDataProvider.SortComparators=} sortComparators - Optional sortComparator to use for sort.
 * @property {SortCriterion=} implicitSort - Optional array of {@link sortCriterion} used to specify sort information when the data loaded into the dataprovider is already sorted.
 * This is used for cases where we would like display some indication that the data is already sorted.
 * For example, ojTable will display the column sort indicator for the corresponding column in either ascending or descending order upon initial render.
 * This option is not used for cases where we want the ArrayDataProvider to apply a sort on initial fetch.
 * For those cases, please wrap in a ListDataProviderView and set the sortCriteria property on it.
 * @property {any=} keys - Optional keys for the data. If not supplied, then the keys are generated according options.keyAttributes. If that is also not supplied then index is used as key.
 *                                                 <p>If this option is specified, the caller is responsible for maintaining both the keys and data arrays to keep them in sync.
 *                                                 When the data need to be changed, the corresponding changes must be made to the keys array first before the data change.</p>
 * @property {string=} keyAttributes - Optionally the field name which stores the key in the data. Can be a string denoting a single key attribute or an array
 *                                                  of strings for multiple key attributes. Please note that the ids in ArrayDataProvider must always be unique. Please do not introduce duplicate ids, even during temporary mutation operations. @index causes ArrayDataProvider to use index as key and @value will cause ArrayDataProvider to
 *                                                  use all attributes as key. @index is the default.
 *                                                  <p>With "@index", the key generation is based on the item index only initially.  The key for an item, once assigned,
 *                                                  will not change even if the item index changes (e.g. by inserting/removing items from the array).  Assigned keys will
 *                                                  never be reassigned.  If the array is replaced with new items, the new items will be assigned keys that are different
 *                                                  from their indices.  In general, caller should specify keyAttributes whenever possible and should never assume that the
 *                                                  generated keys are the same as the item indices.</p>
 *                                                  <p>This option is ignored if the "keys" option is specified.</p>
 * @property {string=} textFilterAttributes - Optionally specify which attributes the filter should be applied on when a TextFilter filterCriteria is specified. If this option is not specified then the filter will be applied to all attributes.
 * @ojsignature [
 *  {target: "Type", value: "<K, D>", for: "genericTypeParameters"},
 *  {target: "Type", value: "ArrayDataProvider.SortComparators<D>", for: "sortComparators"},
 *  {target: "Type", value: "Array<SortCriterion<D>>", for: "implicitSort"},
 *  {target: "Type", value: "K[] | (() => K[])", for: "keys"},
 *  {target: "Type", value: "string | string[]", for: "keyAttributes"},
 *  {target: "Type", value: "string[]", for: "textFilterAttributes"},
 * ]
 */

/**
 * @typedef {Object} ArrayDataProvider.DeprecatedOptions
 * @property {ArrayDataProvider.SortComparators=} sortComparators - Optional sortComparator to use for sort.
 * @property {SortCriterion=} implicitSort - Optional array of {@link sortCriterion} used to specify sort information when the data loaded into the dataprovider is already sorted.
 * This is used for cases where we would like display some indication that the data is already sorted.
 * For example, ojTable will display the column sort indicator for the corresponding column in either ascending or descending order upon initial render.
 * This option is not used for cases where we want the ArrayDataProvider to apply a sort on initial fetch.
 * For those cases, please wrap in a ListDataProviderView and set the sortCriteria property on it.
 * @property {any=} keys - Optional keys for the data. If not supplied, then the keys are generated according options.keyAttributes. If that is also not supplied then index is used as key.
 *                                                 <p>If this option is specified, the caller is responsible for maintaining both the keys and data arrays to keep them in sync.
 *                                                 When the data need to be changed, the corresponding changes must be made to the keys array first before the data change.</p>
 * @property {string=} idAttribute - <span class="important">Deprecated: this option is deprecated and will be removed in the future.
 *                                                  Please use the keyAttributes option instead.</span><br><br>
 *                                                  Optionally the field name which stores the id in the data. Can be a string denoting a single key attribute or an array
 *                                                  of strings for multiple key attributes. Dot notation can be used to specify nested attribute (e.g. 'attr.id'). Please note that the ids in ArrayDataProvider must always be unique. Please do not introduce duplicate ids, even during temporary mutation operations.
 *                                                  @index causes ArrayDataProvider to use index as key and @value will cause ArrayDataProvider to
 *                                                  use all attributes as key. @index is the default.
 * @property {string=} keyAttributes - Optionally the field name which stores the key in the data. Can be a string denoting a single key attribute or an array
 *                                                  of strings for multiple key attributes. Please note that the ids in ArrayDataProvider must always be unique. Please do not introduce duplicate ids, even during temporary mutation operations. @index causes ArrayDataProvider to use index as key and @value will cause ArrayDataProvider to
 *                                                  use all attributes as key. @index is the default.
 *                                                  <p>With "@index", the key generation is based on the item index only initially.  The key for an item, once assigned,
 *                                                  will not change even if the item index changes (e.g. by inserting/removing items from the array).  Assigned keys will
 *                                                  never be reassigned.  If the array is replaced with new items, the new items will be assigned keys that are different
 *                                                  from their indices.  In general, caller should specify keyAttributes whenever possible and should never assume that the
 *                                                  generated keys are the same as the item indices.</p>
 *                                                  <p>This option is ignored if the "keys" option is specified.</p>
 * @property {string=} textFilterAttributes - Optionally specify which attributes the filter should be applied on when a TextFilter filterCriteria is specified. If this option is not specified then the filter will be applied to all attributes.
 * @ojsignature [
 *  {target: "Type", value: "<D>", for: "genericTypeParameters"},
 *  {target: "Type", value: "ArrayDataProvider.SortComparators<D>", for: "sortComparators"},
 *  {target: "Type", value: "Array<SortCriterion<D>>", for: "implicitSort"},
 *  {target: "Type", value: "any", for: "keys"},
 *  {target: "Type", value: "string|string[]", for: "idAttribute"},
 *  {target: "Type", value: "string|string[]", for: "keyAttributes"},
 *  {target: "Type", value: "string[]", for: "textFilterAttributes"},
 * ]
 * @ojdeprecated {since: '10.1.0', description: 'Use type Options instead of object for options'}
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name containsKeys
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name createOptimizedKeySet
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name createOptimizedKeyMap
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name fetchFirst
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name fetchByKeys
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name fetchByOffset
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name getCapability
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name getTotalSize
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name isEmpty
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name addEventListener
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name removeEventListener
 */

/**
 * @inheritdoc
 * @memberof ArrayDataProvider
 * @instance
 * @method
 * @name dispatchEvent
 */

/**
 * End of jsdoc
 */

class ArrayDataProvider {
    constructor(data, options) {
        this.data = data;
        this.options = options;
        this.Item = class {
            constructor(metadata, data) {
                this.metadata = metadata;
                this.data = data;
                this[ArrayDataProvider._METADATA] = metadata;
                this[ArrayDataProvider._DATA] = data;
            }
        };
        this.ItemMetadata = class {
            constructor(key) {
                this.key = key;
                this[ArrayDataProvider._KEY] = key;
            }
        };
        this.FetchByKeysResults = class {
            constructor(fetchParameters, results) {
                this.fetchParameters = fetchParameters;
                this.results = results;
                this[ArrayDataProvider._FETCHPARAMETERS] = fetchParameters;
                this[ArrayDataProvider._RESULTS] = results;
            }
        };
        this.ContainsKeysResults = class {
            constructor(containsParameters, results) {
                this.containsParameters = containsParameters;
                this.results = results;
                this[ArrayDataProvider._CONTAINSPARAMETERS] = containsParameters;
                this[ArrayDataProvider._RESULTS] = results;
            }
        };
        this.FetchByOffsetResults = class {
            constructor(fetchParameters, results, done) {
                this.fetchParameters = fetchParameters;
                this.results = results;
                this.done = done;
                this[ArrayDataProvider._FETCHPARAMETERS] = fetchParameters;
                this[ArrayDataProvider._RESULTS] = results;
                this[ArrayDataProvider._DONE] = done;
            }
        };
        this.FetchListParameters = class {
            constructor(size, sortCriteria, filterCriterion, attributes) {
                this.size = size;
                this.sortCriteria = sortCriteria;
                this.filterCriterion = filterCriterion;
                this.attributes = attributes;
                this[ArrayDataProvider._SIZE] = size;
                this[ArrayDataProvider._SORTCRITERIA] = sortCriteria;
                this[ArrayDataProvider._FILTERCRITERION] = filterCriterion;
                this[ArrayDataProvider._ATTRIBUTES] = attributes;
            }
        };
        this.FetchListResult = class {
            constructor(fetchParameters, data, metadata) {
                this.fetchParameters = fetchParameters;
                this.data = data;
                this.metadata = metadata;
                this[ArrayDataProvider._FETCHPARAMETERS] = fetchParameters;
                this[ArrayDataProvider._DATA] = data;
                this[ArrayDataProvider._METADATA] = metadata;
            }
        };
        this.AsyncIterable = class {
            constructor(_asyncIterator) {
                this._asyncIterator = _asyncIterator;
                this[Symbol.asyncIterator] = function () {
                    return this._asyncIterator;
                };
            }
        };
        this.AsyncIterator = class {
            constructor(_parent, _nextFunc, _params, _offset) {
                this._parent = _parent;
                this._nextFunc = _nextFunc;
                this._params = _params;
                this._offset = _offset;
                this._clientId = (_params && _params.clientId) || Symbol();
                _parent._mapClientIdToOffset.set(this._clientId, _offset);
                this._cacheObj = {};
                this._cacheObj[ArrayDataProvider._MUTATIONSEQUENCENUM] = _parent._mutationSequenceNum;
            }
            ['next']() {
                const cachedOffset = this._parent._mapClientIdToOffset.get(this._clientId);
                let resultObj = this._nextFunc(this._params, cachedOffset, false, this._cacheObj);
                this._parent._mapClientIdToOffset.set(this._clientId, resultObj.offset);
                return Promise.resolve(resultObj.result);
            }
        };
        this.AsyncIteratorYieldResult = class {
            constructor(value) {
                this.value = value;
                this[ArrayDataProvider._VALUE] = value;
                this[ArrayDataProvider._DONE] = false;
            }
        };
        this.AsyncIteratorReturnResult = class {
            constructor(value) {
                this.value = value;
                this[ArrayDataProvider._VALUE] = value;
                this[ArrayDataProvider._DONE] = true;
            }
        };
        this.DataProviderMutationEventDetail = class {
            constructor(_parent, add, remove, update) {
                this._parent = _parent;
                this.add = add;
                this.remove = remove;
                this.update = update;
                this[ArrayDataProvider._ADD] = add;
                this[ArrayDataProvider._REMOVE] = remove;
                this[ArrayDataProvider._UPDATE] = update;
                Object.defineProperty(this, ArrayDataProvider._PARENT, { value: _parent, enumerable: false });
            }
        };
        this.DataProviderOperationEventDetail = class {
            constructor(_parent, keys, metadata, data, indexes) {
                this._parent = _parent;
                this.keys = keys;
                this.metadata = metadata;
                this.data = data;
                this.indexes = indexes;
                this[ArrayDataProvider._KEYS] = keys;
                this[ArrayDataProvider._METADATA] = metadata;
                this[ArrayDataProvider._DATA] = data;
                this[ArrayDataProvider._INDEXES] = indexes;
                Object.defineProperty(this, ArrayDataProvider._PARENT, { value: _parent, enumerable: false });
            }
        };
        this.DataProviderAddOperationEventDetail = class {
            constructor(_parent, keys, afterKeys, addBeforeKeys, metadata, data, indexes) {
                this._parent = _parent;
                this.keys = keys;
                this.afterKeys = afterKeys;
                this.addBeforeKeys = addBeforeKeys;
                this.metadata = metadata;
                this.data = data;
                this.indexes = indexes;
                this[ArrayDataProvider._KEYS] = keys;
                this[ArrayDataProvider._AFTERKEYS] = afterKeys;
                this[ArrayDataProvider._ADDBEFOREKEYS] = addBeforeKeys;
                this[ArrayDataProvider._METADATA] = metadata;
                this[ArrayDataProvider._DATA] = data;
                this[ArrayDataProvider._INDEXES] = indexes;
                Object.defineProperty(this, ArrayDataProvider._PARENT, { value: _parent, enumerable: false });
            }
        };
        this._cachedIndexMap = [];
        this._sequenceNum = 0;
        this._mutationSequenceNum = 0;
        this._mapClientIdToOffset = new Map();
        this._subscribeObservableArray(data);
        if (options != null && options[ArrayDataProvider._KEYS] != null) {
            this._keysSpecified = true;
            this._keys = options[ArrayDataProvider._KEYS];
        }
    }
    containsKeys(params) {
        let self = this;
        return this.fetchByKeys(params).then(function (fetchByKeysResult) {
            let results = new ojSet();
            params[ArrayDataProvider._KEYS].forEach(function (key) {
                if (fetchByKeysResult[ArrayDataProvider._RESULTS].get(key) != null) {
                    results.add(key);
                }
            });
            return Promise.resolve(new self.ContainsKeysResults(params, results));
        });
    }
    fetchByKeys(params) {
        let self = this;
        this._generateKeysIfNeeded();
        let results = new ojMap();
        let keys = this._getKeys();
        let fetchAttributes = params != null ? params[ArrayDataProvider._ATTRIBUTES] : null;
        let findKeyIndex, i = 0;
        if (params) {
            let rowData = self._getRowData();
            params[ArrayDataProvider._KEYS].forEach(function (searchKey) {
                findKeyIndex = null;
                for (i = 0; i < keys.length; i++) {
                    if (oj.Object.compareValues(keys[i], searchKey)) {
                        findKeyIndex = i;
                        break;
                    }
                }
                if (findKeyIndex != null && findKeyIndex >= 0) {
                    let row = rowData[findKeyIndex];
                    if (fetchAttributes && fetchAttributes.length > 0) {
                        let updatedData = {};
                        self._filterRowAttributes(fetchAttributes, row, updatedData);
                        row = updatedData;
                    }
                    results.set(searchKey, new self.Item(new self.ItemMetadata(searchKey), row));
                }
            });
            return Promise.resolve(new self.FetchByKeysResults(params, results));
        }
        else {
            return Promise.reject('Keys are a required parameter');
        }
    }
    fetchByOffset(params) {
        let self = this;
        let size = params != null ? params[ArrayDataProvider._SIZE] : -1;
        let sortCriteria = params != null ? params[ArrayDataProvider._SORTCRITERIA] : null;
        let offset = params != null
            ? params[ArrayDataProvider._OFFSET] > 0
                ? params[ArrayDataProvider._OFFSET]
                : 0
            : 0;
        let fetchAttributes = params != null ? params[ArrayDataProvider._ATTRIBUTES] : null;
        let filterCriterion = params != null ? params[ArrayDataProvider._FILTERCRITERION] : null;
        this._generateKeysIfNeeded();
        let resultsArray = [];
        let done = true;
        if (params) {
            let fetchParams = new this.FetchListParameters(size, sortCriteria, filterCriterion, fetchAttributes);
            let iteratorResults = this._fetchFrom(fetchParams, offset, true).result;
            let value = iteratorResults[ArrayDataProvider._VALUE];
            done = iteratorResults[ArrayDataProvider._DONE];
            let data = value[ArrayDataProvider._DATA];
            let keys = value[ArrayDataProvider._METADATA].map(function (value) {
                return value[ArrayDataProvider._KEY];
            });
            resultsArray = data.map(function (value, index) {
                return new self.Item(new self.ItemMetadata(keys[index]), value);
            });
            return Promise.resolve(new this.FetchByOffsetResults(params, resultsArray, done));
        }
        else {
            return Promise.reject('Offset is a required parameter');
        }
    }
    fetchFirst(params) {
        let offset = 0;
        return new this.AsyncIterable(new this.AsyncIterator(this, this._fetchFrom.bind(this), params, offset));
    }
    getCapability(capabilityName) {
        return ArrayDataProvider.getCapability(capabilityName);
    }
    static _getFetchCapability() {
        let exclusionFeature = new Set();
        exclusionFeature.add('exclusion');
        return {
            caching: 'all',
            attributeFilter: {
                expansion: {},
                ordering: {},
                defaultShape: {
                    features: exclusionFeature
                }
            }
        };
    }
    static getCapability(capabilityName) {
        if (capabilityName == 'sort') {
            return { attributes: 'multiple' };
        }
        else if (capabilityName == 'fetchByKeys') {
            return Object.assign({ implementation: 'lookup' }, ArrayDataProvider._getFetchCapability());
        }
        else if (capabilityName == 'fetchByOffset') {
            return Object.assign({ implementation: 'randomAccess' }, ArrayDataProvider._getFetchCapability());
        }
        else if (capabilityName == 'fetchFirst') {
            return Object.assign({ iterationSpeed: 'immediate' }, ArrayDataProvider._getFetchCapability());
        }
        else if (capabilityName == 'fetchCapability') {
            return ArrayDataProvider._getFetchCapability();
        }
        else if (capabilityName == 'filter') {
            return {
                operators: ['$co', '$eq', '$ew', '$pr', '$gt', '$ge', '$lt', '$le', '$ne', '$regex', '$sw'],
                attributeExpression: ['*'],
                textFilter: {}
            };
        }
        return null;
    }
    getTotalSize() {
        return Promise.resolve(this._getRowData().length);
    }
    isEmpty() {
        return this._getRowData().length > 0 ? 'no' : 'yes';
    }
    createOptimizedKeySet(initialSet) {
        return new ojSet(initialSet);
    }
    createOptimizedKeyMap(initialMap) {
        if (initialMap) {
            let map = new ojMap();
            initialMap.forEach(function (value, key) {
                map.set(key, value);
            });
            return map;
        }
        return new ojMap();
    }
    _getRowData() {
        if (!(this[ArrayDataProvider._DATA] instanceof Array)) {
            return this[ArrayDataProvider._DATA]();
        }
        return this[ArrayDataProvider._DATA];
    }
    _getKeys() {
        if (this._keys != null && !(this._keys instanceof Array)) {
            return this._keys();
        }
        return this._keys;
    }
    _indexOfKey(searchKey) {
        let keys = this._getKeys();
        let keyIndex = -1;
        let i;
        for (i = 0; i < keys.length; i++) {
            if (oj.Object.compareValues(keys[i], searchKey)) {
                keyIndex = i;
                break;
            }
        }
        return keyIndex;
    }
    _adjustIteratorOffset(removeIndexes, addIndexes) {
        this._mapClientIdToOffset.forEach((offset, clientId) => {
            let deleteCount = 0;
            if (removeIndexes) {
                removeIndexes.forEach(function (index) {
                    if (index < offset) {
                        ++deleteCount;
                    }
                });
            }
            offset -= deleteCount;
            if (addIndexes) {
                addIndexes.forEach(function (index) {
                    if (index < offset) {
                        ++offset;
                    }
                });
            }
            this._mapClientIdToOffset.set(clientId, offset);
        });
    }
    _subscribeObservableArray(data) {
        if (!(data instanceof Array)) {
            if (!this._isObservableArray(data)) {
                throw new Error('Invalid data type. ArrayDataProvider only supports Array or observableArray.');
            }
            let self = this;
            data['subscribe'](function (changes) {
                let i, j, id, index, status, dataArray = [], keyArray = [], indexArray = [], metadataArray = [], afterKeyArray = [];
                let addCount = 0;
                let deleteCount = 0;
                self._mutationSequenceNum++;
                let onlyAdds = true;
                let onlyDeletes = true;
                changes.forEach(function (change) {
                    if (change['status'] === 'deleted') {
                        onlyAdds = false;
                        ++deleteCount;
                    }
                    else if (change['status'] === 'added') {
                        onlyDeletes = false;
                        ++addCount;
                    }
                });
                let updatedIndexes = [];
                let removeDuplicate = [];
                let operationUpdateEventDetail = null;
                let operationAddEventDetail = null;
                let operationRemoveEventDetail = null;
                let generatedKeys = self._generateKeysIfNeeded();
                if (!onlyAdds && !onlyDeletes) {
                    for (i = 0; i < changes.length; i++) {
                        index = changes[i].index;
                        status = changes[i].status;
                        let iKey = self._getId(changes[i].value);
                        for (j = 0; j < changes.length; j++) {
                            if (j != i &&
                                index === changes[j].index &&
                                status !== changes[j]['status'] &&
                                updatedIndexes.indexOf(i) < 0 &&
                                removeDuplicate.indexOf(i) < 0) {
                                if (iKey == null ||
                                    oj.Object.compareValues(iKey, self._getId(changes[j].value))) {
                                    if (status === 'deleted') {
                                        removeDuplicate.push(i);
                                        updatedIndexes.push(j);
                                    }
                                    else {
                                        removeDuplicate.push(j);
                                        updatedIndexes.push(i);
                                    }
                                }
                            }
                        }
                    }
                    for (i = 0; i < changes.length; i++) {
                        if (updatedIndexes.indexOf(i) >= 0) {
                            let key = self._getKeys()[changes[i].index];
                            keyArray.push(key);
                            dataArray.push(changes[i].value);
                            indexArray.push(changes[i].index);
                        }
                    }
                    if (keyArray.length > 0) {
                        metadataArray = keyArray.map(function (value) {
                            return new self.ItemMetadata(value);
                        });
                        let keySet = new ojSet();
                        keyArray.map(function (key) {
                            keySet.add(key);
                        });
                        operationUpdateEventDetail = new self.DataProviderOperationEventDetail(self, keySet, metadataArray, dataArray, indexArray);
                    }
                }
                (dataArray = []), (keyArray = []), (indexArray = []);
                if (!onlyAdds) {
                    for (i = 0; i < changes.length; i++) {
                        if (changes[i]['status'] === 'deleted' &&
                            updatedIndexes.indexOf(i) < 0 &&
                            removeDuplicate.indexOf(i) < 0) {
                            id = self._getId(changes[i].value);
                            if (id == null) {
                                if (generatedKeys) {
                                    id = changes[i].index;
                                }
                                else {
                                    id = self._getKeys()[changes[i].index];
                                }
                            }
                            keyArray.push(id);
                            dataArray.push(changes[i].value);
                            indexArray.push(changes[i].index);
                        }
                    }
                    if (keyArray.length > 0) {
                        keyArray.map(function (key) {
                            let keyIndex = self._indexOfKey(key);
                            if (keyIndex >= 0) {
                                self._keys.splice(keyIndex, 1);
                            }
                        });
                    }
                    if (keyArray.length > 0) {
                        metadataArray = keyArray.map(function (value) {
                            return new self.ItemMetadata(value);
                        });
                        let keySet = new ojSet();
                        keyArray.map(function (key) {
                            keySet.add(key);
                        });
                        operationRemoveEventDetail = new self.DataProviderOperationEventDetail(self, keySet, metadataArray, dataArray, indexArray);
                    }
                }
                (dataArray = []), (keyArray = []), (indexArray = []);
                if (!onlyDeletes) {
                    let isInitiallyEmpty = self._getKeys() != null ? (self._getKeys().length > 0 ? false : true) : true;
                    for (i = 0; i < changes.length; i++) {
                        if (changes[i]['status'] === 'added' &&
                            updatedIndexes.indexOf(i) < 0 &&
                            removeDuplicate.indexOf(i) < 0) {
                            id = self._getId(changes[i].value);
                            if (id == null && (generatedKeys || self._keysSpecified)) {
                                id = self._getKeys()[changes[i].index];
                            }
                            if (id == null) {
                                id = self._sequenceNum++;
                                self._keys.splice(changes[i].index, 0, id);
                            }
                            else if (isInitiallyEmpty || self._indexOfKey(id) === -1) {
                                self._keys.splice(changes[i].index, 0, id);
                            }
                            else if (!generatedKeys && !self._keysSpecified) {
                                warn('added row has duplicate key ' + id);
                                self._keys.splice(changes[i].index, 0, id);
                            }
                            keyArray.push(id);
                            dataArray.push(changes[i].value);
                            indexArray.push(changes[i].index);
                        }
                    }
                    for (i = 0; i < changes.length; i++) {
                        if (changes[i]['status'] === 'added' &&
                            updatedIndexes.indexOf(i) < 0 &&
                            removeDuplicate.indexOf(i) < 0) {
                            let afterKey = self._getKeys()[changes[i].index + 1];
                            afterKey = afterKey == null ? null : afterKey;
                            afterKeyArray.push(afterKey);
                        }
                    }
                    if (keyArray.length > 0) {
                        metadataArray = keyArray.map(function (value) {
                            return new self.ItemMetadata(value);
                        });
                        let keySet = new ojSet();
                        keyArray.map(function (key) {
                            keySet.add(key);
                        });
                        let afterKeySet = new ojSet();
                        afterKeyArray.map(function (key) {
                            afterKeySet.add(key);
                        });
                        operationAddEventDetail = new self.DataProviderAddOperationEventDetail(self, keySet, afterKeySet, afterKeyArray, metadataArray, dataArray, indexArray);
                    }
                }
                self._fireMutationEvent(operationAddEventDetail, operationRemoveEventDetail, operationUpdateEventDetail);
            }, null, 'arrayChange');
            data['subscribe'](function (changes) {
                var _a, _b, _c, _d;
                if (self._mutationEvent) {
                    const detail = self._mutationEvent['detail'];
                    self._adjustIteratorOffset((_a = detail.remove) === null || _a === void 0 ? void 0 : _a.indexes, (_b = detail.add) === null || _b === void 0 ? void 0 : _b.indexes);
                    self.dispatchEvent(self._mutationEvent);
                }
                else if (self._mutationRemoveEvent ||
                    self._mutationAddEvent ||
                    self._mutationUpdateEvent) {
                    if (self._mutationRemoveEvent) {
                        const detail = self._mutationRemoveEvent['detail'];
                        self._adjustIteratorOffset((_c = detail.remove) === null || _c === void 0 ? void 0 : _c.indexes, null);
                        self.dispatchEvent(self._mutationRemoveEvent);
                    }
                    if (self._mutationAddEvent) {
                        const detail = self._mutationAddEvent['detail'];
                        self._adjustIteratorOffset(null, (_d = detail.add) === null || _d === void 0 ? void 0 : _d.indexes);
                        self.dispatchEvent(self._mutationAddEvent);
                    }
                    if (self._mutationUpdateEvent) {
                        self.dispatchEvent(self._mutationUpdateEvent);
                    }
                }
                else {
                    self.dispatchEvent(new DataProviderRefreshEvent());
                }
                self._mutationEvent = null;
                self._mutationRemoveEvent = null;
                self._mutationAddEvent = null;
                self._mutationUpdateEvent = null;
            }, null, 'change');
        }
    }
    _fireMutationEvent(operationAddEventDetail, operationRemoveEventDetail, operationUpdateEventDetail) {
        let mutationEventDetail = new this.DataProviderMutationEventDetail(this, operationAddEventDetail, operationRemoveEventDetail, operationUpdateEventDetail);
        this._mutationEvent = new DataProviderMutationEvent(mutationEventDetail);
    }
    _hasSamePropValue(operationEventDetail1, operationEventDetail2, prop) {
        const errStr = '_hasSamePropValue is true';
        try {
            if (operationEventDetail1 && operationEventDetail1[prop]) {
                operationEventDetail1[prop].forEach(function (prop1) {
                    if (operationEventDetail2 && operationEventDetail2[prop]) {
                        operationEventDetail2[prop].forEach(function (prop2) {
                            if (oj.Object.compareValues(prop1, prop2)) {
                                throw errStr;
                            }
                        });
                    }
                });
            }
        }
        catch (e) {
            if (e === errStr) {
                return true;
            }
            else {
                throw e;
            }
        }
        return false;
    }
    _isObservableArray(obj) {
        return typeof obj == 'function' && obj.subscribe && !(obj['destroyAll'] === undefined);
    }
    _generateKeysIfNeeded() {
        if (this._keys == null) {
            let keyAttributes = this.options != null
                ? this.options[ArrayDataProvider._KEYATTRIBUTES] ||
                    this.options[ArrayDataProvider._IDATTRIBUTE]
                : null;
            this._keys = [];
            let rowData = this._getRowData();
            let id, i = 0;
            for (i = 0; i < rowData.length; i++) {
                id = this._getId(rowData[i]);
                if (id == null || keyAttributes == '@index') {
                    id = this._sequenceNum++;
                }
                this._keys[i] = id;
            }
            return true;
        }
        return false;
    }
    _getId(row) {
        let id;
        let keyAttributes = null;
        if (this.options != null) {
            if (this.options[ArrayDataProvider._KEYATTRIBUTES] != null) {
                keyAttributes = this.options[ArrayDataProvider._KEYATTRIBUTES];
            }
            else if (this.options[ArrayDataProvider._IDATTRIBUTE] != null) {
                keyAttributes = this.options[ArrayDataProvider._IDATTRIBUTE];
            }
        }
        if (keyAttributes != null) {
            if (Array.isArray(keyAttributes)) {
                let i;
                id = [];
                for (i = 0; i < keyAttributes.length; i++) {
                    id[i] = this._getVal(row, keyAttributes[i]);
                }
            }
            else if (keyAttributes == '@value') {
                id = this._getAllVals(row);
            }
            else {
                id = this._getVal(row, keyAttributes);
            }
            return id;
        }
        else {
            return null;
        }
    }
    _getVal(val, attr) {
        if (typeof attr == 'string') {
            let dotIndex = attr.indexOf('.');
            if (dotIndex > 0) {
                let startAttr = attr.substring(0, dotIndex);
                let endAttr = attr.substring(dotIndex + 1);
                let subObj = val[startAttr];
                if (subObj) {
                    return this._getVal(subObj, endAttr);
                }
            }
        }
        if (typeof val[attr] == 'function') {
            return val[attr]();
        }
        return val[attr];
    }
    _getAllVals(val) {
        let self = this;
        return Object.keys(val).map(function (key) {
            return self._getVal(val, key);
        });
    }
    _fetchFrom(params, offset, useHasMore, cacheObj) {
        let self = this;
        let fetchAttributes = params != null ? params[ArrayDataProvider._ATTRIBUTES] : null;
        this._generateKeysIfNeeded();
        let sortCriteria = params != null ? params[ArrayDataProvider._SORTCRITERIA] : null;
        let indexMap = this._getCachedIndexMap(sortCriteria, cacheObj);
        let rowData = this._getRowData();
        let mappedData = indexMap.map(function (index) {
            let row = rowData[index];
            return row;
        });
        let mappedKeys = indexMap.map(function (index) {
            return self._getKeys()[index];
        });
        let fetchSize = params != null
            ? params[ArrayDataProvider._SIZE] > 0
                ? params[ArrayDataProvider._SIZE]
                : params[ArrayDataProvider._SIZE] < 0
                    ? self._getKeys().length
                    : 25
            : 25;
        let hasMore = offset + fetchSize < mappedData.length ? true : false;
        let mergedSortCriteria = this._mergeSortCriteria(sortCriteria);
        if (mergedSortCriteria != null) {
            params = params || {};
            params[ArrayDataProvider._SORTCRITERIA] = mergedSortCriteria;
        }
        let resultData = [];
        let resultKeys = [];
        let updatedOffset = 0;
        let filteredResultData;
        if (params != null && params[ArrayDataProvider._FILTERCRITERION]) {
            let filterCriterion = null;
            filterCriterion = FilterFactory.getFilter({
                filterDef: params[ArrayDataProvider._FILTERCRITERION],
                filterOptions: this.options
            });
            let i = 0;
            while (resultData.length < fetchSize && i < mappedData.length) {
                if (filterCriterion.filter(mappedData[i])) {
                    if (updatedOffset >= offset) {
                        resultData.push(mappedData[i]);
                        resultKeys.push(mappedKeys[i]);
                    }
                    updatedOffset++;
                }
                i++;
            }
            hasMore = i < mappedData.length ? true : false;
        }
        else {
            resultData = mappedData.slice(offset, offset + fetchSize);
            resultKeys = mappedKeys.slice(offset, offset + fetchSize);
        }
        updatedOffset = offset + resultData.length;
        filteredResultData = resultData.map(function (row) {
            if (fetchAttributes && fetchAttributes.length > 0) {
                let updatedData = {};
                self._filterRowAttributes(fetchAttributes, row, updatedData);
                row = updatedData;
            }
            return row;
        });
        let resultMetadata = resultKeys.map(function (value) {
            return new self.ItemMetadata(value);
        });
        let result = new this.FetchListResult(params, filteredResultData, resultMetadata);
        if (useHasMore ? hasMore : result.data.length > 0) {
            return {
                result: new this.AsyncIteratorYieldResult(result),
                offset: updatedOffset
            };
        }
        else {
            return {
                result: new this.AsyncIteratorReturnResult(result),
                offset: updatedOffset
            };
        }
    }
    _getCachedIndexMap(sortCriteria, cacheObj) {
        if (cacheObj &&
            cacheObj['indexMap'] &&
            cacheObj[ArrayDataProvider._MUTATIONSEQUENCENUM] === this._mutationSequenceNum) {
            return cacheObj['indexMap'];
        }
        let dataIndexes = this._getRowData().map(function (value, index) {
            return index;
        });
        let indexMap = this._sortData(dataIndexes, sortCriteria);
        if (cacheObj) {
            cacheObj['indexMap'] = indexMap;
            cacheObj[ArrayDataProvider._MUTATIONSEQUENCENUM] = this._mutationSequenceNum;
        }
        return indexMap;
    }
    _sortData(indexMap, sortCriteria) {
        let self = this;
        let rowData = this._getRowData();
        let indexedData = indexMap.map(function (index) {
            return { index: index, value: rowData[index] };
        });
        if (sortCriteria != null) {
            indexedData.sort(this._getSortComparator(sortCriteria));
        }
        return indexedData.map(function (item) {
            return item.index;
        });
    }
    _getSortComparator(sortCriteria) {
        let self = this;
        return function (x, y) {
            let sortComparators = self.options != null ? self.options[ArrayDataProvider._SORTCOMPARATORS] : null;
            let i, direction, attribute, comparator, xval, yval;
            for (i = 0; i < sortCriteria.length; i++) {
                direction = sortCriteria[i][ArrayDataProvider._DIRECTION];
                attribute = sortCriteria[i][ArrayDataProvider._ATTRIBUTE];
                comparator = null;
                if (sortComparators != null) {
                    comparator = sortComparators[ArrayDataProvider._COMPARATORS].get(attribute);
                }
                xval = self._getVal(x.value, attribute);
                yval = self._getVal(y.value, attribute);
                if (comparator != null) {
                    let descendingResult = direction == 'descending' ? -1 : 1;
                    let comparatorResult = comparator(xval, yval) * descendingResult;
                    if (comparatorResult != 0) {
                        return comparatorResult;
                    }
                }
                else {
                    let compareResult = 0;
                    let strX = typeof xval === 'string' ? xval : new String(xval).toString();
                    let strY = typeof yval === 'string' ? yval : new String(yval).toString();
                    if (direction == 'ascending') {
                        compareResult = strX.localeCompare(strY, undefined, {
                            numeric: true,
                            sensitivity: 'base'
                        });
                    }
                    else {
                        compareResult = strY.localeCompare(strX, undefined, {
                            numeric: true,
                            sensitivity: 'base'
                        });
                    }
                    if (compareResult != 0) {
                        return compareResult;
                    }
                }
            }
            return 0;
        };
    }
    _mergeSortCriteria(sortCriteria) {
        let implicitSort = this.options != null ? this.options[ArrayDataProvider._IMPLICITSORT] : null;
        if (implicitSort != null) {
            if (sortCriteria == null) {
                return implicitSort;
            }
            let mergedSortCriteria = sortCriteria.slice(0);
            let i, j, found;
            for (i = 0; i < implicitSort.length; i++) {
                found = false;
                for (j = 0; j < mergedSortCriteria.length; j++) {
                    if (mergedSortCriteria[j][ArrayDataProvider._ATTRIBUTE] ==
                        implicitSort[i][ArrayDataProvider._ATTRIBUTE]) {
                        found = true;
                    }
                }
                if (!found) {
                    mergedSortCriteria.push(implicitSort[i]);
                }
            }
            return mergedSortCriteria;
        }
        else {
            return sortCriteria;
        }
    }
    _filterRowAttributes(fetchAttribute, data, updatedData) {
        let self = this;
        if (Array.isArray(fetchAttribute)) {
            let fetchAllAttributes = false;
            fetchAttribute.forEach(function (key) {
                if (key == ArrayDataProvider._ATDEFAULT || key.name == ArrayDataProvider._ATDEFAULT) {
                    fetchAllAttributes = true;
                }
            });
            let i;
            Object.keys(data).forEach(function (dataAttr) {
                if (fetchAllAttributes) {
                    let excludeAttribute = false;
                    let fetchAttr = dataAttr;
                    let attribute;
                    for (i = 0; i < fetchAttribute.length; i++) {
                        if (fetchAttribute[i] instanceof Object) {
                            attribute = fetchAttribute[i]['name'];
                        }
                        else {
                            attribute = fetchAttribute[i];
                        }
                        if (attribute.startsWith('!')) {
                            attribute = attribute.substr(1, attribute.length - 1);
                            if (attribute == dataAttr) {
                                excludeAttribute = true;
                                break;
                            }
                        }
                        else if (attribute == dataAttr) {
                            fetchAttr = fetchAttribute[i];
                            break;
                        }
                    }
                    if (!excludeAttribute) {
                        self._filterRowAttributes(fetchAttr, data, updatedData);
                    }
                }
                else {
                    fetchAttribute.forEach(function (fetchAttr) {
                        let attribute;
                        if (fetchAttr instanceof Object) {
                            attribute = fetchAttr['name'];
                        }
                        else {
                            attribute = fetchAttr;
                        }
                        if (!attribute.startsWith('!') && attribute == dataAttr) {
                            self._filterRowAttributes(fetchAttr, data, updatedData);
                        }
                    });
                }
            });
        }
        else if (fetchAttribute instanceof Object) {
            let name = fetchAttribute['name'];
            let attributes = fetchAttribute['attributes'];
            if (name && !name.startsWith('!')) {
                if (data[name] instanceof Object && !Array.isArray(data[name]) && attributes) {
                    let updatedDataSubObj = {};
                    self._filterRowAttributes(attributes, data[name], updatedDataSubObj);
                    updatedData[name] = updatedDataSubObj;
                }
                else if (Array.isArray(data[name]) && attributes) {
                    updatedData[name] = [];
                    let updatedDataArrayItem;
                    data[name].forEach(function (arrVal, index) {
                        updatedDataArrayItem = {};
                        self._filterRowAttributes(attributes, arrVal, updatedDataArrayItem);
                        updatedData[name][index] = updatedDataArrayItem;
                    });
                }
                else {
                    self._proxyAttribute(updatedData, data, name);
                }
            }
        }
        else {
            self._proxyAttribute(updatedData, data, fetchAttribute);
        }
    }
    _proxyAttribute(updatedData, data, attribute) {
        if (!updatedData || !data) {
            return;
        }
        Object.defineProperty(updatedData, attribute, {
            get: function () {
                return data[attribute];
            },
            set: function (val) {
                data[attribute] = val;
            },
            enumerable: true
        });
    }
}
ArrayDataProvider._KEY = 'key';
ArrayDataProvider._KEYS = 'keys';
ArrayDataProvider._AFTERKEYS = 'afterKeys';
ArrayDataProvider._ADDBEFOREKEYS = 'addBeforeKeys';
ArrayDataProvider._DIRECTION = 'direction';
ArrayDataProvider._ATTRIBUTE = 'attribute';
ArrayDataProvider._ATTRIBUTES = 'attributes';
ArrayDataProvider._SORT = 'sort';
ArrayDataProvider._SORTCRITERIA = 'sortCriteria';
ArrayDataProvider._FILTERCRITERION = 'filterCriterion';
ArrayDataProvider._DATA = 'data';
ArrayDataProvider._METADATA = 'metadata';
ArrayDataProvider._INDEXES = 'indexes';
ArrayDataProvider._OFFSET = 'offset';
ArrayDataProvider._SIZE = 'size';
ArrayDataProvider._IDATTRIBUTE = 'idAttribute';
ArrayDataProvider._IMPLICITSORT = 'implicitSort';
ArrayDataProvider._KEYATTRIBUTES = 'keyAttributes';
ArrayDataProvider._SORTCOMPARATORS = 'sortComparators';
ArrayDataProvider._COMPARATORS = 'comparators';
ArrayDataProvider._COMPARATOR = 'comparator';
ArrayDataProvider._RESULTS = 'results';
ArrayDataProvider._CONTAINS = 'contains';
ArrayDataProvider._FETCHPARAMETERS = 'fetchParameters';
ArrayDataProvider._CONTAINSPARAMETERS = 'containsParameters';
ArrayDataProvider._VALUE = 'value';
ArrayDataProvider._DONE = 'done';
ArrayDataProvider._ADD = 'add';
ArrayDataProvider._REMOVE = 'remove';
ArrayDataProvider._UPDATE = 'update';
ArrayDataProvider._DETAIL = 'detail';
ArrayDataProvider._FETCHLISTRESULT = 'fetchListResult';
ArrayDataProvider._ATDEFAULT = '@default';
ArrayDataProvider._MUTATIONSEQUENCENUM = 'mutationSequenceNum';
ArrayDataProvider._PARENT = '_parent';
EventTargetMixin.applyMixin(ArrayDataProvider);
oj._registerLegacyNamespaceProp('ArrayDataProvider', ArrayDataProvider);

export default ArrayDataProvider;
