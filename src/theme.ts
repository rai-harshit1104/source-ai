import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
    primary: {
      main: '#00F5A0',
    },
    secondary: {
      main: '#7F00FF',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f1f1f',
          color: '#00F5A0',
        },
      },
    },
  },
});

export const darkTheme = theme;

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    primary: {
      main: '#00F5A0',
    },
    secondary: {
      main: '#7F00FF',
    },
    text: {
      primary: '#0f0f0f',
      secondary: '#333',
    },
    divider: '#e0e0e0',
  },
  typography: theme.typography,
  components: theme.components,
});

export function getTheme(mode: 'light' | 'dark') {
  return mode === 'dark' ? darkTheme : lightTheme;
} 