/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(['ojs/ojcore-base', 'ojs/ojdataprovider', 'ojs/ojeventtarget'], function (oj, ojdataprovider, ojeventtarget) { 'use strict';

    oj = oj && Object.prototype.hasOwnProperty.call(oj, 'default') ? oj['default'] : oj;

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
     * @class ListDataProviderView
     * @ojtsmodule
     * @implements DataProvider
     * @classdesc Provides list based optimizations for DataProvider and adds some support for providing state
     * for certain operations. e.g supports {@link DataProvider#fetchFirst} starting at arbitrary key or index offset, sortCriteria,
     * and field mapping. Please see the select demos for examples of DataMapping [Select]{@link oj.ojSelect}
     * @param {DataProvider} dataProvider the DataProvider.
     * @param {ListDataProviderView.Options=} options Options for the ListDataProviderView
     * @ojsignature [{target: "Type",
     *               value: "class ListDataProviderView<K, D, Kin, Din> implements DataProvider<K, D>",
     *               genericParameters: [{"name": "K", "description": "Type of output key"}, {"name": "D", "description": "Type of output data"},
     *                    {"name": "Kin", "description": "Type of input key"}, {"name": "Din", "description": "Type of input data"}]},
     *               {target: "Type",
     *               value: "DataProvider<Kin, Din>",
     *               for: "dataProvider"},
     *               {target: "Type",
     *                value: "ListDataProviderView.Options<K, D, Kin, Din>",
     *                for: "options"}]
     * @ojtsimport {module: "ojdataprovider", type: "AMD", imported: ["DataProvider", "SortCriterion", "FetchByKeysParameters",
     *   "ContainsKeysResults","FetchByKeysResults","FetchByOffsetParameters","FetchByOffsetResults", "DataMapping",
     *   "FetchListResult","FetchListParameters", "FetchAttribute", "DataFilter"]}
     */

    /**
     * @typedef {Object} ListDataProviderView.Options
     * @property {any=} from - key to start fetching from. This will be applied first before offset is applied.
     * @property {number=} offset - offset to start fetching from.
     * @property {Array=} sortCriteria - {@link SortCriterion} to apply to the data.
     * @property {DataMapping=} dataMapping - mapping to apply to the data.
     * @property {Array=} attributes - fetch attributes to apply
     * @property {DataFilter.Filter=} filterCriterion - filter criterion to apply. If the DataProvider does not support filtering then
     *        ListDataProviderView will do local filtering of the data.
     * @ojsignature [
     *  {target: "Type", value: "<K, D, Kin, Din>", for: "genericTypeParameters"},
     *  {target: "Type", value: "any=", for: "from"},
     *  {target: "Type", value: "Kin=", for: "offset"},
     *  {target: "Type", value: "Array.<SortCriterion<D>>", for: "sortCriteria"},
     *  {target: "Type", value: "DataMapping<K, D, Kin, Din>", for: "dataMapping"},
     *  {target: "Type", value: "Array<string | FetchAttribute>", for: "attributes"},
     *  {target: "Type", value: "DataFilter.Filter<D>=", for: "filterCriterion"}
     * ]
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name containsKeys
     */

    /**
     * Get an AsyncIterable object for iterating the data.
     * <p>
     * AsyncIterable contains a Symbol.asyncIterator method that returns an AsyncIterator.
     * AsyncIterator contains a “next” method for fetching the next block of data.
     * </p><p>
     * The "next" method returns a promise that resolves to an object, which contains a "value" property for the data and a "done" property
     * that is set to true when there is no more data to be fetched.  The "done" property should be set to true only if there is no "value"
     * in the result.  Note that "done" only reflects whether the iterator is done at the time "next" is called.  Future calls to "next"
     * may or may not return more rows for a mutable data source.
     * </p>
     * <p>
     * Please see the <a href="DataProvider.html#custom-implementations-section">DataProvider documentation</a> for
     * more information on custom implementations.
     * </p>
     *
     * @param {FetchListParameters=} params fetch parameters
     * @return {AsyncIterable.<FetchListResult>} AsyncIterable with {@link FetchListResult}
     * @see {@link https://github.com/tc39/proposal-async-iteration} for further information on AsyncIterable.
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name fetchFirst
     * @ojsignature {target: "Type",
     *               value: "(parameters?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>"}
     * @ojtsexample <caption>Get an asyncIterator and then fetch first block of data by executing next() on the iterator. Subsequent blocks can be fetched by executing next() again.</caption>
     * let asyncIterator = dataprovider.fetchFirst(options)[Symbol.asyncIterator]();
     * let result = await asyncIterator.next();
     * let value = result.value;
     * let data = value.data;
     * let keys = value.metadata.map(function(val) {
     *   return val.key;
     * });
     * // true or false for done
     * let done = result.done;
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name fetchByKeys
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name fetchByOffset
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name getCapability
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name getTotalSize
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name isEmpty
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name addEventListener
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name removeEventListener
     */

    /**
     * @inheritdoc
     * @memberof ListDataProviderView
     * @instance
     * @method
     * @name dispatchEvent
     */

    /**
     * Optional key to start fetching from. Used to set on the ListDataProviderView instance instead of through the constructor.
     *
     *
     * @since 4.1.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name from
     * @type {any}
     * @ojsignature {target: "Type",
     *               value: "?Kin"}
     * @ojtsexample <caption>set the key to start fetching from</caption>
     * dataprovider.from = '1234';
     */

    /**
     * Optional offset to start fetching from. Used to set on the ListDataProviderView instance instead of through the constructor.. Should be greater than or equal to zero.
     * If a negative offset is used then it will be treated as zero.
     *
     *
     * @since 4.1.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name offset
     * @type {number=}
     * @ojsignature {target: "Type",
     *               value: "?number"}
     * @ojtsexample <caption>set the offset to start fetching from</caption>
     * dataprovider.offset = 5;
     */

    /**
     * Optional sortCriteria to apply. Used to set on the ListDataProviderView instance instead of through the constructor.
     *
     *
     * @since 4.1.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name sortCriteria
     * @type {Array.<SortCriterion>=}
     * @ojsignature {target: "Type",
     *               value: "?Array<SortCriterion<D>>"}
     * @ojtsexample <caption>set the sortCriteria for fetching</caption>
     * dataprovider.sortCriteria = [{attribute: 'DepartmentName', direction: 'ascending'}];
     */

    /**
     * Optional dataMapping to apply. Used to set on the ListDataProviderView instance instead of through the constructor.
     *
     *
     * @since 4.1.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name dataMapping
     * @type {DataMapping=}
     * @ojsignature {target: "Type",
     *               value: "?DataMapping<K, D, Kin, Din>"}
     * @ojtsexample <caption>set the data mapping for fetching</caption>
     * dataprovider.dataMapping = function (item) {
     *   let data = item.data;
     *   let mappedItem = {};
     *   mappedItem.data = {};
     *   mappedItem.data.label = data.name;
     *   mappedItem.data.value = data.id;
     *   mappedItem.metadata = { key: data.id };
     *   return mappedItem;
     * };
     */

    /**
     * Optional fetch attributes to apply. Used to set on the ListDataProviderView instance instead of through the constructor.
     *
     *
     * @since 4.1.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name attributes
     * @type {Array<string | FetchAttribute>=}
     * @ojsignature {target: "Type",
     *               value: "?Array<string | FetchAttribute>"}
     * @ojtsexample <caption>set the attribute filter for fetching</caption>
     * dataprovider.attributes = ['!lastName', '@default']; // all attributes except lastName
     */

    /**
     * Optional filter criterion to apply. Used to set on the ListDataProviderView instance instead of through the constructor.
     *
     *
     * @since 7.0.0
     * @export
     * @expose
     * @memberof ListDataProviderView
     * @instance
     * @name filterCriterion
     * @type {DataFilter.Filter=}
     * @ojsignature {target: "Type",
     *               value: "?DataFilter.Filter<D>"}
     * @ojtsexample <caption>set the filter criterion for fetching</caption>
     * let filterDef = {op: '$or', criteria: [{op: '$eq', value: {name: 'Bob'}}, {op: '$gt', value: {level: 'Low'}}]};
     * dataprovider.filterCriterion = FilterFactory.getFilter(filterDef); // create a standard filter using the filterFactory.
     */

    /**
     * End of jsdoc
     */

    class ListDataProviderView {
        constructor(dataProvider, options) {
            this.dataProvider = dataProvider;
            this.options = options;
            this._noFilterSupport = false;
            this.AsyncIterable = class {
                constructor(_parent, _asyncIterator) {
                    this._parent = _parent;
                    this._asyncIterator = _asyncIterator;
                    this[Symbol.asyncIterator] = function () {
                        return this._asyncIterator;
                    };
                }
            };
            this.AsyncIterator = class {
                constructor(_parent, _nextFunc, _params) {
                    this._parent = _parent;
                    this._nextFunc = _nextFunc;
                    this._params = _params;
                }
                ['next']() {
                    let result = this._nextFunc(this._params);
                    return Promise.resolve(result);
                }
            };
            this.AsyncIteratorYieldResult = class {
                constructor(_parent, value) {
                    this._parent = _parent;
                    this.value = value;
                    this[ListDataProviderView._VALUE] = value;
                    this[ListDataProviderView._DONE] = false;
                }
            };
            this.AsyncIteratorReturnResult = class {
                constructor(_parent, value) {
                    this._parent = _parent;
                    this.value = value;
                    this[ListDataProviderView._VALUE] = value;
                    this[ListDataProviderView._DONE] = true;
                }
            };
            this.FetchListResult = class {
                constructor(_parent, fetchParameters, data, metadata) {
                    this._parent = _parent;
                    this.fetchParameters = fetchParameters;
                    this.data = data;
                    this.metadata = metadata;
                    this[ListDataProviderView._FETCHPARAMETERS] = fetchParameters;
                    this[ListDataProviderView._DATA] = data;
                    this[ListDataProviderView._METADATA] = metadata;
                }
            };
            this.Item = class {
                constructor(_parent, metadata, data) {
                    this._parent = _parent;
                    this.metadata = metadata;
                    this.data = data;
                    this[ListDataProviderView._METADATA] = metadata;
                    this[ListDataProviderView._DATA] = data;
                }
            };
            this.ItemMetadata = class {
                constructor(_parent, key) {
                    this._parent = _parent;
                    this.key = key;
                    this[ListDataProviderView._KEY] = key;
                }
            };
            this.FetchListParameters = class {
                constructor(_parent, params, size, sortCriteria, filterCriterion, attributes) {
                    this._parent = _parent;
                    this.params = params;
                    this.size = size;
                    this.sortCriteria = sortCriteria;
                    this.filterCriterion = filterCriterion;
                    this.attributes = attributes;
                    let self = this;
                    if (params) {
                        Object.keys(params).forEach(function (prop) {
                            self[prop] = params[prop];
                        });
                    }
                    this[ListDataProviderView._SIZE] = size;
                    if (sortCriteria) {
                        this[ListDataProviderView._SORTCRITERIA] = sortCriteria;
                    }
                    if (filterCriterion) {
                        this[ListDataProviderView._FILTERCRITERION] = filterCriterion;
                    }
                    if (attributes) {
                        this[ListDataProviderView._FETCHATTRIBUTES] = attributes;
                    }
                }
            };
            this.FetchByKeysParameters = class {
                constructor(_parent, keys, params, attributes) {
                    this._parent = _parent;
                    this.keys = keys;
                    this.params = params;
                    this.attributes = attributes;
                    let self = this;
                    if (params) {
                        Object.keys(params).forEach(function (prop) {
                            self[prop] = params[prop];
                        });
                    }
                    if (keys) {
                        this[ListDataProviderView._KEYS] = keys;
                    }
                    if (attributes) {
                        this[ListDataProviderView._FETCHATTRIBUTES] = attributes;
                    }
                }
            };
            this.FetchByOffsetParameters = class {
                constructor(_parent, offset, params, size, sortCriteria, filterCriterion, attributes) {
                    this._parent = _parent;
                    this.offset = offset;
                    this.params = params;
                    this.size = size;
                    this.sortCriteria = sortCriteria;
                    this.filterCriterion = filterCriterion;
                    this.attributes = attributes;
                    let self = this;
                    if (params) {
                        Object.keys(params).forEach(function (prop) {
                            self[prop] = params[prop];
                        });
                    }
                    if (size) {
                        this[ListDataProviderView._SIZE] = size;
                    }
                    if (sortCriteria) {
                        this[ListDataProviderView._SORTCRITERIA] = sortCriteria;
                    }
                    if (offset) {
                        this[ListDataProviderView._OFFSET] = offset;
                    }
                    if (filterCriterion) {
                        this[ListDataProviderView._FILTERCRITERION] = filterCriterion;
                    }
                    if (attributes) {
                        this[ListDataProviderView._FETCHATTRIBUTES] = attributes;
                    }
                }
            };
            this.FetchByKeysResults = class {
                constructor(_parent, fetchParameters, results) {
                    this._parent = _parent;
                    this.fetchParameters = fetchParameters;
                    this.results = results;
                    this[ListDataProviderView._FETCHPARAMETERS] = fetchParameters;
                    this[ListDataProviderView._RESULTS] = results;
                }
            };
            this.ContainsKeysResults = class {
                constructor(_parent, containsParameters, results) {
                    this._parent = _parent;
                    this.containsParameters = containsParameters;
                    this.results = results;
                    this[ListDataProviderView._CONTAINSPARAMETERS] = containsParameters;
                    this[ListDataProviderView._RESULTS] = results;
                }
            };
            this.FetchByOffsetResults = class {
                constructor(_parent, fetchParameters, results, done) {
                    this._parent = _parent;
                    this.fetchParameters = fetchParameters;
                    this.results = results;
                    this.done = done;
                    this[ListDataProviderView._FETCHPARAMETERS] = fetchParameters;
                    this[ListDataProviderView._RESULTS] = results;
                    this[ListDataProviderView._DONE] = done;
                }
            };
            this[ListDataProviderView._FROM] =
                this.options == null ? null : this.options[ListDataProviderView._FROM];
            this[ListDataProviderView._OFFSET] =
                this.options == null
                    ? 0
                    : this.options[ListDataProviderView._OFFSET] > 0
                        ? this.options[ListDataProviderView._OFFSET]
                        : 0;
            this[ListDataProviderView._SORTCRITERIA] =
                this.options == null ? null : this.options[ListDataProviderView._SORTCRITERIA];
            this[ListDataProviderView._DATAMAPPING] =
                this.options == null ? null : this.options[ListDataProviderView._DATAMAPPING];
            this[ListDataProviderView._FETCHATTRIBUTES] =
                this.options == null ? null : this.options[ListDataProviderView._FETCHATTRIBUTES];
            this[ListDataProviderView._FILTERCRITERION] =
                this.options == null ? null : this.options[ListDataProviderView._FILTERCRITERION];
            this._addEventListeners(dataProvider);
            if (dataProvider.getCapability && !dataProvider.getCapability('filter')) {
                this._noFilterSupport = true;
            }
        }
        containsKeys(params) {
            let self = this;
            if (this.dataProvider[ListDataProviderView._CONTAINSKEYS]) {
                return (this.dataProvider[ListDataProviderView._CONTAINSKEYS](params));
            }
            else {
                return this.fetchByKeys(params).then(function (fetchByKeysResult) {
                    let results = new Set();
                    params[ListDataProviderView._KEYS].forEach(function (key) {
                        if (fetchByKeysResult[ListDataProviderView._RESULTS].get(key) != null) {
                            results.add(key);
                        }
                    });
                    return Promise.resolve(new self.ContainsKeysResults(self, params, results));
                });
            }
        }
        fetchByKeys(params) {
            let self = this;
            let keys = params != null ? params[ListDataProviderView._KEYS] : null;
            let fetchAttributes = params != null ? params[ListDataProviderView._FETCHATTRIBUTES] : null;
            if (fetchAttributes == null) {
                fetchAttributes = this[ListDataProviderView._FETCHATTRIBUTES];
            }
            let updatedParams = new self.FetchByKeysParameters(self, keys, params, fetchAttributes);
            if (this.dataProvider[ListDataProviderView._FETCHBYKEYS]) {
                return this.dataProvider[ListDataProviderView._FETCHBYKEYS](updatedParams).then(function (value) {
                    let resultMap = value[ListDataProviderView._RESULTS];
                    let mappedResultMap = new Map();
                    resultMap.forEach(function (value, key) {
                        let mappedItem = self._getMappedItems([value]);
                        mappedResultMap.set(key, mappedItem[0]);
                    });
                    return new self.FetchByKeysResults(self, updatedParams, mappedResultMap);
                });
            }
            else {
                let options = new this.FetchListParameters(this, null, ListDataProviderView._DEFAULT_SIZE, null, null, fetchAttributes);
                let resultMap = new Map();
                let dataProviderAsyncIterator = this.dataProvider[ListDataProviderView._FETCHFIRST](options)[Symbol.asyncIterator]();
                return this._fetchNextSet(params, dataProviderAsyncIterator, resultMap).then(function (resultMap) {
                    let mappedResultMap = new Map();
                    resultMap.forEach(function (value, key) {
                        let mappedItem = self._getMappedItems([value]);
                        mappedResultMap.set(key, mappedItem[0]);
                    });
                    return new self.FetchByKeysResults(self, updatedParams, mappedResultMap);
                });
            }
        }
        fetchByOffset(params) {
            let self = this;
            let offset = params != null ? params[ListDataProviderView._OFFSET] : null;
            let size = params != null ? params[ListDataProviderView._SIZE] : null;
            let fetchAttributes = params != null ? params[ListDataProviderView._FETCHATTRIBUTES] : null;
            if (fetchAttributes == null) {
                fetchAttributes = this[ListDataProviderView._FETCHATTRIBUTES];
            }
            let sortCriteria = params != null ? params[ListDataProviderView._SORTCRITERIA] : null;
            if (sortCriteria == null) {
                sortCriteria = this[ListDataProviderView._SORTCRITERIA];
            }
            let mappedSortCriteria = this._getMappedSortCriteria(sortCriteria);
            let filterCriterion = this._combineFilters(params);
            let mappedFilterCriterion = this._getMappedFilterCriterion(filterCriterion);
            let updatedParams = new self.FetchByOffsetParameters(self, offset, params, size, mappedSortCriteria, mappedFilterCriterion, fetchAttributes);
            return this.dataProvider[ListDataProviderView._FETCHBYOFFSET](updatedParams).then(function (value) {
                let resultArray = value[ListDataProviderView._RESULTS];
                let done = value[ListDataProviderView._DONE];
                let mappedResultArray = new Array();
                resultArray.forEach(function (value) {
                    let mappedItem = self._getMappedItems([value]);
                    mappedResultArray.push(mappedItem[0]);
                });
                return new self.FetchByOffsetResults(self, updatedParams, mappedResultArray, done);
            });
        }
        fetchFirst(params) {
            let cachedData = {};
            cachedData[ListDataProviderView._ITEMS] = [];
            cachedData[ListDataProviderView._DONE] = false;
            cachedData[ListDataProviderView._STARTINDEX] = 0;
            cachedData[ListDataProviderView._LASTDONEHASDATA] = false;
            let size = params != null ? params[ListDataProviderView._SIZE] : null;
            let sortCriteria = params != null ? params[ListDataProviderView._SORTCRITERIA] : null;
            if (sortCriteria == null) {
                sortCriteria = this[ListDataProviderView._SORTCRITERIA];
            }
            let mappedSortCriteria = this._getMappedSortCriteria(sortCriteria);
            let filterCriterion = this._combineFilters(params);
            let mappedFilterCriterion = this._getMappedFilterCriterion(filterCriterion);
            let fetchAttributes = params != null ? params[ListDataProviderView._FETCHATTRIBUTES] : null;
            if (fetchAttributes == null) {
                fetchAttributes = this[ListDataProviderView._FETCHATTRIBUTES];
            }
            let self = this;
            if (self[ListDataProviderView._FROM] == null && self[ListDataProviderView._OFFSET] > 0) {
                let offset = self[ListDataProviderView._OFFSET];
                return new this.AsyncIterable(this, new this.AsyncIterator(this, (function (cachedData) {
                    return function () {
                        let updatedParams = new self.FetchByOffsetParameters(self, offset, null, size, mappedSortCriteria, mappedFilterCriterion, fetchAttributes);
                        return self.dataProvider[ListDataProviderView._FETCHBYOFFSET](updatedParams).then(function (result) {
                            var results = result['results'];
                            offset = offset + results.length;
                            let mappedResult = self._getMappedItems(results);
                            self._cacheResult(cachedData, mappedResult);
                            cachedData[ListDataProviderView._DONE] = result[ListDataProviderView._DONE];
                            var data = mappedResult.map(function (value) {
                                return value[ListDataProviderView._DATA];
                            });
                            var metadata = mappedResult.map(function (value) {
                                return value[ListDataProviderView._METADATA];
                            });
                            let resultFetchParams = result[ListDataProviderView._FETCHPARAMETERS];
                            let resultSortCriteria = resultFetchParams != null
                                ? resultFetchParams[ListDataProviderView._SORTCRITERIA]
                                : null;
                            let resultFilterCriterion = resultFetchParams != null
                                ? resultFetchParams[ListDataProviderView._FILTERCRITERION]
                                : null;
                            let unmappedResultSortCriteria = self._getUnmappedSortCriteria(resultSortCriteria);
                            let unmappedResultFilterCriterion = self._getUnmappedFilterCriterion(resultFilterCriterion);
                            let resultParams = new self.FetchByOffsetParameters(self, self[ListDataProviderView._OFFSET], null, size, unmappedResultSortCriteria, unmappedResultFilterCriterion);
                            if (cachedData[ListDataProviderView._DONE]) {
                                return Promise.resolve((new self.AsyncIteratorReturnResult(self, new self.FetchListResult(self, resultParams, data, metadata))));
                            }
                            return Promise.resolve((new self.AsyncIteratorYieldResult(self, new self.FetchListResult(self, resultParams, data, metadata))));
                        });
                    };
                })(cachedData), params));
            }
            else {
                let updatedParams = new this.FetchListParameters(this, params, size, mappedSortCriteria, mappedFilterCriterion, fetchAttributes);
                let cachedAsyncIterator = this.dataProvider[ListDataProviderView._FETCHFIRST](updatedParams)[Symbol.asyncIterator]();
                return new this.AsyncIterable(this, new this.AsyncIterator(this, (function (cachedData, cachedAsyncIterator) {
                    return function () {
                        if (cachedData[ListDataProviderView._LASTDONEHASDATA]) {
                            cachedData[ListDataProviderView._LASTDONEHASDATA] = false;
                            return Promise.resolve(new self.AsyncIteratorReturnResult(self, new self.FetchListResult(this, params, [], [])));
                        }
                        return cachedAsyncIterator.next().then(function (result) {
                            let resultValue = result[ListDataProviderView._VALUE];
                            if (!resultValue) {
                                resultValue = { data: [], metadata: [], fetchParameters: null };
                            }
                            const data = resultValue[ListDataProviderView._DATA];
                            const metadata = resultValue[ListDataProviderView._METADATA];
                            let items = data.map(function (value, index) {
                                return new self.Item(self, metadata[index], data[index]);
                            });
                            if (self._noFilterSupport) {
                                self._filterResult(mappedFilterCriterion, items);
                            }
                            let mappedResult = self._getMappedItems(items);
                            self._cacheResult(cachedData, mappedResult);
                            cachedData[ListDataProviderView._DONE] = result[ListDataProviderView._DONE];
                            let size = params != null ? params[ListDataProviderView._SIZE] : null;
                            let offset = params != null ? params[ListDataProviderView._OFFSET] : null;
                            let resultFetchParams = resultValue[ListDataProviderView._FETCHPARAMETERS];
                            let resultSortCriteria = resultFetchParams != null
                                ? resultFetchParams[ListDataProviderView._SORTCRITERIA]
                                : null;
                            let resultFilterCriterion = resultFetchParams != null
                                ? resultFetchParams[ListDataProviderView._FILTERCRITERION]
                                : null;
                            let unmappedResultSortCriteria = self._getUnmappedSortCriteria(resultSortCriteria);
                            let unmappedResultFilterCriterion = self._getUnmappedFilterCriterion(resultFilterCriterion);
                            let resultParams = new self.FetchListParameters(self, params, size, unmappedResultSortCriteria, unmappedResultFilterCriterion);
                            return self
                                ._fetchUntilKey(resultParams, self[ListDataProviderView._FROM], cachedData, cachedAsyncIterator)
                                .then(function () {
                                return self._fetchUntilOffset(resultParams, self[ListDataProviderView._OFFSET] +
                                    cachedData[ListDataProviderView._STARTINDEX], data.length, cachedData, cachedAsyncIterator);
                            });
                        });
                    };
                })(cachedData, cachedAsyncIterator), params));
            }
        }
        getCapability(capabilityName) {
            return this.dataProvider.getCapability(capabilityName);
        }
        getTotalSize() {
            return this.dataProvider.getTotalSize();
        }
        isEmpty() {
            return this.dataProvider.isEmpty();
        }
        _fetchNextSet(params, dataProviderAsyncIterator, resultMap) {
            let self = this;
            return dataProviderAsyncIterator.next().then(function (result) {
                var value = result[ListDataProviderView._VALUE];
                var data = value[ListDataProviderView._DATA];
                var metadata = value[ListDataProviderView._METADATA];
                var keys = metadata.map(function (metadata) {
                    return metadata[ListDataProviderView._KEY];
                });
                let foundAllKeys = true;
                params[ListDataProviderView._KEYS].forEach(function (findKey) {
                    if (!resultMap.has(findKey)) {
                        keys.map(function (key, index) {
                            if (oj.Object.compareValues(key, findKey)) {
                                resultMap.set(findKey, (new self.Item(self, metadata[index], data[index])));
                            }
                        });
                    }
                    if (!resultMap.has(findKey)) {
                        foundAllKeys = false;
                    }
                });
                if (!foundAllKeys && !result[ListDataProviderView._DONE]) {
                    return self._fetchNextSet(params, dataProviderAsyncIterator, resultMap);
                }
                else {
                    return resultMap;
                }
            });
        }
        _fetchUntilKey(params, key, cachedData, cachedAsyncIterator) {
            let self = this;
            if (key != null) {
                let resultItems = cachedData[ListDataProviderView._ITEMS].filter(function (resultItem) {
                    if (oj.KeyUtils.equals(resultItem[ListDataProviderView._METADATA][ListDataProviderView._KEY], key)) {
                        return true;
                    }
                });
                if (resultItems.length > 0) {
                    let itemIndex = cachedData[ListDataProviderView._ITEMS].indexOf(resultItems[0]);
                    cachedData[ListDataProviderView._ITEMS] = cachedData[ListDataProviderView._ITEMS].slice(itemIndex, cachedData[ListDataProviderView._ITEMS].length);
                }
                else if (!cachedData[ListDataProviderView._DONE]) {
                    return cachedAsyncIterator.next().then(function (nextResult) {
                        let data = nextResult[ListDataProviderView._VALUE][ListDataProviderView._DATA];
                        let metadata = nextResult[ListDataProviderView._VALUE][ListDataProviderView._METADATA];
                        let items = data.map(function (value, index) {
                            return new self.Item(self, metadata[index], data[index]);
                        });
                        let mappedResult = self._getMappedItems(items);
                        self._cacheResult(cachedData, mappedResult);
                        cachedData[ListDataProviderView._DONE] = nextResult[ListDataProviderView._DONE];
                        return self._fetchUntilKey(nextResult[ListDataProviderView._FETCHPARAMETERS], mappedResult[ListDataProviderView._KEYS], cachedData, cachedAsyncIterator);
                    });
                }
                else {
                    cachedData[ListDataProviderView._ITEMS] = [];
                }
            }
            return Promise.resolve(null);
        }
        _fetchUntilOffset(params, offset, resultSize, cachedData, cachedAsyncIterator) {
            let self = this;
            let fetchSize = params != null
                ? params[ListDataProviderView._SIZE] > 0
                    ? params[ListDataProviderView._SIZE]
                    : resultSize
                : resultSize;
            offset = offset > 0 ? offset : 0;
            let cachedItems = cachedData[ListDataProviderView._ITEMS].slice(offset, offset + fetchSize);
            if (this._noFilterSupport) {
                let mappedFilterCriterion = this._getMappedFilterCriterion(params[ListDataProviderView._FILTERCRITERION]);
                this._filterResult(mappedFilterCriterion, cachedItems);
            }
            if (params && params[ListDataProviderView._SIZE] > 0 && cachedItems.length < fetchSize) {
                if (!cachedData[ListDataProviderView._DONE]) {
                    return cachedAsyncIterator.next().then(function (nextResult) {
                        let data = nextResult[ListDataProviderView._VALUE][ListDataProviderView._DATA];
                        let metadata = nextResult[ListDataProviderView._VALUE][ListDataProviderView._METADATA];
                        let items = data.map(function (value, index) {
                            return new self.Item(self, metadata[index], data[index]);
                        });
                        if (self._noFilterSupport) {
                            let mappedFilterCriterion = self._getMappedFilterCriterion(params[ListDataProviderView._FILTERCRITERION]);
                            self._filterResult(mappedFilterCriterion, items);
                        }
                        let mappedResult = self._getMappedItems(items);
                        self._cacheResult(cachedData, mappedResult);
                        cachedData[ListDataProviderView._DONE] = nextResult[ListDataProviderView._DONE];
                        return self._fetchUntilOffset(params, offset, data.length, cachedData, cachedAsyncIterator);
                    });
                }
            }
            return self._createResultPromise(params, cachedData, cachedItems);
        }
        _createResultPromise(params, cachedData, cachedItems) {
            cachedData[ListDataProviderView._STARTINDEX] =
                cachedData[ListDataProviderView._STARTINDEX] + cachedItems.length;
            let data = cachedItems.map(function (item) {
                return item[ListDataProviderView._DATA];
            });
            let metadata = cachedItems.map(function (item) {
                return item[ListDataProviderView._METADATA];
            });
            let isDone = false;
            if (cachedData[ListDataProviderView._DONE]) {
                if (data.length === 0) {
                    isDone = true;
                }
                else {
                    cachedData[ListDataProviderView._LASTDONEHASDATA] = true;
                }
            }
            if (isDone) {
                return Promise.resolve(new this.AsyncIteratorReturnResult(this, new this.FetchListResult(this, params, data, metadata)));
            }
            return Promise.resolve(new this.AsyncIteratorYieldResult(this, new this.FetchListResult(this, params, data, metadata)));
        }
        _cacheResult(cachedData, items) {
            let self = this;
            items.map(function (value) {
                cachedData[ListDataProviderView._ITEMS].push(value);
            });
        }
        _filterResult(filterCriterion, items) {
            let filter;
            if (filterCriterion) {
                if (!filterCriterion.filter) {
                    filterCriterion = ojdataprovider.FilterFactory.getFilter({ filterDef: filterCriterion });
                }
                let i = items.length - 1;
                while (i >= 0) {
                    if (!filterCriterion.filter(items[i][ListDataProviderView._DATA])) {
                        items.splice(i, 1);
                    }
                    i--;
                }
            }
        }
        _getMappedItems(items) {
            let self = this;
            if (this[ListDataProviderView._DATAMAPPING] != null) {
                let mapFields = this[ListDataProviderView._DATAMAPPING][ListDataProviderView._MAPFIELDS];
                if (mapFields != null) {
                    if (items != null && items.length > 0) {
                        let mappedItems = new Array();
                        mappedItems = items.map(function (value) {
                            return mapFields.bind(self)(value);
                        });
                        return mappedItems;
                    }
                }
            }
            return items;
        }
        _combineFilters(params) {
            let filters = [];
            let i = 0;
            if (params != null && params[ListDataProviderView._FILTERCRITERION] != null) {
                filters[i++] = params[ListDataProviderView._FILTERCRITERION];
            }
            if (this[ListDataProviderView._FILTERCRITERION] != null) {
                filters[i++] = this[ListDataProviderView._FILTERCRITERION];
            }
            let filterCriterion;
            if (filters.length == 0) {
                filterCriterion = null;
            }
            else if (filters.length == 1) {
                filterCriterion = filters[0];
            }
            else {
                filterCriterion = ojdataprovider.FilterFactory.getFilter({ filterDef: { op: '$and', criteria: filters } });
            }
            return filterCriterion;
        }
        _getMappedFilterCriterion(filterCriterion) {
            if (this[ListDataProviderView._DATAMAPPING] != null) {
                let mappedFilterCriterion = this[ListDataProviderView._DATAMAPPING][ListDataProviderView._MAPFILTERCRITERION];
                if (mappedFilterCriterion != null) {
                    if (filterCriterion != null) {
                        return mappedFilterCriterion(filterCriterion);
                    }
                }
            }
            return filterCriterion;
        }
        _getMappedSortCriteria(sortCriteria) {
            if (this[ListDataProviderView._DATAMAPPING] != null) {
                let mapSortCriteria = this[ListDataProviderView._DATAMAPPING][ListDataProviderView._MAPSORTCRITERIA];
                if (mapSortCriteria != null) {
                    if (sortCriteria != null && sortCriteria.length > 0) {
                        return mapSortCriteria(sortCriteria);
                    }
                }
            }
            return sortCriteria;
        }
        _getUnmappedSortCriteria(sortCriteria) {
            if (this[ListDataProviderView._DATAMAPPING] != null) {
                let unmapSortCriteria = this[ListDataProviderView._DATAMAPPING][ListDataProviderView._UNMAPSORTCRITERIA];
                if (unmapSortCriteria != null) {
                    if (sortCriteria != null && sortCriteria.length > 0) {
                        return unmapSortCriteria(sortCriteria);
                    }
                }
            }
            return sortCriteria;
        }
        _getUnmappedFilterCriterion(filter) {
            if (this[ListDataProviderView._DATAMAPPING] != null) {
                let unmapFilterCriterion = this[ListDataProviderView._DATAMAPPING][ListDataProviderView._UNMAPFILTERCRITERION];
                if (unmapFilterCriterion != null) {
                    if (filter != null) {
                        return unmapFilterCriterion(filter);
                    }
                }
            }
            return filter;
        }
        _addEventListeners(dataprovider) {
            let self = this;
            dataprovider[ListDataProviderView._ADDEVENTLISTENER](ListDataProviderView._REFRESH, function (event) {
                self.dispatchEvent(event);
            });
            dataprovider[ListDataProviderView._ADDEVENTLISTENER](ListDataProviderView._MUTATE, function (event) {
                self.dispatchEvent(event);
            });
        }
    }
    ListDataProviderView._KEY = 'key';
    ListDataProviderView._KEYS = 'keys';
    ListDataProviderView._DATA = 'data';
    ListDataProviderView._STARTINDEX = 'startIndex';
    ListDataProviderView._SORT = 'sort';
    ListDataProviderView._SORTCRITERIA = 'sortCriteria';
    ListDataProviderView._FILTERCRITERION = 'filterCriterion';
    ListDataProviderView._METADATA = 'metadata';
    ListDataProviderView._ITEMS = 'items';
    ListDataProviderView._FROM = 'from';
    ListDataProviderView._OFFSET = 'offset';
    ListDataProviderView._REFRESH = 'refresh';
    ListDataProviderView._MUTATE = 'mutate';
    ListDataProviderView._SIZE = 'size';
    ListDataProviderView._FETCHPARAMETERS = 'fetchParameters';
    ListDataProviderView._VALUE = 'value';
    ListDataProviderView._DONE = 'done';
    ListDataProviderView._LASTDONEHASDATA = 'lastDoneHasData';
    ListDataProviderView._DATAMAPPING = 'dataMapping';
    ListDataProviderView._MAPFIELDS = 'mapFields';
    ListDataProviderView._MAPSORTCRITERIA = 'mapSortCriteria';
    ListDataProviderView._MAPFILTERCRITERION = 'mapFilterCriterion';
    ListDataProviderView._UNMAPSORTCRITERIA = 'unmapSortCriteria';
    ListDataProviderView._UNMAPFILTERCRITERION = 'unmapFilterCriterion';
    ListDataProviderView._RESULTS = 'results';
    ListDataProviderView._CONTAINSPARAMETERS = 'containsParameters';
    ListDataProviderView._DEFAULT_SIZE = 25;
    ListDataProviderView._CONTAINSKEYS = 'containsKeys';
    ListDataProviderView._FETCHBYKEYS = 'fetchByKeys';
    ListDataProviderView._FETCHBYOFFSET = 'fetchByOffset';
    ListDataProviderView._FETCHFIRST = 'fetchFirst';
    ListDataProviderView._ADDEVENTLISTENER = 'addEventListener';
    ListDataProviderView._FETCHATTRIBUTES = 'attributes';
    ojeventtarget.EventTargetMixin.applyMixin(ListDataProviderView);
    oj._registerLegacyNamespaceProp('ListDataProviderView', ListDataProviderView);

    return ListDataProviderView;

});
