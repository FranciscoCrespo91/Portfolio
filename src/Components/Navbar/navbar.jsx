import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import "../Navbar/styles.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography>
              <section>
                <div className="right"><h1>Francisco Crespo</h1></div>
                <div className="left"><h4>About me</h4>
                     <h4>Projects</h4>
                     <h4>Contacts</h4>
                </div>
                
                

              </section>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

{
  /* <section>Ironhack Projects
    <div>1#Project</div>
    <div>2#Project</div>
    <div>3#Project</div>
</section> */
}
