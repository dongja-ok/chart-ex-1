import React, { useState } from "react";
import lightTheme from "./assets/themes/LightTheme";
import darkTheme from "./assets/themes/DarkTheme";
import {
  Divider,
  Paper,
  Switch,
  ThemeProvider,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton
} from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import CustomCharts from "./components/CustomCharts";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  paperCustom: {
    padding: "2rem",
    fontFamily: "roboto",
    margin: "2rem",
    minHeight: window.innerHeight,
    borderRadius: 0
  },
  typographyCustom: {
    marginBottom: "1rem"
  },
  dividerCustom: {
    marginTop: "2rem"
  },
  /* Custom */
  iconButtonMenu: {
    // backgroundColor: theme.palette.grey[300]
  }
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={createMuiTheme(darkMode ? darkTheme : lightTheme)}>
      <Paper className={classes.paperCustom} elevation={10}>
        <Grid container direction="column">
          <Grid item xs={1}>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Grid>
          <Grid>
            <Divider style={{ margin: "24px 0 24px 0" }} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={1}
            style={{ display: "flex" }}
          >
            {/* <Grid item xs={false} /> */}
            <Grid item xs={12} lg={6}>
              {/* Here should all the components come */}
              <Typography variant="h4">Contents</Typography>
              <Card elevation={10}>
                <CardHeader
                  title={
                    <Typography variant="h5">
                      Largest cities of Massachusetts
                    </Typography>
                  }
                  action={
                    <IconButton className={classes.iconButtonMenu}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent style={{ backgroundColor: "#fff" }}>
                  <CustomCharts />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              {/* Here should all the components come */}
              <Typography variant="h4">Contents</Typography>
              <Card elevation={10}>
                <CardHeader
                  title={
                    <Typography variant="h5">
                      Largest cities of Massachusetts
                    </Typography>
                  }
                  action={
                    <IconButton className={classes.iconButtonMenu}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent style={{ backgroundColor: "#fff", padding: 24 }}>
                  <CustomCharts />
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={false} /> */}
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
