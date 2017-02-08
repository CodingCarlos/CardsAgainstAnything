(function() {

	var app = angular.module('app', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', 
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/');
			
				$stateProvider
					.state('list', {
						url: "/",
						views: {
							"sidebar": { templateUrl: "views/sidebar.html" },
							"content": { templateUrl: "views/card-list.html" }
						},
						viewCache: true
					})
					.state('search', {
						url: "/search",
						views: {
							"overview": { templateUrl: "views/search.html" }
						}
					});

			}
		]);

	
})();