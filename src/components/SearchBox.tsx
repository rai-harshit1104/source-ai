'use client'
import React, { useState } from 'react';
import { Paper, TextField, Button, InputAdornment, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const SearchBar = (props:any) => {
    const [searchText, setSearchText] = useState('');

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '14px 24px',
                borderRadius: 4,
                // boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                gap: 2.5,
                maxWidth: '100%',
                background: '#fff',
            }}
        >
            <TextField
                placeholder="Search..."
                fullWidth
                variant="standard"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                multiline={true}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="medium" style={{ color: '#b43ab0' }} />
                        </InputAdornment>
                    ),
                    style: { fontSize: 18, paddingLeft: 4, background: 'transparent' , color:'black'}
                }}
                sx={{ flex: 1, marginRight: 2.5, background: 'transparent' }}
            />
            <Button
                sx={{
                    background: 'rgb(11, 33, 235)',
                    // backgroundImage: 'linear-gradient(90deg, rgb(11, 33, 235) 0%, rgba(253, 29, 29, 1) 50%, rgba(69, 78, 252, 1) 100%)',
                    color: '#fff',
                    minWidth: 44,
                    minHeight: 44,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(180,58,176,0.08)',
                    '&:hover': {
                        backgroundImage: 'linear-gradient(90deg, rgba(180, 58, 176, 0.9) 0%, rgba(253, 29, 29, 0.9) 50%, rgba(69, 78, 252, 0.9) 100%)',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: 18,
                }}
                onClick={(e)=> props.onSearch('hello')}
            >
                <AutoAwesomeIcon />
            </Button>
        </Box>
    )
}