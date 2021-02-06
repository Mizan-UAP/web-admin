import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 23.753937382817522,
    lng: 90.35999165451295
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDpgP3eSOPgQuMtrcg0cuAjJ8Y42GWEMEE"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)