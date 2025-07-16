'use client';
import { useState } from 'react';
import { Box, Container, Divider, Grid, Typography, Button } from '@mui/material';
import { SearchBar } from '@/components/SearchBox';
import ApplicantCard from '@/components/ApplicantCard';
import { motion } from 'framer-motion';
import { SearchResult } from '@/components/SearchResult';
import { useRouter } from 'next/navigation';
import { keyframes } from '@mui/system';

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

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
    const router = useRouter();
    // Animated gradient keyframes
    const gradientMove = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #0f0f0f 0%, #1a1a1a 100%)',
        }}>
            {/* Animated SVG background shapes */}
            <Box sx={{
                position: 'absolute',
                top: { xs: -120, md: -180 },
                left: { xs: -80, md: -120 },
                width: { xs: 320, md: 520 },
                height: { xs: 320, md: 520 },
                zIndex: 0,
                opacity: 0.25,
                filter: 'blur(12px)',
                pointerEvents: 'none',
            }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) rotate(90) scale(180)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F5A0" />
                      <stop offset="1" stopColor="#7F00FF" stopOpacity="0.7" />
                    </radialGradient>
                  </defs>
                </svg>
            </Box>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 900,
                    mb: 2,
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #00F5A0 0%, #7F00FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: 36, md: 64 },
                    letterSpacing: 1,
                    zIndex: 1,
                }}
            >
                Welcome to Source AI
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: 700,
                    textAlign: 'center',
                    fontWeight: 500,
                    zIndex: 1,
                }}
            >
                Discover, connect, and collaborate with top tech talent—powered by AI.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'text.secondary',
                    mb: 6,
                    maxWidth: 600,
                    textAlign: 'center',
                    zIndex: 1,
                }}
            >
                Get started to explore AI-powered chat, smart search, and more. Whether you are a recruiter, a job seeker, or an enthusiast, Source AI brings the future of talent engagement to your fingertips.
            </Typography>
            <Button
                variant="contained"
                size="large"
                sx={{
                    px: 6,
                    py: 2,
                    fontWeight: 700,
                    fontSize: 22,
                    borderRadius: 3,
                    background: 'linear-gradient(90deg, #00F5A0 0%, #7F00FF 100%)',
                    backgroundSize: '200% 200%',
                    animation: `${gradientMove} 4s ease-in-out infinite`,
                    boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10)',
                    color: '#181818',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    zIndex: 1,
                    '&:hover': {
                        transform: 'translateY(-2px) scale(1.03)',
                        boxShadow: '0 8px 32px 0 rgba(127,0,255,0.18), 0 2px 16px 0 rgba(0,245,160,0.18)',
                        background: 'linear-gradient(90deg, #7F00FF 0%, #00F5A0 100%)',
                        backgroundSize: '200% 200%',
                    },
                }}
                onClick={() => router.push('/chat')}
            >
                Get Started
            </Button>
        </Box>
    );
} 