import { React, useState, useRef, useEffect } from "react";
import { DeckGL } from "deck.gl";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const MicroscopeMap = () => {
    const [data, setData] = useState([]);
    const [tooltipInfo, setTooltipInfo] = useState(null);

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

    function Tooltip({ info }) {
        const tooltipRef = useRef(null);
        const [tooltipStyle, setTooltipStyle] = useState({});

        useEffect(() => {
            if (info && info.object && tooltipRef.current) {
                const { x, y } = info;
                const { width, height } =
                    tooltipRef.current.getBoundingClientRect();
                const { innerWidth, innerHeight } = window;

                const left = x + width > innerWidth ? x - width : x;
                const top = y + height > innerHeight ? y - height : y;

                setTooltipStyle({ left, top });
            }
        }, [info]);

        if (!info || !info.object) {
            return null;
        }

        return (
            <div
                ref={tooltipRef}
                className="absolute bg-white text-black p-2 rounded shadow overflow-hidden"
                style={tooltipStyle}
            >
                <div>Latitude: {info.object.position[1].toFixed(6)}</div>
                <div>Longitude: {info.object.position[0].toFixed(6)}</div>
                <div>{info.object.points.length} Accidents</div>
            </div>
        );
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
                onHover={(info) => setTooltipInfo(info)}
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
                effects={[lightingEffect]}
            >
                <Map
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={MAP_STYLE}
                />
            </DeckGL>
            <Tooltip info={tooltipInfo} />
        </div>
    );
};

export default MicroscopeMap;
