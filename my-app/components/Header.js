import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";


const useStyle = makeStyles(() => ({
    headerTitle: {
      color: "black",
    },
  }));

const Header = () => {
    const classes = useStyle();
    return (
      <div className="header">
        <AppBar>
          <Toolbar>
            <Typography className={classes.headerTitle}>
              Gears Book
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  export default Header;