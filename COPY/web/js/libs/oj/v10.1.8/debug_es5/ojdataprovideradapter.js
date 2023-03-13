(function() {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(['ojs/ojcore-base', 'ojs/ojdataprovider', 'ojs/ojmodel', 'ojs/ojdataprovideradapter-base', 'ojs/ojeventtarget'], function (oj, ojdataprovider, ojmodel, DataSourceAdapter, ojeventtarget) {
  'use strict';

  oj = oj && Object.prototype.hasOwnProperty.call(oj, 'default') ? oj['default'] : oj;
  DataSourceAdapter = DataSourceAdapter && Object.prototype.hasOwnProperty.call(DataSourceAdapter, 'default') ? DataSourceAdapter['default'] : DataSourceAdapter;

  var TableDataSourceAdapter = /*#__PURE__*/function (_DataSourceAdapter) {
    _inherits(TableDataSourceAdapter, _DataSourceAdapter);

    var _super = _createSuper(TableDataSourceAdapter);

    function TableDataSourceAdapter(tableDataSource) {
      var _this;

      _classCallCheck(this, TableDataSourceAdapter);

      _this = _super.call(this, tableDataSource);
      _this.tableDataSource = tableDataSource;

      _this.FetchByKeysResults = /*#__PURE__*/function () {
        function _class(_parent, fetchParameters, results) {
          _classCallCheck(this, _class);

          this._parent = _parent;
          this.fetchParameters = fetchParameters;
          this.results = results;
          this[TableDataSourceAdapter._FETCHPARAMETERS] = fetchParameters;
          this[TableDataSourceAdapter._RESULTS] = results;
        }

        return _createClass(_class);
      }();

      _this.ContainsKeysResults = /*#__PURE__*/function () {
        function _class2(_parent, containsParameters, results) {
          _classCallCheck(this, _class2);

          this._parent = _parent;
          this.containsParameters = containsParameters;
          this.results = results;
          this[TableDataSourceAdapter._CONTAINSPARAMETERS] = containsParameters;
          this[TableDataSourceAdapter._RESULTS] = results;
        }

        return _createClass(_class2);
      }();

      _this.Item = /*#__PURE__*/function () {
        function _class3(_parent, metadata, data) {
          _classCallCheck(this, _class3);

          this._parent = _parent;
          this.metadata = metadata;
          this.data = data;
          this[TableDataSourceAdapter._METADATA] = metadata;
          this[TableDataSourceAdapter._DATA] = data;
        }

        return _createClass(_class3);
      }();

      _this.FetchByOffsetResults = /*#__PURE__*/function () {
        function _class4(_parent, fetchParameters, results, done) {
          _classCallCheck(this, _class4);

          this._parent = _parent;
          this.fetchParameters = fetchParameters;
          this.results = results;
          this.done = done;
          this[TableDataSourceAdapter._FETCHPARAMETERS] = fetchParameters;
          this[TableDataSourceAdapter._RESULTS] = results;
          this[TableDataSourceAdapter._DONE] = done;
        }

        return _createClass(_class4);
      }();

      _this.FetchListParameters = /*#__PURE__*/function () {
        function _class5(_parent, size, sortCriteria) {
          _classCallCheck(this, _class5);

          this._parent = _parent;
          this.size = size;
          this.sortCriteria = sortCriteria;
          this[TableDataSourceAdapter._SIZE] = size;
          this[TableDataSourceAdapter._SORTCRITERIA] = sortCriteria;
        }

        return _createClass(_class5);
      }();

      _this._addTableDataSourceEventListeners();

      _this[TableDataSourceAdapter._OFFSET] = 0;
      _this._ignoreDataSourceEvents = new Array();
      return _this;
    }

    _createClass(TableDataSourceAdapter, [{
      key: "destroy",
      value: function destroy() {
        this._removeTableDataSourceEventListeners();
      }
    }, {
      key: "containsKeys",
      value: function containsKeys(params) {
        var self = this;
        var resultsPromiseArray = [];

        params[TableDataSourceAdapter._KEYS].forEach(function (key) {
          resultsPromiseArray.push(self.tableDataSource.get(key));
        });

        return Promise.all(resultsPromiseArray).then(function (resultsArray) {
          var results = new Set();
          resultsArray.map(function (value) {
            if (value != null) {
              results.add(value[TableDataSourceAdapter._KEY]);
            }
          });
          return Promise.resolve(new self.ContainsKeysResults(self, params, results));
        });
      }
    }, {
      key: "fetchByKeys",
      value: function fetchByKeys(params) {
        var self = this;
        var resultsPromiseArray = [];

        params[TableDataSourceAdapter._KEYS].forEach(function (key) {
          resultsPromiseArray.push(self.tableDataSource.get(key));
        });

        return Promise.all(resultsPromiseArray).then(function (resultsArray) {
          var results = new Map();

          for (var i = 0; i < resultsArray.length; i++) {
            var value = resultsArray[i];

            if (value != null) {
              var itemKey = value[TableDataSourceAdapter._KEY];
              var data = value[TableDataSourceAdapter._DATA];
              var itemMetadata = new self.ItemMetadata(self, itemKey);

              self._extractMetaData(self.dataSource, i, itemMetadata);

              results.set(itemKey, new self.Item(self, itemMetadata, data));
            }
          }

          return Promise.resolve(new self.FetchByKeysResults(self, params, results));
        });
      }
    }, {
      key: "fetchByOffset",
      value: function fetchByOffset(params) {
        var self = this;
        var size = params != null ? params[TableDataSourceAdapter._SIZE] : -1;
        var sortCriteria = params != null ? params[TableDataSourceAdapter._SORTCRITERIA] : null;
        var offset = params != null ? params[TableDataSourceAdapter._OFFSET] > 0 ? params[TableDataSourceAdapter._OFFSET] : 0 : 0;
        var fetchParams = new this.FetchListParameters(this, size, sortCriteria);
        this._startIndex = 0;
        return this._getFetchFunc(fetchParams, offset)(fetchParams, true).then(function (iteratorResults) {
          var value = iteratorResults[TableDataSourceAdapter._VALUE];
          var done = iteratorResults[TableDataSourceAdapter._DONE];
          var data = value[TableDataSourceAdapter._DATA];

          var keys = value[TableDataSourceAdapter._METADATA].map(function (value) {
            return value[TableDataSourceAdapter._KEY];
          });

          var resultsArray = new Array();
          data.map(function (value, index) {
            resultsArray.push(new self.Item(self, new self.ItemMetadata(self, keys[index]), data[index]));
          });

          for (var i = 0; i < resultsArray.length; i++) {
            self._extractMetaData(self.dataSource, i, resultsArray[i][TableDataSourceAdapter._METADATA]);
          }

          return new self.FetchByOffsetResults(self, params, resultsArray, done);
        });
      }
    }, {
      key: "fetchFirst",
      value: function fetchFirst(params) {
        if (!this._isPagingModelTableDataSource()) {
          this._startIndex = 0;
        }

        return new this.AsyncIterable(new this.AsyncIterator(this._getFetchFunc(params), params));
      }
    }, {
      key: "getCapability",
      value: function getCapability(capabilityName) {
        if (capabilityName == TableDataSourceAdapter._SORT && this.tableDataSource.getCapability(capabilityName) == 'full') {
          return {
            attributes: 'multiple'
          };
        } else if (capabilityName == 'fetchByKeys') {
          return {
            implementation: 'lookup'
          };
        } else if (capabilityName == 'fetchByOffset') {
          return {
            implementation: 'lookup'
          };
        }

        return null;
      }
    }, {
      key: "getTotalSize",
      value: function getTotalSize() {
        return Promise.resolve(this.tableDataSource.totalSize());
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.tableDataSource.totalSize() > 0 ? 'no' : 'yes';
      }
    }, {
      key: "getPage",
      value: function getPage() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.getPage();
        }

        return -1;
      }
    }, {
      key: "setPage",
      value: function setPage(value, options) {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.setPage(value, options);
        }

        return Promise.reject(null);
      }
    }, {
      key: "getStartItemIndex",
      value: function getStartItemIndex() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.getStartItemIndex();
        }

        return -1;
      }
    }, {
      key: "getEndItemIndex",
      value: function getEndItemIndex() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.getEndItemIndex();
        }

        return -1;
      }
    }, {
      key: "getPageCount",
      value: function getPageCount() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.getPageCount();
        }

        return -1;
      }
    }, {
      key: "totalSize",
      value: function totalSize() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.totalSize();
        }

        return -1;
      }
    }, {
      key: "totalSizeConfidence",
      value: function totalSizeConfidence() {
        if (this._isPagingModelTableDataSource()) {
          return this.tableDataSource.totalSizeConfidence();
        }

        return null;
      }
    }, {
      key: "_getFetchFunc",
      value: function _getFetchFunc(params, offset) {
        var self = this;

        if (params != null && params[TableDataSourceAdapter._SORTCRITERIA] != null) {
          var attribute = params[TableDataSourceAdapter._SORTCRITERIA][0][TableDataSourceAdapter._ATTRIBUTE];
          var direction = params[TableDataSourceAdapter._SORTCRITERIA][0][TableDataSourceAdapter._DIRECTION];
          this._ignoreSortEvent = true;

          if (!this._isPagingModelTableDataSource()) {
            this._startIndex = 0;
          }

          return function (attribute, direction) {
            return function (params, fetchFirst) {
              if (fetchFirst) {
                var sortParam = {};
                sortParam[TableDataSourceAdapter._KEY] = attribute;
                sortParam[TableDataSourceAdapter._DIRECTION] = direction;
                self[TableDataSourceAdapter._OFFSET] = 0;
                return self.tableDataSource.sort(sortParam).then(function () {
                  self._ignoreSortEvent = false;
                  return self._getTableDataSourceFetch(params, offset)(params);
                });
              } else {
                return self._getTableDataSourceFetch(params, offset)(params);
              }
            };
          }(attribute, direction);
        } else {
          return this._getTableDataSourceFetch(params, offset);
        }
      }
    }, {
      key: "_extractMetaData",
      value: function _extractMetaData(tableDataSource, index, itemMetadata) {
        var dataSource = tableDataSource;

        if (this._isPagingModelTableDataSource()) {
          dataSource = dataSource.getWrappedDataSource();
        }

        if (dataSource._getMetadata) {
          var metadata = dataSource._getMetadata(index);

          if (metadata) {
            Object.keys(metadata).forEach(function (key) {
              itemMetadata[key] = metadata[key];
            });
          }
        }
      }
    }, {
      key: "_getTableDataSourceFetch",
      value: function _getTableDataSourceFetch(params, offset) {
        var self = this;
        return function (params, fetchFirst) {
          var options = {};
          offset = offset > 0 ? offset : 0;

          if (self._startIndex != null) {
            options[TableDataSourceAdapter._STARTINDEX] = self._startIndex + offset;
          }

          options[TableDataSourceAdapter._PAGESIZE] = params != null && params[TableDataSourceAdapter._SIZE] > 0 ? params[TableDataSourceAdapter._SIZE] : null;

          if (!self._isPagingModelTableDataSource() && params[TableDataSourceAdapter._SILENT]) {
            options[TableDataSourceAdapter._SILENT] = params[TableDataSourceAdapter._SILENT];
          }

          if (self.tableDataSource[TableDataSourceAdapter._SORTCRITERIA] != null && params[TableDataSourceAdapter._SORTCRITERIA] == null) {
            params[TableDataSourceAdapter._SORTCRITERIA] = [];
            var sortCriterion = new self.SortCriterion(self, self.tableDataSource[TableDataSourceAdapter._SORTCRITERIA][TableDataSourceAdapter._KEY], self.tableDataSource[TableDataSourceAdapter._SORTCRITERIA][TableDataSourceAdapter._DIRECTION]);

            params[TableDataSourceAdapter._SORTCRITERIA].push(sortCriterion);
          }

          options[TableDataSourceAdapter._FETCHTYPE] = params[TableDataSourceAdapter._FETCHTYPE];
          self._isFetching = true;
          return new Promise(function (resolve, reject) {
            self._fetchResolveFunc = resolve;
            self._fetchRejectFunc = reject;
            self._fetchParams = params;

            if (!self._requestEventTriggered) {
              if (!self._isPagingModelTableDataSource() && !options[TableDataSourceAdapter._SILENT]) {
                self._ignoreDataSourceEvents.push(true);
              }

              self.tableDataSource.fetch(options).then(function (result) {
                if (!self._isPagingModelTableDataSource() && !options[TableDataSourceAdapter._SILENT]) {
                  self._ignoreDataSourceEvents.pop();
                }

                if (result !== null) {
                  self._isFetching = false;

                  if (result === undefined) {
                    result = {};
                    result[TableDataSourceAdapter._KEYS] = [];
                    result[TableDataSourceAdapter._DATA] = [];
                  }

                  var resultMetadata = [];

                  if (result[TableDataSourceAdapter._KEYS] != null) {
                    resultMetadata = result[TableDataSourceAdapter._KEYS].map(function (value) {
                      return new self.ItemMetadata(self, value);
                    });
                  }

                  if (self._startIndex == null) {
                    self._startIndex = 0;
                  }

                  for (var i = 0; i < resultMetadata.length; i++) {
                    self._extractMetaData(self.dataSource, i, resultMetadata[i]);
                  }

                  var done = false;
                  self._startIndex = self._startIndex + result[TableDataSourceAdapter._DATA].length;

                  if (self.tableDataSource.totalSizeConfidence() == 'actual' && self.tableDataSource.totalSize() > 0 && result.startIndex + result[TableDataSourceAdapter._DATA].length >= self.tableDataSource.totalSize()) {
                    done = true;
                  } else if (options[TableDataSourceAdapter._PAGESIZE] > 0 && result[TableDataSourceAdapter._DATA].length < options[TableDataSourceAdapter._PAGESIZE]) {
                    done = true;
                  } else if (result[TableDataSourceAdapter._DATA].length == 0) {
                    done = true;
                  }

                  self._fetchResolveFunc = null;
                  self._fetchParams = null;

                  if (done) {
                    resolve(new self.AsyncIteratorReturnResult(self, new self.FetchListResult(self, params, result[TableDataSourceAdapter._DATA], resultMetadata)));
                  } else {
                    resolve(new self.AsyncIteratorYieldResult(self, new self.FetchListResult(self, params, result[TableDataSourceAdapter._DATA], resultMetadata)));
                  }
                }
              }, function (error) {
                if (!self._isPagingModelTableDataSource() && !options[TableDataSourceAdapter._SILENT]) {
                  self._ignoreDataSourceEvents.pop();
                }

                reject(error);
              });
            }
          });
        };
      }
    }, {
      key: "_adjustIteratorOffset",
      value: function _adjustIteratorOffset(removeIndexes, addIndexes) {
        var offset = this._startIndex;
        var deleteCount = 0;

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

        this._startIndex = offset;
      }
    }, {
      key: "_handleSync",
      value: function _handleSync(event) {
        var self = this;

        if (self._ignoreDataSourceEvents.length > 0) {
          return;
        }

        self._startIndex = null;

        if (event[TableDataSourceAdapter._STARTINDEX] > 0) {
          self._startIndex = event[TableDataSourceAdapter._STARTINDEX];
          self[TableDataSourceAdapter._OFFSET] = self._startIndex;
        }

        if (self._fetchResolveFunc && event[TableDataSourceAdapter._KEYS] != null) {
          self._isFetching = false;

          var resultMetadata = event[TableDataSourceAdapter._KEYS].map(function (value) {
            return new self.ItemMetadata(self, value);
          });

          for (var i = 0; i < resultMetadata.length; i++) {
            self._extractMetaData(self.dataSource, i, resultMetadata[i]);
          }

          var done = false;

          if (self.tableDataSource.totalSizeConfidence() == 'actual' && self.tableDataSource.totalSize() > 0 && self._startIndex + event[TableDataSourceAdapter._DATA].length >= self.tableDataSource.totalSize()) {
            done = true;
          }

          if (done) {
            self._fetchResolveFunc(new self.AsyncIteratorReturnResult(self, new self.FetchListResult(self, self._fetchParams, event[TableDataSourceAdapter._DATA], resultMetadata)));
          } else {
            self._fetchResolveFunc(new self.AsyncIteratorYieldResult(self, new self.FetchListResult(self, self._fetchParams, event[TableDataSourceAdapter._DATA], resultMetadata)));
          }

          self._fetchResolveFunc = null;
          self._fetchParams = null;
        } else if (!self._requestEventTriggered) {
          self.dispatchEvent(new ojdataprovider.DataProviderRefreshEvent());
        }

        self._requestEventTriggered = false;
      }
    }, {
      key: "_handleAdd",
      value: function _handleAdd(event) {
        var _a;

        var self = this;

        var metadataArray = event[TableDataSourceAdapter._KEYS].map(function (value) {
          return new self.ItemMetadata(self, value);
        });

        var keySet = new Set();

        event[TableDataSourceAdapter._KEYS].map(function (key) {
          keySet.add(key);
        });

        var operationEventDetail = new self.DataProviderAddOperationEventDetail(self, keySet, null, null, null, metadataArray, event[TableDataSourceAdapter._DATA], event[TableDataSourceAdapter._INDEXES]);
        var mutationEventDetail = new self.DataProviderMutationEventDetail(self, operationEventDetail, null, null);
        self.dispatchEvent(new ojdataprovider.DataProviderMutationEvent(mutationEventDetail));

        this._adjustIteratorOffset(null, (_a = mutationEventDetail.add) === null || _a === void 0 ? void 0 : _a.indexes);
      }
    }, {
      key: "_handleRemove",
      value: function _handleRemove(event) {
        var _a;

        var self = this;

        var metadataArray = event[TableDataSourceAdapter._KEYS].map(function (value) {
          return new self.ItemMetadata(self, value);
        });

        var keySet = new Set();

        event[TableDataSourceAdapter._KEYS].map(function (key) {
          keySet.add(key);
        });

        var operationEventDetail = new self.DataProviderOperationEventDetail(self, keySet, metadataArray, event[TableDataSourceAdapter._DATA], event[TableDataSourceAdapter._INDEXES]);
        var mutationEventDetail = new self.DataProviderMutationEventDetail(self, null, operationEventDetail, null);
        self.dispatchEvent(new ojdataprovider.DataProviderMutationEvent(mutationEventDetail));

        this._adjustIteratorOffset((_a = mutationEventDetail.remove) === null || _a === void 0 ? void 0 : _a.indexes, null);
      }
    }, {
      key: "_handleReset",
      value: function _handleReset(event) {
        var self = this;

        if (!self._requestEventTriggered && !self._isPagingModelTableDataSource()) {
          self._startIndex = 0;
          self.dispatchEvent(new ojdataprovider.DataProviderRefreshEvent());
        }
      }
    }, {
      key: "_handleSort",
      value: function _handleSort(event) {
        var self = this;

        if (!self._ignoreSortEvent) {
          self._startIndex = null;
          self.dispatchEvent(new ojdataprovider.DataProviderRefreshEvent());
        }
      }
    }, {
      key: "_handleChange",
      value: function _handleChange(event) {
        var self = this;

        var metadataArray = event[TableDataSourceAdapter._KEYS].map(function (value) {
          return new self.ItemMetadata(self, value);
        });

        var keySet = new Set();

        event[TableDataSourceAdapter._KEYS].map(function (key) {
          keySet.add(key);
        });

        var operationEventDetail = new self.DataProviderOperationEventDetail(self, keySet, metadataArray, event[TableDataSourceAdapter._DATA], event[TableDataSourceAdapter._INDEXES]);
        var mutationEventDetail = new self.DataProviderMutationEventDetail(self, null, null, operationEventDetail);
        self.dispatchEvent(new ojdataprovider.DataProviderMutationEvent(mutationEventDetail));
      }
    }, {
      key: "_handleRefresh",
      value: function _handleRefresh(event) {
        var self = this;

        if (!self._isFetching && !self._requestEventTriggered) {
          if (event[TableDataSourceAdapter._OFFSET] != null) {
            self._startIndex = event[TableDataSourceAdapter._OFFSET];
          } else {
            self._startIndex = null;
          }

          self.dispatchEvent(new ojdataprovider.DataProviderRefreshEvent());
        }

        self._requestEventTriggered = false;
      }
    }, {
      key: "_handleRequest",
      value: function _handleRequest(event) {
        var self = this;

        if (self._ignoreDataSourceEvents.length > 0) {
          return;
        }

        if (typeof ojmodel.Model !== 'undefined' && event instanceof ojmodel.Model) {
          return;
        }

        if (!self._isFetching) {
          if (event[TableDataSourceAdapter._STARTINDEX] > 0 && self.getStartItemIndex() == 0) {
            self._startIndex = event[TableDataSourceAdapter._STARTINDEX];
          }

          self._requestEventTriggered = true;
          self.dispatchEvent(new ojdataprovider.DataProviderRefreshEvent());
        }
      }
    }, {
      key: "_handleError",
      value: function _handleError(event) {
        var self = this;

        if (self._fetchRejectFunc) {
          self._fetchRejectFunc(event);
        }

        self._isFetching = false;
        self._requestEventTriggered = false;
      }
    }, {
      key: "_handlePage",
      value: function _handlePage(event) {
        var self = this;
        self._isFetching = false;
        self._requestEventTriggered = false;
        var options = {};
        options['detail'] = event;
        self.dispatchEvent(new ojeventtarget.GenericEvent(oj.PagingModel.EventType['PAGE'], options));
      }
    }, {
      key: "_addTableDataSourceEventListeners",
      value: function _addTableDataSourceEventListeners() {
        this.removeAllListeners();
        this.addListener('sync', this._handleSync);
        this.addListener('add', this._handleAdd);
        this.addListener('remove', this._handleRemove);
        this.addListener('reset', this._handleReset);
        this.addListener('sort', this._handleSort);
        this.addListener('change', this._handleChange);
        this.addListener('refresh', this._handleRefresh);
        this.addListener('request', this._handleRequest);
        this.addListener('error', this._handleError);
        this.addListener('page', this._handlePage);
      }
    }, {
      key: "_removeTableDataSourceEventListeners",
      value: function _removeTableDataSourceEventListeners() {
        this.removeListener('sync');
        this.removeListener('add');
        this.removeListener('remove');
        this.removeListener('reset');
        this.removeListener('sort');
        this.removeListener('change');
        this.removeListener('refresh');
        this.removeListener('request');
        this.removeListener('error');
        this.removeListener('page');
      }
    }, {
      key: "_isPagingModelTableDataSource",
      value: function _isPagingModelTableDataSource() {
        if (this.tableDataSource['getStartItemIndex'] != null) {
          return true;
        }

        return false;
      }
    }]);

    return TableDataSourceAdapter;
  }(DataSourceAdapter);

  TableDataSourceAdapter._STARTINDEX = 'startIndex';
  TableDataSourceAdapter._SILENT = 'silent';
  TableDataSourceAdapter._SORTCRITERIA = 'sortCriteria';
  TableDataSourceAdapter._PAGESIZE = 'pageSize';
  TableDataSourceAdapter._OFFSET = 'offset';
  TableDataSourceAdapter._SIZE = 'size';
  TableDataSourceAdapter._CONTAINSPARAMETERS = 'containsParameters';
  TableDataSourceAdapter._RESULTS = 'results';
  TableDataSourceAdapter._FETCHTYPE = 'fetchType';
  ojeventtarget.EventTargetMixin.applyMixin(TableDataSourceAdapter);

  oj._registerLegacyNamespaceProp('TableDataSourceAdapter', TableDataSourceAdapter);

  return TableDataSourceAdapter;
});

}())