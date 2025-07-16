'use client'
import { Box, Button, Stack, Typography, IconButton, Tooltip } from "@mui/material";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const NavBar = ({ mode, toggleMode }: { mode: 'light' | 'dark', toggleMode: () => void }) => {
    const pathname = usePathname();
    const navItems = [
        { label: 'Home', href: '/home' },
        { label: 'History', href: '/history' },
        { label: 'Search', href: '/search' },
    ];
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'black',
                py: 2.5,
                px: { xs: 2, sm: 4 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: 'white',
                    fontFamily: 'Libertinus Mono, monospace',
                    fontWeight: 400,
                    letterSpacing: 1,
                    px: 2
                }}
            >
                Source AI
            </Typography>
            <Stack direction="row" alignItems="center" spacing={3}>
                {navItems.map((item) => (
                    <Button
                        key={item.href}
                        component={Link}
                        href={item.href}
                        sx={{
                            color: pathname === item.href ? 'primary.main' : 'white',
                            fontWeight: 500,
                            borderBottom: pathname === item.href ? '2px solid #00F5A0' : 'none',
                            borderRadius: 0,
                            mx: 1.5
                        }}
                        disableRipple
                        aria-current={pathname === item.href ? 'page' : undefined}
                    >
                        {item.label}
                    </Button>
                ))}
                <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                  <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 2 }}>
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Tooltip>
            </Stack>
        </Box>
    );
}