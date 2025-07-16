import React, { useState } from 'react';
import IdCard from './IdCard';
import { Box, Stack, FormControl, Select, MenuItem, TextField, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface UserData {
    imageUrl: string;
    experience: string;
    location: string;
    role: string;
    whatsapp: string;
    email: string;
    phone: string;
}

interface SearchResultProps {
    results: UserData[];
    cardSx?: any;
    filterPaperSx?: any;
    animateCards?: boolean;
}

export const SearchResult: React.FC<SearchResultProps> = ({ results, cardSx, filterPaperSx, animateCards }) => {
    const [roleFilter, setRoleFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('');
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

    // Get unique roles and locations for filter dropdowns
    const roles = Array.from(new Set(results.map((u) => u.role)));
    const locations = Array.from(new Set(results.map((u) => u.location)));

    // Filtering logic
    const filteredResults = results.filter((user) => {
        const roleMatch = roleFilter ? user.role === roleFilter : true;
        const locationMatch = locationFilter ? user.location === locationFilter : true;
        const experienceMatch = experienceFilter ? user.experience.includes(experienceFilter) : true;
        return roleMatch && locationMatch && experienceMatch;
    });

    return (
        <Box sx={{marginTop:6}}>
            {/* Filter & Orientation Controls */}
            <Paper
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2.5,
                    alignItems: 'center',
                    background: 'rgba(24,24,32,0.85)', // glassy dark
                    backdropFilter: 'blur(8px)',
                    p: 3.5,
                    borderRadius: 4,
                    boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10), 0 1.5px 8px 0 rgba(127,0,255,0.10)',
                    mb: 4,
                    border: '1.5px solid rgba(127,0,255,0.18)',
                    ...filterPaperSx,
                }}
            >
                <Stack direction="row" spacing={2} flexWrap="wrap">
                    <FormControl size="small" sx={{ minWidth: 140 }}>
                        <Select
                            value={roleFilter}
                            displayEmpty
                            onChange={e => setRoleFilter(e.target.value)}
                            sx={{
                                color: '#fff',
                                '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(127,0,255,0.35)' },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                                background: 'rgba(36,36,48,0.95)',
                            }}
                        >
                            <MenuItem value=''>All Roles</MenuItem>
                            {roles.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl size="small" sx={{ minWidth: 140 }}>
                        <Select
                            value={locationFilter}
                            displayEmpty
                            onChange={e => setLocationFilter(e.target.value)}
                            sx={{
                                color: '#fff',
                                '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(127,0,255,0.35)' },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                                background: 'rgba(36,36,48,0.95)',
                            }}
                        >
                            <MenuItem value=''>All Locations</MenuItem>
                            {locations.map(loc => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        size="small"
                        placeholder="Experience (e.g. 5 years)"
                        value={experienceFilter}
                        onChange={e => setExperienceFilter(e.target.value)}
                        sx={{
                            minWidth: 160,
                            color: '#fff',
                            background: 'rgba(36,36,48,0.95)',
                            input: { color: '#fff' },
                            '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(127,0,255,0.35)' },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                        }}
                    />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 'auto' }}>
                    <Typography fontWeight={500} color="#fff">Orientation:</Typography>
                    <Button
                        variant={orientation === 'horizontal' ? 'contained' : 'outlined'}
                        onClick={() => setOrientation('horizontal')}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            background: orientation === 'horizontal' ? 'primary.main' : 'transparent',
                            color: orientation === 'horizontal' ? '#181818' : '#fff',
                            borderColor: 'primary.main',
                        }}
                    >
                        Horizontal
                    </Button>
                    <Button
                        variant={orientation === 'vertical' ? 'contained' : 'outlined'}
                        onClick={() => setOrientation('vertical')}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            background: orientation === 'vertical' ? 'primary.main' : 'transparent',
                            color: orientation === 'vertical' ? '#181818' : '#fff',
                            borderColor: 'primary.main',
                        }}
                    >
                        Vertical
                    </Button>
                </Stack>
            </Paper>
            {/* Results */}
            {filteredResults.length === 0 ? (
                <Typography align="center" color="text.secondary" fontSize={18} mt={5}>
                    No results found.
                </Typography>
            ) : (
                <Stack
                    direction={orientation === 'horizontal' ? 'row' : 'column'}
                    spacing={4}
                    flexWrap="wrap"
                    mt={3}
                    justifyContent={filteredResults.length < 3 ? 'center' : 'flex-start'}
                    alignItems={orientation === 'horizontal' ? 'stretch' : 'center'}
                    sx={{ transition: 'all 0.3s' }}
                >
                    {filteredResults.map((user, idx) => (
                        animateCards ? (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.04, boxShadow: '0 16px 48px 0 rgba(127,0,255,0.22), 0 4px 24px 0 rgba(0,245,160,0.22)' }}
                                style={{ display: 'flex' }}
                            >
                                <Paper
                                    sx={{
                                        background: 'rgba(24,24,32,0.92)',
                                        borderRadius: 3,
                                        boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10), 0 1.5px 8px 0 rgba(127,0,255,0.10)',
                                        p: 2.5,
                                        minWidth: 260,
                                        maxWidth: 320,
                                        border: '1.5px solid rgba(127,0,255,0.18)',
                                        cursor: 'pointer',
                                        mb: orientation === 'vertical' ? 2 : 0,
                                        mr: orientation === 'horizontal' ? 0 : 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        transition: 'box-shadow 0.2s, border 0.2s',
                                        '&:hover': {
                                            boxShadow: '0 8px 32px 0 rgba(127,0,255,0.18), 0 2px 16px 0 rgba(0,245,160,0.18)',
                                            border: '1.5px solid #00F5A0',
                                        },
                                        ...cardSx,
                                    }}
                                >
                                    <IdCard {...user} />
                                </Paper>
                            </motion.div>
                        ) : (
                            <Paper
                                key={idx}
                                sx={{
                                    background: 'rgba(24,24,32,0.92)',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10), 0 1.5px 8px 0 rgba(127,0,255,0.10)',
                                    p: 2.5,
                                    minWidth: 260,
                                    maxWidth: 320,
                                    border: '1.5px solid rgba(127,0,255,0.18)',
                                    cursor: 'pointer',
                                    mb: orientation === 'vertical' ? 2 : 0,
                                    mr: orientation === 'horizontal' ? 0 : 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'stretch',
                                    transition: 'box-shadow 0.2s, border 0.2s',
                                    '&:hover': {
                                        boxShadow: '0 8px 32px 0 rgba(127,0,255,0.18), 0 2px 16px 0 rgba(0,245,160,0.18)',
                                        border: '1.5px solid #00F5A0',
                                    },
                                    ...cardSx,
                                }}
                            >
                                <IdCard {...user} />
                            </Paper>
                        )
                    ))}
                </Stack>
            )}
        </Box>
    );
};

