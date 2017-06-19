/**
 * google-results-checker
 * Copyright(c) 2017 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * output results into console
 * @param  {Array}   [results=[]]     [array of result objects returned crawler]
 * @param  {Boolean} [fullInfo=false] [flag that decides whether to display full info about provided results]
 * @api public
 */

const reporter = (results = [], fullInfo = false) => {
  if (!results.length) {
    return fullInfo ? console.log('No results found.') : console.log('0');
  }

  if (fullInfo) {
    results.forEach(function (r) {
      console.log('Position: %d', r.position);
      console.log('Text:     %s', r.text);
      console.log('Url:      %s', r.url);
      console.log('');
    });
  } else {
    console.log(results.map(function (r) {
      return r.position;
    }).join(', '));
  }
};

export default reporter;
