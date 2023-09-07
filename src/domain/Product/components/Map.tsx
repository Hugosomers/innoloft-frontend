import GoogleMapReact from 'google-map-react';

interface MapProps {
  lat: number;
  lng: number;
}

const Map = ({ lat, lng }: MapProps) => {
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={Number(defaultProps.zoom)}
      />
    </div>
  );
};

export default Map;
