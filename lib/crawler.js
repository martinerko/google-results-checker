'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _querystring = require('querystring');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * crawler information from google search result page
 * @param  {String} [keywords=KEYWORDS] [keywords to search for]
 * @param  {String} [site=SITE]         [site url we are looking for along our keywords]
 * @return {Array}                      [description]
 * @api public
 */

/**
 * google-results-checker
 * Copyright(c) 2017 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var crawler = function crawler() {
  var keywords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config.KEYWORDS;
  var site = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.SITE;

  return (0, _requestPromise2.default)('https://www.google.com/search?q=' + (0, _querystring.escape)(keywords) + '&num=100').then(function (rawResponse) {
    var $ = _cheerio2.default.load(rawResponse);

    var results = [];
    var link = void 0;
    var url = void 0;
    var text = void 0;

    // process search results and gather basic informations
    $('.g h3 a').each(function (index, elem) {
      link = $(elem);
      url = link.attr('href');
      text = link.text();

      if (~url.indexOf(site)) {
        results.push({
          position: index + 1,
          url: url.replace(/^\/url\?q=/, ''),
          text: text
        });
      }
    });
    return results;
  });
};

exports.default = crawler;
module.exports = exports['default'];