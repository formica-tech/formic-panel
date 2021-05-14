import { AnimatePresence } from "framer-motion";
import AppLayout from "pages/AppLayout";
import AuthLayout from "pages/AuthLayout";
import LoadingScreen from "pages/LoadingScreen";
import MachineDetail from "pages/MachineDetail";
import MachineList from "pages/MachineList";
import Profile from "pages/Profile";
import Verify from "pages/Verify";
import { useAuth } from "providers/Auth";
import React, { FunctionComponent } from "react";

import { Switch, Route, useLocation } from "react-router-dom";

import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ForgotPassword from "pages/ForgotPassword";

const Routes: FunctionComponent = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user === null) {
    return (
      <AuthLayout>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route path="/" exact component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AnimatePresence>
      </AuthLayout>
    );
  }

  if (!user.verified) {
    return (
      <AuthLayout>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Verify} />
          </Switch>
        </AnimatePresence>
      </AuthLayout>
    );
  }

  return (
    <AppLayout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/machine/:id" exact component={MachineDetail} />
          <Route path="/machine" exact component={MachineList} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" exact component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </AppLayout>
  );
};

export default Routes;
