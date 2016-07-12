import { TAGS } from '../../config'

function getTagOpt(obj, data) {
	if (obj.top === 'true') return data.top
	if (obj.good === 'true') return data.good
	if (!obj.tab) return
	return data[obj.tab]
}

angular.module('app.directives').directive('tag',function(){
  return {
    restrict:'AE',
    scope: {
    	tab: '@tab',
  		good: '@good',
  		top: '@top'
  	},
  	replace: true,
    template: '<div class="tag"></div>',
    link:function(scope,ele){
    	let tagOpt = getTagOpt(scope, TAGS);
    	if (!tagOpt) return;
    	ele.addClass(tagOpt.color);
    	ele.html(tagOpt.name);
    }
  };
});