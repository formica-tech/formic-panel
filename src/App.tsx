import { AnimatePresence } from "framer-motion";
import Locale from "providers/Locale";
import React from "react";

import Theme from "providers/Theme";
import Gql from "providers/Gql";
import Router from "providers/Router";
import Auth from "providers/Auth";

import Routes from "pages/Routes";

function App() {
  return (
    <Router>
      <Gql>
        <Theme>
          <Auth>
            <Locale>
              <AnimatePresence exitBeforeEnter>
                <Routes />
              </AnimatePresence>
            </Locale>
          </Auth>
        </Theme>
      </Gql>
    </Router>
  );
}

export default App;
