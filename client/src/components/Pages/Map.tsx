import { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

function Map() {
  const mapElementRef = useRef<HTMLDivElement | null>(null);

  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapElementRef.current) return;

    // Prevent duplicate initialization
    if (mapInstanceRef.current) return;

    const map = L.map(mapElementRef.current).setView(
      [51.505, -0.09],
      13
    );

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; OpenStreetMap contributors',
      }
    ).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapElementRef}
      className='h-[80%] w-[100%} border-2 mt-2'
    />
  );
}

export default Map;