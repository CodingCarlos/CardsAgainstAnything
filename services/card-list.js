(function(){

	angular.module("app")
		.factory("cardList", cardListService);

	function cardListService($rootScope) {

		var cardList = {
			data: [],
			get: get,
			clear: clear
		};

		return cardList;

		function get(filters) {

			// DO SOMETHING HERE!!
			cardList.data = [
				{
					text: 'If we capture just 1% of the market for ________________ , we\'ll be a unicorn in no time.',
					answer: false
				},
				{
					text: 'Peter Thiel’s freezer of millennial blood',
					answer: true
				},
				{
					text: 'Early investment in Clinkle',
					answer: true
				},
				{
					text: 'The reason millennials don’t buy cars',
					answer: true
				},
				{
					text: 'The reason millennials have less sex',
					answer: true
				},
				{
					text: 'Bootstrapped SaaS companies',
					answer: true
				},
				{
					text: 'Fixed-gear bike salesmen',
					answer: true
				}
			];

		}


		function clear() {
			cardList.data = [];
		}


	}
	
})();