import { ToasterContainer } from "baseui/toast";
import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, DarkTheme } from "baseui";

export type ThemeType = "light" | "dark";
const engine = new Styletron();
export interface ThemeCtxValue {
  themeType: ThemeType;
  setTheme: (t: ThemeType) => void;
}

const ThemeCtx = createContext<ThemeCtxValue>({
  themeType: "light",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeCtx);

const THEME = {
  light: LightTheme,
  dark: DarkTheme,
};

const FORMICA_THEME_KEY = "FORMICA_THEME_KEY";

const Theme: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem(FORMICA_THEME_KEY) as ThemeType) || "light"
  );

  return (
    <ThemeCtx.Provider
      value={{
        themeType: theme,
        setTheme: (themeType) => {
          setTheme(themeType);
          localStorage.setItem(FORMICA_THEME_KEY, themeType);
        },
      }}
    >
      <StyletronProvider value={engine}>
        <BaseProvider theme={THEME[theme]}>
          <ToasterContainer>{children}</ToasterContainer>
        </BaseProvider>
      </StyletronProvider>
    </ThemeCtx.Provider>
  );
};

export default Theme;
