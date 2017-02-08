(function(){

	angular.module("app")
		.controller("roomCtrl", roomController);
	
	function roomController($scope, room, title, meta) {
		var self = this;

		// Params

		// Properties
		self.service = room;

		// Methods

		// Hands on!
		// if(self.service.data.length == 0) {
			self.service.get();	
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