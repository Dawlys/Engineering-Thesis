var map = L.map('map', {}).setView([52.565849527013114, -1.4674988243529612], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 15,
	minZoom: 6,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

// granice mapy
var bounds_map = [
	[71.5, -8.0], // północno-zachodni róg
	[48.0, 3.0], // południowo-wschodni róg
]
map.setMaxBounds(bounds_map)
// Karton dla Wielkiego Londynu

var map2 = L.map('map2').setView([51.51587323160755, -0.12969459384433432], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 9,
	minZoom: 9,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map2)

map2.dragging.disable()
//Full screen

//Karton dla Wielkiego Manchesteru oraz Merseyside

var map3 = L.map('map3').setView([53.5449385582298, -2.6295967496750916], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 8,
	minZoom: 8,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map3)

map3.dragging.disable()

document.addEventListener('DOMContentLoaded', function () {
	var map2 = document.getElementById('map2')
	var map3 = document.getElementById('map3')

	document.getElementById('choice_map').addEventListener('change', function () {
		var map_option = this.value

		if (map_option == 'option1') {
			map3.style.zIndex = '9998'
			map2.style.zIndex = '9999'
		} else if (map_option == 'option2') {
			map2.style.zIndex = '9998'
			map3.style.zIndex = '9999'
		}
	})
})
//zmienne dla markerów
var icon_clubs = L.icon({
	iconUrl: './img/rest_clubs.svg',
})
var icon_champion = L.icon({
	iconUrl: './img/champion.svg',
})
var icon_relegate = L.icon({
	iconUrl: './img/relegate.svg',
})
var icon_runner_up = L.icon({
	iconUrl: './img/runner_up.svg',
})

//działanie suwaka
document.getElementById('suwak').addEventListener('input', function (x) {
	var index = parseInt(x.target.value)

	markers(index)
	markers_karton(index)
	markers_karton_second(index)
})
//przyciski do suwaka

function markers(index) {
	if (teams.markers) {
		map.removeLayer(teams.markers)
	}

	teams.markers = L.geoJSON(teams, {
		pointToLayer: function (feature, latlng) {
			var club_name = feature.properties.ID
			var crest = L.icon({ iconUrl: feature.properties.iconUrl, iconSize: [50, 50] })
			var points = feature.properties.Points
			var wins = feature.properties.Wins
			var draws = feature.properties.Draws
			var loses = feature.properties.Loses
			var position = feature.properties.Positions
			var goal = feature.properties.Goals
			var conceded = feature.properties.Goals_conceded

			if (feature.properties.Seasons.includes(index)) {
				var marker = L.marker(latlng, { icon: crest, title: club_name }).bindPopup(
					'<h3>' +
						club_name +
						'</h3>' +
						'<p>Miejsce: ' +
						position[index] +
						'</p>' +
						'<p>Zdobyte punkty: ' +
						points[index] +
						'</p>' +
						'<p>Liczba zwycięstw: ' +
						wins[index] +
						'</p>' +
						'<p>Liczba remisów: ' +
						draws[index] +
						'</p>' +
						'<p>Liczba porażek: ' +
						loses[index] +
						'</p>' +
						'<p>Strzelone bramki: ' +
						goal[index] +
						'</p>' +
						'<p>Stracone bramki: ' +
						conceded[index] +
						'</p>'
				)

				// Event listener to change marker icon
				var signs = document.querySelector('#sign')
				signs.addEventListener('click', function () {
					if (position[index] == parseInt(1)) {
						marker.setIcon(icon_champion)
					} else if (position[index] == parseInt(2)) {
						marker.setIcon(icon_runner_up)
					} else if (
						(index <= 2 && position[index] >= parseInt(20)) ||
						(index > 2 && position[index] >= parseInt(18))
					) {
						marker.setIcon(icon_relegate)
					} else {
						marker.setIcon(icon_clubs)
					}
				})
				var delete_sign = document.querySelector('#crests')
				delete_sign.addEventListener('click', function () {
					marker.setIcon(crest)
				})

				// Return the marker to be added to the map
				return marker
			}
		},
	}).addTo(map)
}
//zmiana wyglądu markera

// mapa 2
function markers_karton(index) {
	if (teams_karton.markers_karton) {
		map2.removeLayer(teams_karton.markers_karton)
	}

	teams_karton.markers_karton = L.geoJSON(teams_karton, {
		pointToLayer: function (feature, latlng) {
			var crest_mini = L.icon({ iconUrl: feature.properties.iconUrl, iconSize: [25, 25] })

			if (feature.properties.Seasons.includes(index)) {
				return L.marker(latlng, { icon: crest_mini })
			}
		},
	}).addTo(map2)
}
//mapa 3
function markers_karton_second(index) {
	if (teams_karton_second.markers_karton_second) {
		map3.removeLayer(teams_karton_second.markers_karton_second)
	}

	teams_karton_second.markers_karton_second = L.geoJSON(teams_karton_second, {
		pointToLayer: function (feature, latlng) {
			var crest_mini_second = L.icon({ iconUrl: feature.properties.iconUrl, iconSize: [30, 30] })

			if (feature.properties.Seasons.includes(index)) {
				return L.marker(latlng, { icon: crest_mini_second })
			}
		},
	}).addTo(map3)
}

markers(0)
markers_karton(0)
markers_karton_second(0)
//zmiana wyglądu markera

//predkość odtwarzania

document.getElementById('speed').addEventListener('change', function () {
	var speed_option = this.value
	if (speed_option == 'speed1') {
		speed_tempo = 1000
	} else if (speed_option == 'speed2') {
		speed_tempo = 5000
	} else if (speed_option == 'speed3') {
		speed_tempo = 10000
	}
})

//przycisk play

var iteration_value
var speed_tempo = 1000

var play_button = document.querySelector('#play')

var iteration = () => {
	iteration_value = setInterval(() => {
		suwak.value++
		map.removeLayer(teams.markers)
		map2.removeLayer(markers_karton)
		map3.removeLayer(markers_karton_second)
		markers_karton_second(parseInt(suwak.value))
		markers_karton(parseInt(suwak.value))
		markers(parseInt(suwak.value))
		
		if (parseInt(suwak.value) >= 31) {
			clearInterval(iteration_value)
		}
	}, speed_tempo)
}

play_button.addEventListener('click', iteration)

//przycisk pause
var pause_button = document.querySelector('#pause')

var stop_iteration = () => {
	clearInterval(iteration_value)
}

pause_button.addEventListener('click', stop_iteration)

//przycisk reset

var reset_button = document.querySelector('#reset')

var reset_iteration = () => {
	suwak.value = 0
	clearInterval(iteration_value)
	map.removeLayer(teams.markers)
	map2.removeLayer(markers_karton)
	map3.removeLayer(markers_karton_second)
	markers(0)
	markers_karton(0)
	markers_karton_second(0)
}

reset_button.addEventListener('click', reset_iteration)
