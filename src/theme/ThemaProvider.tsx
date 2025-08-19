import { createContext, useContext, useEffect } from "react";
import { defaultTheme } from "./defaultThema";

export type Theme = typeof defaultTheme;

const ThemeContext = createContext<Theme | undefined>(undefined);

type Props = {
  theme?: Partial<Theme>;
  children: React.ReactNode;
};


export const ThemaProvider = ({
  theme = {},
  children,
}: Props) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(mergedTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}-color`, value);
    })

  },[mergedTheme])

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within ThemeProvider");
  return theme;
};