import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


class MapContainer extends React.Component {

    state = {
        center: [45.815, 15.9819],
        zoom: 13,
        minZoom: 1,
        maxZoom: 18,
    }

    render() {

        const { center, zoom, minZoom, maxZoom } = this.state;

        return (
            <div style={{width: '500px', maxWidth: '100%', border: '1px solid black'}}>
                <Map 
                    center={center}
                    zoom={zoom}
                    minZoom={minZoom}
                    maxZoom={maxZoom}
                    defaultWidth={500}
                    height={400}
                >
                    <Marker anchor={[45.815, 15.9819]} payload={1} onClick={({ event, anchor, payload }) => {}} />
                </Map>
            </div>
        
        );
    }

}

export {MapContainer};