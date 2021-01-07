import { useStyletron } from "baseui";
import { Cell, Grid } from "baseui/layout-grid";
import { H1, Label4 } from "baseui/typography";
import Centered from "components/Centered";
import Fade from "components/Fade";
import SpaceBetween from "components/SpaceBetween";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import bg1 from "assets/bg1.jpg";
import bg2 from "assets/bg2.jpg";

const AuthLayout: FunctionComponent = ({ children }) => {
  const [css] = useStyletron();
  const { t } = useTranslation();

  return (
    <Fade>
      <div
        className={css({
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        })}
      >
        <Grid gridMargins={0}>
          <Cell skip={[0, 4, 8]} span={[4, 4, 4]}>
            <SpaceBetween
              $direction="column"
              className={css({
                backgroundColor: "white",
                height: "100vh",
              })}
            >
              <div className={css({ padding: "1rem" })}>
                <Link to="/">
                  <H1>{t("appTitle")}</H1>
                </Link>
                {children}
              </div>
              <Centered
                className={css({
                  padding: ".5rem",
                  borderTop: "black .25rem solid",
                })}
              >
                <Label4>{t("copyRightText")}</Label4>
              </Centered>
            </SpaceBetween>
          </Cell>
        </Grid>
      </div>
    </Fade>
  );
};

export default AuthLayout;
