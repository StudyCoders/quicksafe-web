import React from 'react';
import mapboxgl from 'mapbox-gl';

const MapCoordinates = ({ longitude, latitude }) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibHVjYXNoYXlhc2hpIiwiYSI6ImNsNzI3MmVzMTBhM2g0MG9naXhobWU2cG4ifQ.rOlmI9JXSES77Q-T0NjC3w';

  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLng] = React.useState(longitude);
  const [lat, setLat] = React.useState(latitude);
  const [zoom, setZoom] = React.useState(14.5);

  React.useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    const marca = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [longitude, latitude]);

  return (
    <div>
      <div ref={mapContainer} id="map" />
    </div>
  );
};

export default MapCoordinates;
