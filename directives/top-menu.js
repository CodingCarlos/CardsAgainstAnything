(function () {

	angular
		.module('app')
		.directive('topmenu', topMenuDirective);


	function topMenuDirective() {

		return {
			restrict: 'E',
			templateUrl: 'views/top-menu.html'
		}

	}

})();