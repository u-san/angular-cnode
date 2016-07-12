import '../controllers/topicsController'
import '../controllers/headerController'
import '../controllers/sidebarController'
import Topics from '../views/topics.html'
import Header from '../views/header.html'
import Sidebar from '../views/sidebar.html'

// 需用数组声明好依赖项 否则编译压缩后会找不到依赖项
angular.module('app.routes')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("index", {
        resolve: {},
        url: "/:type",
        views: {
            '': {
                controller: 'topicsController',
                template: Topics,
                controllerAs: 'topics'
            },
            'header@index': {
                controller: 'headerController',
                template: Header,
                controllerAs: 'header'
            },
            'sidebar@index': {
                controller: 'sidebarController',
                template: Sidebar,
                controllerAs: 'sidebar'
            },
        }
    })
    $urlRouterProvider.otherwise('/');
}])