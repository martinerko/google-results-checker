'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reporter = undefined;

var _crawler = require('./crawler');

var _crawler2 = _interopRequireDefault(_crawler);

var _report = require('./report');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * google-results-checker
 * Copyright(c) 2017 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

exports.default = _crawler2.default;
exports.reporter = _report2.default;