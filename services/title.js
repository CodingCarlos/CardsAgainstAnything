(function(){

	angular.module("app")
		.factory("title", titleService);

	function titleService() {

		var title = {
			title: 'Cards Against Anything',
			get: function() {
				return title.title;
			},
			set: set
		};

		return title;

		function set(newTitle) {

			if (typeof(newTitle) === 'undefined' || !newTitle) {
				newTitle = 'Home';
			}

			title.title = 'Cards Against Anything - ' + newTitle;

		}

	}
	
})();