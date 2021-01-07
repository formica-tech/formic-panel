import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

const Router: FunctionComponent = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;
