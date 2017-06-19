/**
 * google-results-checker
 * Copyright(c) 2017 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

import request from 'request-promise';
import cheerio from 'cheerio';
import { escape } from 'querystring';
import { SITE, KEYWORDS } from './config';

/**
 * crawler information from google search result page
 * @param  {String} [keywords=KEYWORDS] [keywords to search for]
 * @param  {String} [site=SITE]         [site url we are looking for along our keywords]
 * @return {Array}                      [description]
 * @api public
 */

const crawler = (keywords = KEYWORDS, site = SITE) => {
  return request('https://www.google.com/search?q=' + escape(keywords) + '&num=100')
    .then(rawResponse => {
      const $ = cheerio.load(rawResponse);

      let results = [];
      let link;
      let url;
      let text;

      // process search results and gather basic informations
      $('.g h3 a').each((index, elem) => {
        link = $(elem);
        url = link.attr('href');
        text = link.text();

        if (~url.indexOf(site)) {
          results.push({
            position: index + 1,
            url: url.replace(/^\/url\?q=/, ''),
            text
          });
        }
      });
      return results;
    });
};

export default crawler;
