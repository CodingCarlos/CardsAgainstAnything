(function () {

	angular
		.module('app')
		.directive('card', houseCardDirective);


	function houseCardDirective(session) {

		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			link: function(scope, element, attrs) {
				scope.session = session;
			},
			templateUrl: 'views/card.html'
		}

	}

})();