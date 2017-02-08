(function() {

	var app = angular.module('app', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', 
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/landing');
			
				$stateProvider
					.state('landing', {
						url: "/landing",
						views: {
							"content": { templateUrl: "views/landing.html" }
						}
					})
					.state('room', {
						url: "/room",
						views: {
							"content": { templateUrl: "views/room.html" }
						}
					})
					.state('login', {
						url: "/login",
						views: {
							"content": { templateUrl: "views/login.html" }
						}
					})
					.state('list', {
						url: "/list",
						views: {
							"content": { templateUrl: "views/card-list.html" }
						}
					});

			}
		]);

	
})();