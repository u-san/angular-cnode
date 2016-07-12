import { APIS } from '../../config'

const defaultParams = {
  tab: 'all',
  limit: 20
}

var module = angular.module('app.services');
module.factory('fetch', ['$http', function($http) {
  var xhrRequests = {
      fetchTopics: function(params){

          return $http({
            method: 'GET',
            url: APIS.LIST,
            params: Object.assign({}, defaultParams ,params)
          });
      }
  }
  return xhrRequests;
}])