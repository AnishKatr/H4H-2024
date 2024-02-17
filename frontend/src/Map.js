import React from "react";
import { DeckGL } from "deck.gl";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const MicroscopeMap = () => {
    const INITIAL_VIEW_STATE = {
        longitude: -1.415727,
        latitude: 52.232395,
        zoom: 6.6,
        minZoom: 5,
        maxZoom: 15,
        pitch: 40.5,
        bearing: -27,
    };

    return (
        <div>
            <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
                <Map
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={MAP_STYLE}
                />
            </DeckGL>
        </div>
    );
};

export default MicroscopeMap;
