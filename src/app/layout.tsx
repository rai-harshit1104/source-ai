'use client'

import { NavBar } from "@/components/NavBar"
import { Box } from "@mui/material"
import { ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/inter/400.css';
import { useState } from 'react';
import { getTheme } from "../theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' && window.localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark'
  );
  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('themeMode', next);
      }
      return next;
    });
  };
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          <NavBar mode={mode} toggleMode={toggleMode} />
          <Box>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
