(function() {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(function () {
  'use strict';

  var SyncValidatorAdapter = /*#__PURE__*/function () {
    function SyncValidatorAdapter(options) {
      _classCallCheck(this, SyncValidatorAdapter);

      this.options = options;
    }

    _createClass(SyncValidatorAdapter, [{
      key: "validate",
      value: function validate(value) {
        var self = this;

        if (!this._validator) {
          this._InitLoadingPromise();

          return this._loadingPromise.then(function (validatorConstructor) {
            self._validator = new validatorConstructor.default(self.options);

            try {
              self._validator.validate(value);
            } catch (e) {
              return Promise.reject(e);
            }

            return null;
          });
        }

        try {
          this._validator.validate(value);
        } catch (e) {
          return Promise.reject(e);
        }

        return Promise.resolve(null);
      }
    }, {
      key: "_GetHint",
      value: function _GetHint() {
        var self = this;

        if (!this._validator) {
          this._InitLoadingPromise();

          return this._loadingPromise.then(function (validatorConstructor) {
            self._validator = new validatorConstructor.default(self.options);
            return self._validator.getHint();
          });
        }

        return Promise.resolve(self._validator.getHint());
      }
    }, {
      key: "_InitLoadingPromise",
      value: function _InitLoadingPromise() {}
    }]);

    return SyncValidatorAdapter;
  }();

  return SyncValidatorAdapter;
});

}())