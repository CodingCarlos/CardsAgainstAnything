(function(){

	angular.module("app")
		.factory("room", roomService);

	function roomService($rootScope) {

		var room = {
			data: {
				id: -1,
				name: null,
				players: []
			},
			get: get,
			join: join,
			exit: clear
		};

		return room;

		function get(roomid) {
			// Update this for the room data...
			room.data = {
				id: 1,
				name: 'default',
				players: [
					{
						id: 90,
						name: 'john',
						pic: 'http://www.swaconhospital.com/wp-content/uploads/2016/12/3244.png'
					},
					{
						id: 91,
						name: 'doe',
						pic: 'http://www.swaconhospital.com/wp-content/uploads/2016/12/3244.png'
					},
					{
						id: 92,
						name: 'donny',
						pic: 'http://www.swaconhospital.com/wp-content/uploads/2016/12/3244.png'
					}
				]
			}
		}

		function join(room) {

			api.post(api.url + '/join', {user: session.uid, room: room});

		}


		function clear() {
			room.data = {
				id: -1,
				name: null,
				players: []
			};
		}


	}
	
})();