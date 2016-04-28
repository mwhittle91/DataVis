var info

function exampleMap() {
var mapExample = L.map('mapExample', {
	fullscreenControl: true
	}
	).setView([54.505, -0.09], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright"&gtOpenStreetMap&lt/a&gt contributors',
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
	
	
}).addTo(mapExample);

var lcb = L.control.locate({
	stopFollowingOnDrag: true, // stop following when the map is dragged if `follow` is true (deprecated, see below)
    remainActive: false,
}).addTo(mapExample);


//mapExample.addControl( new L.Control.Compass() );


function getColor(d) {
    return d > 50 	 ? '#800026' :
           d > 40 	 ? '#BD0026' :
           d > 35 	 ? '#E31A1C' :
           d > 30 	 ? '#FC4E2A' :
           d > 25    	 ? '#FD8D3C' :
           d > 20        ? '#FEB24C' :
           d > 10        ? '#FED976' :
			    '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.UK_data_data_Drive),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
var geojson 

function highlightFeature(e) {
    var layer = e.target;
	
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
	info.update(layer.feature.properties);
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
	info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mapExample);

info = L.control();

info.onAdd = function (mapExample) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = 
	
		  (props ?
        '<b><h1>' + props.UK_data_ZONE_LABEL + '</h1></b>'
        : '-') +
	
	'<h4>CO2  emissions</h4>' +  (props ?
        '<h3><b>' + props.UK_data_data_CO2 + ' tonnes</h3></b>'
        : '-') +
		
	'<h4>Drive to work</h4>' + ( props ?
        '<h3><b>' + props.UK_data_data_Drive + ' %</h3></b>'
        : '-' ) +	
	
	'<h4>Cycle to work</h4>' + ( props ?
        '<h3><b>' + props.UK_data_data_Cycle + ' %</h3></b>'
        : '-' ) +
	
	'<h4>Inactive</h4>' + ( props ?
        '<h3><b>' + props.UK_data_data_Inact + ' %</h3></b>'
        : '-' ) 
				
};

info.addTo(mapExample);

}