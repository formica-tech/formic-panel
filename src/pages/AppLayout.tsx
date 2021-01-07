import { Display4 } from "baseui/typography";
import Fade from "components/Fade";
import React, { FunctionComponent } from "react";
import { AppNavBar, NavItemT } from "baseui/app-nav-bar";
import { useAuth } from "providers/Auth";
import { useTranslation } from "react-i18next";
import { useHistory, Link } from "react-router-dom";
const AppLayout: FunctionComponent = ({ children }) => {
  const { user, logout } = useAuth();
  const history = useHistory();
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

  return (
    <Fade>
      <AppNavBar
        title={
          <Link to="/">
            <Display4>{t("appTitle")}</Display4>
          </Link>
        }
        username={user?.username}
        userItems={items}
        onUserItemSelect={(item) => {
          console.log(item);
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
