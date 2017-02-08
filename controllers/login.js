(function(){

	angular.module("app")
		.controller("loginCtrl", loginController);
	
	function loginController($scope, $state, session, title, meta) {
		var self = this;

		// Params
		self.name = '';

		// Properties

		// Functions
		self.login = function() {
			session.set({name: self.name, uid: '123', pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg', notifications: 0});
			$state.go('list')
		};

	}

	function update() {
		setTimeout(function() {
			// Update also the component handler to fix the js menus
			window.componentHandler.upgradeAllRegistered();
		}, 0); 
	}
	
})();