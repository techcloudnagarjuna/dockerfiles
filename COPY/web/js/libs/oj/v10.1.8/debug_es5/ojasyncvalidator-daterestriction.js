(function() {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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
define(['require', 'ojs/ojasyncvalidator-adapter'], function (require, SyncValidatorAdapter) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      var n = {};

      if (e) {
        Object.keys(e).forEach(function (k) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        });
      }

      n['default'] = e;
      return n;
    }
  }

  SyncValidatorAdapter = SyncValidatorAdapter && Object.prototype.hasOwnProperty.call(SyncValidatorAdapter, 'default') ? SyncValidatorAdapter['default'] : SyncValidatorAdapter;
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
   * @since 8.0.0
   * @export
   * @class AsyncDateRestrictionValidator
   * @final
   * @implements AsyncValidator
   * @classdesc Constructs an AsyncDateRestrictionValidator that ensures the value provided is
   * not in a disabled entry of dayMetaData.
   * @param {Object=} options an object literal used to provide the following properties
   * @ojtsmodule
   * @ojtsimport {module: "ojvalidator-async", type: "AMD", importName: "AsyncValidator"}
   * @ojtsimport {module: "ojvalidator-daterestriction", type: "AMD", importName: "DateRestrictionValidator"}
   * @ojsignature [{target: "Type",
   *                value: "class AsyncDateRestrictionValidator<V> implements AsyncValidator<V>"},
   *               {target: "Type",
   *                value: "DateRestrictionValidator.ValidatorOptions",
   *                for: "options", jsdocOverride: true}
   *              ]
   * @see oj.DateRestrictionValidator
   */

  /**
   * Validates whether the date provided is part of disabled date. Returns a
   * Promise which resolves when valid and rejects which invalid.
   *
   * @param {string} value that is being validated
   * @returns {Promise.<void>}
   * @ojsignature {target: "Type",
   *               value: "(value: V): Promise<void>"}
   * @memberof AsyncDateRestrictionValidator
   * @instance
   * @export
   * @method validate
   */

  /**
   * A message to be used as hint. As there exists no hint for AsyncDateRestrictionValidator, default is to return null.
   *
   * @memberof AsyncDateRestrictionValidator
   * @instance
   * @export
   * @name hint
   * @type {Promise.<string|null>}
   */

  /**
   * End of jsdoc
   */

  var AsyncDateRestrictionValidator = /*#__PURE__*/function (_SyncValidatorAdapter) {
    _inherits(AsyncDateRestrictionValidator, _SyncValidatorAdapter);

    var _super = _createSuper(AsyncDateRestrictionValidator);

    function AsyncDateRestrictionValidator(options) {
      var _this;

      _classCallCheck(this, AsyncDateRestrictionValidator);

      _this = _super.call(this, options);
      _this.options = options;
      return _this;
    }

    _createClass(AsyncDateRestrictionValidator, [{
      key: "hint",
      get: function get() {
        return _get(_getPrototypeOf(AsyncDateRestrictionValidator.prototype), "_GetHint", this).call(this);
      }
    }, {
      key: "_InitLoadingPromise",
      value: function _InitLoadingPromise() {
        if (!this._loadingPromise) {
          this._loadingPromise = new Promise(function (resolve, reject) {
            require(['ojs/ojvalidator-daterestriction'], function (m) {
              resolve(_interopNamespace(m));
            }, reject);
          });
        }
      }
    }]);

    return AsyncDateRestrictionValidator;
  }(SyncValidatorAdapter);

  return AsyncDateRestrictionValidator;
});

}())