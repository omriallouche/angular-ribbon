angular.module('ribbonApp',[]);

angular.module('ribbonApp').run(function ()
{
});

angular.module('ribbonApp').config(function ()
{
});


angular.module('ribbonApp').controller('basicController', function () {
});

angular.module('ribbonApp').directive('ribbon', function ()
{
	return {
		restrict: 'A',
		link: function link(scope, element) {element.append('<div class="ribbon-wrapper-right"><div class="ribbon-right">Pro</div></div>');}
	};
});
