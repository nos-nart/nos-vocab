/* eslint-disable no-empty */
import React from 'react';
import storage from 'local-storage-fallback';

const useSafeLayoutEffect =
  typeof window === `undefined` ? React.useEffect : React.useLayoutEffect;

export const ThemeContext = React.createContext({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<string>(`light`);
  const toggleTheme = React.useCallback(() => {
    setTheme((cur) => (cur === `light` ? `dark` : `light`));
  }, []);

  useSafeLayoutEffect(() => {
    setTheme(storage.getItem(`theme`) as string);
  }, []);

  const themeContextValue = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  React.useEffect(() => {
    if (isMounted) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector(`html`)!.setAttribute(`class`, theme);
        storage.setItem(`theme`, theme);
      } catch {}
    }
  });

  React.useEffect(() => setIsMounted(true), []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): any => React.useContext(ThemeContext);
