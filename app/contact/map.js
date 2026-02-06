// pages/map.js or components/MapComponent.js
'use client'
import React, { useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';


const MapComponent = () => {
    return (
        <APIProvider apiKey={'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'}>
            <Map>
                {/* red default marker */}
                <AdvancedMarker position={{ lat: 29.5, lng: -81.2 }} />

                {/* customized green marker */}
                <AdvancedMarker position={{ lat: 29.5, lng: -81.2 }}>
                    <Pin
                        background={'#0f9d58'}
                        borderColor={'#006425'}
                        glyphColor={'#60d98f'}
                    />
                </AdvancedMarker>

                {/* fully customized marker */}
                {/* <AdvancedMarker position={{ lat: 29.5, lng: -81.2 }}>
                    <img src={markerImage} width={32} height={32} />
                </AdvancedMarker> */}
            </Map>;
        </APIProvider>
    )

};

export default MapComponent;