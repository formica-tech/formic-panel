import { useStyletron } from "baseui";
import { Spinner } from "baseui/spinner";
import Fade from "components/Fade";
import React, { FunctionComponent } from "react";
import bg2 from "assets/bg2.jpg";

const LoadingScreen: FunctionComponent = ({ children }) => {
  const [css] = useStyletron();

  return (
    <Fade>
      <div
        className={css({
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <Spinner size={96} />
      </div>
    </Fade>
  );
};

export default LoadingScreen;
