import { React, useState, useRef, useEffect } from "react";
import { DeckGL } from "deck.gl";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import Options from "./Options";
import Control from "./Control";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const MicroscopeMap = () => {
    const [data, setData] = useState(null);
    const [tooltipInfo, setTooltipInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [height, setHeight] = useState(true);
    const [color, setColor] = useState(true);
    const [radius, setRadius] = useState(2500);
    const [disease, setDisease] = useState("COVID-19");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPop")
            .then((response) => response.json())
            .then((data) => {
                const transformData = data.map((item) => {
                    return {
                        name: item.city,
                        COORDINATES: [
                            parseFloat(item.lng),
                            parseFloat(item.lat),
                        ],
                        pop: item.population,
                        covid_count: item.covid_count,
                        flu_count: item.flu_count,
                    };
                });
                setData(transformData);
            })
            .catch((error) => console.error("Error:", error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

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

        const name = info.object.points.map((p) => p.source.name).join(" + ");
        const pop = info.object.points.reduce(
            (acc, p) => acc + Number(p.source.pop),
            0
        );
        const count = info.object.points.reduce(
            (acc, p) =>
                acc +
                (disease === "COVID-19"
                    ? Number(p.source.covid_count)
                    : Number(p.source.flu_count)),
            0
        );

        return (
            <div
                ref={tooltipRef}
                className="absolute bg-white text-black p-2 rounded shadow overflow-hidden"
                style={tooltipStyle}
            >
                <div>City: {name}</div>
                <div>Population: {pop}</div>
                <div>
                    {disease === "COVID-19" ? "Covid: " : "Flu Count: "} {count}
                </div>
                <div>Latitude: {info.object.position[1].toFixed(6)}</div>
                <div>Longitude: {info.object.position[0].toFixed(6)}</div>
            </div>
        );
    }

    const layers = isLoading
        ? []
        : [
              new HexagonLayer({
                  id: "heatmap",
                  colorRange,
                  coverage: 1,
                  data,
                  elevationRange: [0, 200],
                  elevationScale: data && data.length ? 500 : 0,
                  getElevationValue: (points) =>
                      points.reduce((total, point) => {
                          const pop = Number(
                              height
                                  ? point.pop
                                  : disease === "COVID-19"
                                  ? point.covid_count
                                  : point.flu_count
                          );
                          const cap = Math.min(pop, height ? 200000 : 100);
                          return Number.isFinite(cap) ? cap : 0;
                      }, 0),
                  getColorValue: (points) =>
                      points.reduce((total, point) => {
                          const count = Number(
                              color
                                  ? disease === "COVID-19"
                                      ? point.covid_count
                                      : point.flu_count
                                  : point.pop
                          );
                          const cap = Math.min(count, color ? 100 : 100000);
                          return Number.isFinite(cap) ? cap : 0;
                      }, 0) / points.length,
                  extruded: true,
                  getPosition: (d) => d.COORDINATES,
                  pickable: true,
                  radius: radius,
                  upperPercentile: 100,
                  material,
                  transitions: {
                      elevationScale: height ? 500000 : 100,
                  },
              }),
          ];

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <DeckGL
                key={`${height}-${color}-${radius}-${disease}`}
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
            <Control
                setHeight={setHeight}
                setColor={setColor}
                setRadius={setRadius}
            />
            <div className=" absolute top-0 right-0">
                <Options setDisease={setDisease} />
            </div>
        </div>
    );
};

export default MicroscopeMap;
