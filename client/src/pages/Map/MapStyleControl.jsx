import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import MapControl from "./MapControl";
import { MAP_STYLES } from "./constants";
const style = {
  root: {
    display: "flex",
    alignItems: "center"
  },
  typography: {
    textTransform: "capitalize"
  }
};

const MapStyleControl = ({ classes, name, setMapOptions }) => {
  const [checked, setChecked] = useState(false);

  return (
    <MapControl name={name}>
      <div className={classes.root}>
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            setMapOptions({ style: MAP_STYLES[!checked ? "dark" : "light"] });
          }}
          value={checked ? "dark" : "light"}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Typography className={classes.typography}>
          {checked ? "dark" : "light"}
        </Typography>
      </div>
    </MapControl>
  );
};

export default withStyles(style)(MapStyleControl);
