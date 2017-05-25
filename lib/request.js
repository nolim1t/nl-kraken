const isStringEmpty = require('fuckingundefinedemptynull').isStringSet;
const request = require('request');
const assignFormParamsIfExist = require('assign-obj-params');
const buildquerystring = require('obj-to-querystring');

module.exports = {
  public: (requestinfo, callback) => {
    if (isStringEmpty(requestinfo.endpoint)) {
      var baseurl = requestinfo.baseurl || 'https://api.kraken.com/0/public/';
      var fullurl = baseurl + requestinfo.endpoint;
      var method = requestinfo.method || 'POST';
      var queryString = '';
      var formParams = {
      };
      queryString = buildquerystring(queryString, requestinfo, 'pairing');
      queryString = buildquerystring(queryString, requestinfo, 'date');

      // Post body
      assignFormParamsIfExist(formParams, requestinfo, 'pair'); // trading pairs

      request({uri: fullurl + queryString, method: method, form: formParams}, function(e,r,b) {
        if (!e) {
          try {
            if (JSON.parse(b)['result'] !== undefined) {
              callback({
                message: 'Done',
                response: JSON.parse(b)['result']
              });
            } else {
                if (JSON.parse(b)['error'] !== undefined) {
                  callback({
                    message: 'Done',
                    response: JSON.parse(b)['error']
                  });
                } else {
                  callback({
                    message: 'Unknown response'
                  });
                }
            }
          } catch (jsonparseError) {
            callback({
              message: 'Error parsing response',
              error: jsonparseError
            });
          }
        } else {
          callback({
            message: 'Error received from API',
            error: e
          });
        }
      });
    } else {
      callback({
        message: 'Requires: endpoint'
      });
    }
  }
}
