import { Display4 } from "baseui/typography";
import Fade from "components/Fade";
import React, { FunctionComponent, useState } from "react";
import { AppNavBar, NavItemT } from "baseui/app-nav-bar";
import { useAuth } from "providers/Auth";
import { useTranslation } from "react-i18next";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Location } from "history";

const setActiveByLocation = (location: Location, navItems: NavItemT[]) =>
  navItems.map((item) => ({
    ...item,
    active: location.pathname.startsWith(item.info.path),
  }));

const appNavItems: NavItemT[] = [
  {
    label: "Machines",
    info: { path: "/machine" },
    active: false,
  },
  {
    label: "Reports",
    info: { path: "/report" },
    active: false,
  },
];

const AppLayout: FunctionComponent = ({ children }) => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  const items: NavItemT[] = [
    {
      label: t("nav.profile"),
      info: {
        path: "/profile",
      },
    },
    { label: t("nav.logout"), info: { onClick: logout } },
  ];

  const [mainItems, setMainItems] = useState<NavItemT[]>(
    setActiveByLocation(location, appNavItems)
  );

  history.listen((newLocation) => {
    setMainItems((prev) => setActiveByLocation(newLocation, prev));
  });

  return (
    <Fade>
      <AppNavBar
        title={
          <Link to="/">
            <Display4>{t("appTitle")}</Display4>
          </Link>
        }
        mainItems={mainItems}
        onMainItemSelect={(item) => {
          history.push(item.info.path);
        }}
        username={user?.username}
        userItems={items}
        onUserItemSelect={(item) => {
          const { onClick, path } = item.info;
          if (typeof onClick === "function") {
            onClick();
          }
          if (typeof path === "string") {
            history.push(path);
          }
        }}
      />
      <div style={{ marginBottom: "1rem" }} />
      {children}
    </Fade>
  );
};

export default AppLayout;
