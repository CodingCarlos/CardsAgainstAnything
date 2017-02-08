(function(){

	angular.module("app")
		.factory("meta", metaService);

	function metaService(api) {

		var meta = {
			description: '',
			keywords: '',
			reset: reset,
			setMetaDescription: setMetaDescription,
			appendMetaKeywords: appendMetaKeywords
		};

		return meta;

		function reset() {
			meta.description = '';
			meta.keywords = '';
		}

		function setMetaDescription(newMetaDescription) {
			meta.description = newMetaDescription;
		}

		function setMetaKeywords(newMetaKeywords) {
			meta.keywords = newMetaKeywords;
		}

		function appendMetaKeywords(newKeywords) {
			for (var key in newKeywords) {
				if (meta.keywords === '') {
					meta.keywords += newKeywords[key].name;
				} else {
					meta.keywords += ', ' + newKeywords[key].name;
				}
			}
		}

	}
	
})();