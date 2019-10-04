import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../../assets/css/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_API_MAPBOX_TOKEN;

class TourMap extends Component {
  componentDidMount() {
    const locations = [...this.props.locations];

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9'
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
      // Create marker
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      // Add marker
      new mapboxgl.Marker({
        element: markerElement,
        anchor: 'bottom'
      })
        .setLngLat(loc.coordinates)
        .addTo(map);
      // Extend map bounds
      bounds.extend(loc.coordinates);
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.fitBounds(bounds, {
      padding: 120
    });
  }

  render() {
    return <section className="section-map" ref={el => (this.mapContainer = el)}></section>;
  }
}

export default TourMap;
