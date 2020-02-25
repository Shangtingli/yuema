// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import { GoogleMap, Marker,withGoogleMap } from "react-google-maps"
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//
//
//     render() {
//         const abcd=withGoogleMap(props =>
//             <GoogleMap
//                 defaultZoom={8}
//                 defaultCenter={{ lat: -34.397, lng: 150.644 }}
//             >
//                 <Marker
//                     position={{ lat: -34.397, lng: 150.644 }}
//                 />
//             </GoogleMap>
//         );
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyDJC01hNURZ0tQdKcUAHvNbwwBR-kpxJ8A"}}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//
//             </div>
//         );
//     }
// }

// export default SimpleMap;