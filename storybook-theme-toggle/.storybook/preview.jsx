import React from 'react';
import { createPortal } from 'react-dom';
import { ThemeProvider, useTheme } from '../stories/theme/ThemeProvider.jsx';
import './global.css';

const ThemeSwitch = () => {
  const { invertColorMode } = useTheme();
  
  // Try to render in the main document body to escape iframe context
  const portalTarget = document.body;
  
  const button = (
    <button
      type="button"
      className="theme-toggle-button"
      onClick={invertColorMode}
    >
      Toggle Theme
    </button>
  );
  
  // Use portal to render outside iframe context
  return createPortal(button, portalTarget);
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <React.StrictMode>
        <ThemeProvider>
          <Story />
          <ThemeSwitch />
        </ThemeProvider>
      </React.StrictMode>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;