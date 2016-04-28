

function initmap() {
	var map = L.map('map', {
	fullscreenControl: true
		}
	).setView([53.8039517, -1.5545701], 15);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	    // true by default, false if you want a wild map
	sleep: true,

	// time(ms) for the map to fall asleep upon mouseout
	sleepTime: 750,

	// time(ms) until map wakes on mouseover
	wakeTime: 750,

	// defines whether or not the user is prompted oh how to wake map
	sleepNote: false,

	// should hovering wake the map? (clicking always will)
	hoverToWake: false,
	
	}).addTo(map);
	
	var lca = L.control.locate({
		stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
		remainActive: false,
	}).addTo(map);

//map.addControl( new L.Control.Compass() );

	function options(){
			
	  land:'#FFFF00';
	  water:'#3333FF';
	  marker:'#000000';
	  topojsonSrc: 'json/world.json'

	}


	

	L.marker([53.8039517, -1.5545701]).addTo(map)

	  .bindPopup('<h3>We are here in the<br>geography department!</h3>')
	 

}