import React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Aside from "../aside/Aside";

import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    width: "100%",
    height: "100vh",
    gridTemplateColumns: "200px auto",
    gridTemplateAreas: `
      "aside main"
    `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr auto",
      gridTemplateAreas: `
      "aside"
      "main"
    `,
    },
  },
  main: {
    gridArea: "main",
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      component="div"
      className="root"
    >
      <Box component="div" display="grid" className={classes.app}>
        <Aside />
        <Box component="main" className={classes.main}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
