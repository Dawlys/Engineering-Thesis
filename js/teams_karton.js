var teams_karton = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			properties: {
				ID: 'Arsenal',
				City: 'London',
				
				iconUrl: './img/arsenal.svg',

				Seasons: [
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30, 31,
				],
				Positions: ['10', '4', '12', '5', '3', '1', '2', '2', '2','1','2','1','2','4','4','3','4','3','4','3','4','4','3','2','5','6','5','8','8','5','2','2'],
			},
			geometry: { coordinates: [-0.10842461937582776, 51.55514359208497], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Chelsea',
				City: 'London',
				
				iconUrl: './img/chelsea.svg',

				Seasons: [
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30, 31,
				],
				Positions: ['11', '14', '11', '11', '6', '4', '3', '5', '6', '6', '4', '2', '1', '1', '2', '2', '3', '1', '2', '6', '3', '3', '1', '10','1','5','3', '4', '4', '3', '12', '6',],
			},
			geometry: { coordinates: [-0.19095783176418066, 51.48177418329465], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Tottenham Hotspur',
				City: 'London',
		
				iconUrl: './img/tottenham.svg',

				Seasons: [
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30, 31,
				],
				Positions: ['8', '15', '7', '8', '10', '14', '11', '10', '12', '9', '10', '14', '9', '5', '5', '11', '8', '4', '5', '4', '5', '6', '5', '3','2','3','4', '6', '7', '4', '8', '5'],
			},
			geometry: { coordinates: [-0.06621237408474609, 51.604327088881625], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Crystal Palace',
				City: 'London',
		
				iconUrl: './img/crystal_palace.svg',

				Seasons: [0, 2, 5, 12, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
				Positions: ['20', '', '19', '', '', '20', '', '', '', '', '', '', '18', '', '', '', '', '', '', '', '', '11', '10', '15','14','11','12', '14', '14', '12', '11', '10'],
			},
			geometry: { coordinates: [-0.08568430024116465, 51.39817946936943], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Wimbledon',
				City: 'London',
			
				iconUrl: './img/wimbledon.svg',

				Seasons: [0, 1, 2, 3, 4, 5, 6, 7],
				Positions: ['12', '6', '9', '14', '8', '15', '16', '18'],
			},
			geometry: { coordinates: [-0.18665664893336692, 51.431560409747526], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Queens Park Rangers',
				City: 'London',
		
				iconUrl: './img/queens_park_rangers.svg',

				Seasons: [0, 1, 2, 3, 19, 20, 22],
				Positions: ['5', '9', '8', '19', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '17', '20', '', '20', '','','','', '', '', '', '', ''],
			},
			geometry: { coordinates: [-0.23211615826453014, 51.50930385422325], type: 'Point' },
		},

		{
			type: 'Feature',
			properties: {
				ID: 'West Ham United',
				City: 'London',
		
				iconUrl: './img/west_ham_utd.svg',

				Seasons: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 17, 16, 18, 20, 21, 22, 24, 23, 25, 26, 27, 28, 29, 30, 31,
				],
				Positions: ['','13', '14', '10', '14', '8', '5', '9', '15', '7', '18','','', '9', '15', '10', '9', '17','20','', '10', '13', '12', '7', '11', '13', '10', '16', '6', '7', '14', '9'],
			},
			geometry: { coordinates: [-0.016419386650727955, 51.538733888468265], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Watford',
				City: 'Watford',
			
				iconUrl: './img/watford.svg',

				Seasons: [7, 14, 23, 24, 25, 26, 27, 29],
				Positions: [
					'', '', '', '', '', '', '', '20', '', '', '', '', '', '', '20', '', '', '', '', '', '', '', '', '13', '17', '14', '11', '19', '', '19', '',
					'',
				],
			},
			geometry: { coordinates: [-0.4015282925630834, 51.649916330853294], type: 'Point' },
		},

		{
			type: 'Feature',
			properties: {
				ID: 'Charlton Athletic',
				City: 'London',
		
				iconUrl: './img/charlton_athletic.svg',

				Seasons: [6, 8, 9, 10, 11, 12, 13, 14],
				Positions: ['', '', '', '', '', '', '18', '', '9','14','12','7','11','13','19'],
			},
			geometry: { coordinates: [0.03651857633588378, 51.486466309460944], type: 'Point' },
		},
		{
			type: 'Feature',
			properties: {
				ID: 'Fulham',
				City: 'London',
			
				iconUrl: './img/fulham.svg',

				Seasons: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26, 28, 30, 31],
				Positions: ['', '', '', '', '', '', '','', '', '13', '14', '9', '13', '12', '16', '17', '7', '12', '8', '9', '12', '19', '', '','','','19', '', '18', '', '10', '13'],
			},
			geometry: { coordinates: [-0.22160524646539653, 51.47495103361438], type: 'Point' },
		},

		{
			type: 'Feature',
			properties: {
				ID: 'Brentford F.C',
				City: 'London',
				iconUrl: './img/brentford.svg',
			
				Seasons: [29, 30, 31],
				Positions:['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','','','','','','13','9','16'], 	

				
			},
            geometry: { coordinates: [-0.2888211622085392, 51.49081627710033], type: 'Point' },
		},
	],
}

