import { React, useState, useEffect } from "react";
import { DeckGL } from "deck.gl";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import { csv } from "d3-request";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";
const DATA_URL =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv";

const MicroscopeMap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        csv(DATA_URL, (error, response) => {
            if (!error) {
                const data = response.map((d) => [
                    Number(d.lng),
                    Number(d.lat),
                ]);
                setData(data);
            }
        });
    }, []);

    const ambientLight = new AmbientLight({
        color: [255, 255, 255],
        intensity: 1.0,
    });

    const pointLight1 = new PointLight({
        color: [255, 255, 255],
        intensity: 0.8,
        position: [-0.144528, 49.739968, 80000],
    });

    const pointLight2 = new PointLight({
        color: [255, 255, 255],
        intensity: 0.8,
        position: [-3.807751, 54.104682, 8000],
    });

    const lightingEffect = new LightingEffect({
        ambientLight,
        pointLight1,
        pointLight2,
    });

    const material = {
        ambient: 0.64,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [51, 51, 51],
    };

    const INITIAL_VIEW_STATE = {
        longitude: -1.415727,
        latitude: 52.232395,
        zoom: 6.6,
        minZoom: 5,
        maxZoom: 15,
        pitch: 40.5,
        bearing: -27,
    };

    const colorRange = [
        [1, 152, 189],
        [73, 227, 206],
        [216, 254, 181],
        [254, 237, 177],
        [254, 173, 84],
        [209, 55, 78],
    ];

    function toolTip({ object }) {
        if (!object) {
            return null;
        }
        const lat = object.position[1];
        const lng = object.position[0];
        const count = object.points.length;
        return `\
            latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ""}
            longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ""}
            ${count} Accidents`;
    }

    const layers = [
        new HexagonLayer({
            id: "heatmap",
            colorRange,
            coverage: 1,
            data,
            elevationRange: [0, 3000],
            elevationScale: data && data.length ? 50 : 0,
            extruded: true,
            getPosition: (d) => d,
            pickable: true,
            radius: 1000,
            upperPercentile: 100,
            material,

            transitions: {
                elevationScale: 3000,
            },
        }),
    ];

    return (
        <div>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                getTooltip={toolTip}
                layers={layers}
                effects={[lightingEffect]}
            >
                <Map
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={MAP_STYLE}
                />
            </DeckGL>
        </div>
    );
};

export default MicroscopeMap;
