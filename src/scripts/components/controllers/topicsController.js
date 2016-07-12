
angular.module('app.controllers').controller('topicsController', [
  '$scope',
  '$stateParams',
  'fetch',
  function($scope, $stateParams, fetch){
    let vm = this;
    let home = {
      name:'cccccc',
      data: []
    };
    angular.extend(vm,home);
    let tab = $stateParams.type ? $stateParams.type : 'all';
    fetch.fetchTopics({tab: tab}).then(function(res){
      console.log(res.data)
      vm.data = res.data.data
  });

}]);