// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   marginTop: '10pc',
//   marginLeft: '25pc',
//   width: '400px',
//   height: '400px',
//   marginBottom: '10pc'
// };

// const center = {
//   lat: 32.07219624639436,
//   lng: 34.77150072649663
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyDXt8kVeFrgPryIkJVUPQgTjvXiBuKzo7g'
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       { /* Child components, such as markers, info windows, etc. */}
//       <>
//         {/* <Marker
//           position={{ lat: 31.821467964657074, lng: 35.196837681900035 }}></Marker> */}
//       </>
//     </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  marginTop: '10pc',
  marginLeft: '25pc',
  width: '400px',
  height: '400px',
  marginBottom: '10pc'
};

function MyComponent({ center }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDXt8kVeFrgPryIkJVUPQgTjvXiBuKzo7g'
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <>
        {/* <Marker
          position={{ lat: 31.821467964657074, lng: 35.196837681900035 }}></Marker> */}
      </>
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
