

function initmap() {
	var map = L.map('map').setView([51.505, -0.09], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([51.5, -0.09]).addTo(map)
<<<<<<< HEAD
	  .bindPopup('<h3>A pretty CSS3 popup.<br> Easily customizable.</h3>')
	  .openPopup();
	  

=======
	  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
	  .openPopup();
>>>>>>> origin/master
}