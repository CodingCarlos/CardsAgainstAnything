(function(){

	angular.module("app")
		.controller("landingCtrl", landingController);
	
	function landingController($scope, room, title, meta) {
		var self = this;

		// Params
		self.room = '101';

		// Properties
		// self.service = cardList;

		// Methods

		// Hands on!
		// if(self.service.data.length == 0) {
		// 	self.service.get();	
		// }

		title.set('Cartas contra cualquier cosa');


		// Functions

	}

	function update() {
		setTimeout(function() {
			// Update also the component handler to fix the js menus
			window.componentHandler.upgradeAllRegistered();
		}, 0); 
	}
	
})();