import React, { Component } from "react";
import { render } from "react-dom";
// import {ThemeProvider} from "styled-components"

import Div, {
  ThemeProvider,
  Normalize,
  NormalizeOpenType,
  bootstrap
} from "../../src";

const Demo = () => (
  <ThemeProvider theme={bootstrap}>
    <Div>
      <Normalize />
      <NormalizeOpenType />
      <Div
        py={5}
        fontSize={12}
        height="100%"
        width="100%"
        background="linear-gradient(to right, #654ea3, #eaafc8)"
        m="auto"
        textAlign="center"
        verticalAlign="middle"
      >
        Hello World. Cattous.
      </Div>
    </Div>
  </ThemeProvider>
);

render(<Demo />, document.querySelector("#demo"));
