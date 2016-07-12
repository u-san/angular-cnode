import { NAV_ITEM } from '../../config'

function getTitle(type) {

	let obj = NAV_ITEM.filter(item => item.key === type)
	let title = ''
	switch (type) {
		case 'topic':
			title = '主题'
			break
		case 'login':
			title = '登录'
			break
		case 'user':
			title = '用户信息'
			break
		default:
			title = obj.length ? obj[0].name : '全部'
			break
	}

	return title;
}


angular.module('app.controllers').controller('headerController', [
	'$scope',
	'$rootScope',
	'$stateParams',
	function($scope, $rootScope, $stateParams) {

		var vm = this;
	  var header = {
	    title: getTitle($stateParams.type),
	    sidebarShow: false,
	    toggleSidebar: function() {
	    	$rootScope.$broadcast('toggleSidebar', !vm.sidebarShow)
	    }
	  };

	  angular.extend(vm, header);

	  $rootScope.$on('toggleSidebar', function(e, data) {
			vm.sidebarShow = data;
		})
		console.log(vm)

	}
])