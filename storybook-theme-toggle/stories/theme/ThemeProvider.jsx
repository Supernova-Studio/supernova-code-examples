import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';

const ThemeContext = createContext({
  colorMode: 'light',
  invertColorMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  const invertColorMode = useCallback(() => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ colorMode, invertColorMode }), [colorMode, invertColorMode]);

  // Apply theme to document body for global Storybook UI styling
  useEffect(() => {
    document.body.setAttribute('data-theme', colorMode);
    
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={colorMode} style={{ minHeight: '100%', minWidth: '100%' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


