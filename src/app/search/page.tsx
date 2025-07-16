'use client';
import { useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { SearchBar } from '@/components/SearchBox';
import { SearchResult } from '@/components/SearchResult';
import { keyframes } from '@mui/system';
import { motion } from 'framer-motion';

const mockApplicants = [
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'John Doe',
        role: 'Software Engineer',
        location: 'New York, USA',
        experience: 5,
        skills: ['React', 'TypeScript', 'Node.js'],
        summary: 'Experienced full-stack engineer with a passion for building scalable web apps.',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Jane Smith',
        role: 'Product Manager',
        location: 'London, UK',
        experience: 3,
        skills: ['Agile', 'Scrum', 'UI/UX'],
        summary: 'Product leader with a knack for delivering user-centric solutions.',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
        name: 'Max Mustermann',
        role: 'UX Designer',
        location: 'Berlin, Germany',
        experience: 8,
        skills: ['Figma', 'Sketch', 'Prototyping'],
        summary: 'Creative designer focused on intuitive and delightful user experiences.',
        email: 'max.mustermann@example.com',
        phone: '555-123-4567',
        linkedin: 'https://linkedin.com/in/maxmustermann',
    },
];

export default function ChatPage() {
    const [results, setResults] = useState<typeof mockApplicants>([]);
    // Animated gradient keyframes
    const gradientMove = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;
    // Typing animation for interactive message
    const interactiveMessage = "👋 Hi there! Paste a job description above to find the best candidates for your role.";
    const [typedText, setTypedText] = useState("");
    const [typingIdx, setTypingIdx] = useState(0);
    useEffect(() => {
        if (results.length === 0 && typingIdx < interactiveMessage.length) {
            const timeout = setTimeout(() => {
                setTypedText(interactiveMessage.slice(0, typingIdx + 1));
                setTypingIdx(typingIdx + 1);
            }, 32);
            return () => clearTimeout(timeout);
        }
        if (results.length > 0) {
            setTypedText("");
            setTypingIdx(0);
        }
    }, [typingIdx, results.length]);
    return (
        <Box sx={{
            pt: 4,
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #0f0f0f 0%, #1a1a1a 100%)',
        }}>
            {/* Animated SVG background shapes */}
            <Box sx={{
                position: 'absolute',
                bottom: { xs: -120, md: -180 },
                right: { xs: -80, md: -120 },
                width: { xs: 320, md: 520 },
                height: { xs: 320, md: 520 },
                zIndex: 0,
                opacity: 0.18,
                filter: 'blur(16px)',
                pointerEvents: 'none',
                animation: 'float1 8s ease-in-out infinite alternate',
                '@keyframes float1': {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(40px)' },
                },
            }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) rotate(90) scale(180)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7F00FF" />
                            <stop offset="1" stopColor="#00F5A0" stopOpacity="0.7" />
                        </radialGradient>
                    </defs>
                </svg>
            </Box>
            <Box sx={{
                position: 'absolute',
                top: { xs: -120, md: -180 },
                left: { xs: -80, md: -120 },
                width: { xs: 260, md: 400 },
                height: { xs: 260, md: 400 },
                zIndex: 0,
                opacity: 0.13,
                filter: 'blur(18px)',
                pointerEvents: 'none',
                animation: 'float2 10s ease-in-out infinite alternate',
                '@keyframes float2': {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(-30px)' },
                },
            }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="200" cy="200" rx="180" ry="120" fill="url(#paint1_radial)" />
                    <defs>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) rotate(90) scale(180 120)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00F5A0" />
                            <stop offset="1" stopColor="#7F00FF" stopOpacity="0.5" />
                        </radialGradient>
                    </defs>
                </svg>
            </Box>

            {results.length == 0 && <Box sx={{
                display: 'flex', minHeight: '30vh', alignItems: 'flex-end',
                justifyContent: 'center'
            }}><Typography
                variant="h5"
                sx={{
                    color: 'text.secondary',
                    mb: 4,
                    textAlign: 'center',
                    fontWeight: 500,
                    zIndex: 1,
                    fontFamily: 'monospace',
                    letterSpacing: 0.5,
                    minHeight: '2.5em',
                }}
            >
                {typedText}
                <Box component="span" sx={{
                    display: 'inline-block',
                    width: '1ch',
                    animation: 'blink 1s steps(1) infinite',
                    ml: '-2px',
                    color: 'text.secondary',
                    '@keyframes blink': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0 },
                        '100%': { opacity: 1 },
                    },
                }}>|</Box>
            </Typography></Box>}
            <Box
                sx={
                    results.length === 0
                        ? {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            //   bgcolor: 'background.default',
                            position: 'relative',
                        }
                        : {
                            position: 'sticky',
                            top: 0,
                            zIndex: 10,
                            bgcolor: 'background.default',
                            pb: 3,
                        }
                }
            >
                <SearchBar onSearch={(query: any) => setResults(mockApplicants)} />
            </Box>


            {results.length > 0 && <Box sx={{ zIndex: 1, position: 'relative' }}>
                <SearchResult
                    results={results?.map((applicant: any) => ({
                        ...applicant,
                        imageUrl: applicant.avatar,
                        whatsapp: '',
                        experience: String(applicant.experience),
                    }))}
                    cardSx={{
                        background: 'rgba(36,36,48,0.85)',
                        boxShadow: '0 8px 32px 0 rgba(127,0,255,0.18), 0 2px 16px 0 rgba(0,245,160,0.18)',
                        borderRadius: 4,
                        backdropFilter: 'blur(8px)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'translateY(-4px) scale(1.03)',
                            boxShadow: '0 16px 48px 0 rgba(127,0,255,0.22), 0 4px 24px 0 rgba(0,245,160,0.22)',
                        },
                    }}
                    filterPaperSx={{
                        background: 'rgba(24,24,32,0.92)',
                        boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10), 0 1.5px 8px 0 rgba(127,0,255,0.10)',
                        border: '1.5px solid rgba(127,0,255,0.18)',
                        borderRadius: 4,
                        p: 3.5,
                        mb: 4,
                        backdropFilter: 'blur(8px)',
                    }}
                    animateCards
                />
            </Box>}
        </Box>
    );
} 