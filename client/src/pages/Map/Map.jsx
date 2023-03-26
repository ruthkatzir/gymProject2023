import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import DeckGL from "deck.gl";
import { _CameraLight as CameraLight, LightingEffect } from "@deck.gl/core";
import { withStyles } from "@material-ui/styles";
import MapControlsContainer from "./MapControlsContainer";
import MapStyleControl from "./MapStyleControl";

import {
    MAPBOX_API_KEY,
    MAP_DEFAULT_OPTIONS,
    MAP_INITIAL_VIEWSTATE,
    MAP_STYLES
} from "./constants";

const lightingEffect = new LightingEffect({
    cameraLight: new CameraLight({
        color: [255, 255, 255],
        intensity: 2.0
    })
});

const style = {
    mapContainer: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    geoContainer: {
        zIndex: 2,
        height: "inherit",
        flex: 1,
        display: "flex",
        position: "relative",
        overflow: "hidden"
    }
};

const Map = ({ classes }) => {
    const [mapOptions, setMapOptions] = useState(MAP_DEFAULT_OPTIONS);
    const [viewState, setViewState] = useState(MAP_INITIAL_VIEWSTATE);
    const [layers, setLayers] = useState([]);
    const [mapRef, setMapRef] = useState([]);

    const _setMapOptions = options => {
        setMapOptions({
            ...mapOptions,
            ...options
        });
    };

    return (
        <div className={classes.geoContainer}>
            <MapControlsContainer>
                <MapStyleControl
                    name="Map style"
                    setMapOptions={options => _setMapOptions(options)}
                />
            </MapControlsContainer>
            <div className={classes.mapContainer}>
                <DeckGL
                    layers={layers}
                    initialViewState={viewState}
                    viewState={viewState}
                    effects={[lightingEffect]}
                    useDevicePixels
                    controller={true}
                >
                    <ReactMapGL
                        ref={setMapRef}
                        mapStyle={mapOptions.style}
                        reuseMaps
                        viewPort={viewState}
                        mapboxApiAccessToken={MAPBOX_API_KEY}
                    />
                </DeckGL>
            </div>
        </div>
    );
};

export default withStyles(style)(Map);
