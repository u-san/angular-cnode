import { NAV_ITEM } from '../../config'

angular.module('app.controllers').controller('sidebarController', [
	'$scope',
	'$rootScope',
	function($scope,$rootScope) {
		var vm = this;

		var sidebar = {
			items: NAV_ITEM,
			sidebarShow: false,
			toggleSidebar: function() {
				$rootScope.$broadcast('toggleSidebar', !vm.sidebarShow)
			}
		}
		angular.extend(vm, sidebar)

		$rootScope.$on('toggleSidebar', function(e, data) {
			vm.sidebarShow = data
		})
	}
]);