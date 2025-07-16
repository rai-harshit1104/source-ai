'use client'
import React from 'react';
import { Card, CardContent, CardActions, Avatar, Typography, IconButton, Box, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface IdCardProps {
  imageUrl: string;
  experience: string;
  location: string;
  role: string;
  whatsapp: string;
  email: string;
  phone: string;
}

const IdCard: React.FC<IdCardProps> = ({
  imageUrl,
  experience,
  location,
  role,
  whatsapp,
  email,
  phone,
}) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 24px 0 rgba(0,245,160,0.10), 0 1.5px 8px 0 rgba(127,0,255,0.10)', bgcolor: 'rgba(24,24,32,0.92)', minWidth: 260, maxWidth: 320, p: 0, border: '1.5px solid rgba(127,0,255,0.18)', transition: 'box-shadow 0.2s, border 0.2s', '&:hover': { boxShadow: '0 8px 32px 0 rgba(127,0,255,0.18), 0 2px 16px 0 rgba(0,245,160,0.18)', border: '1.5px solid #00F5A0', } }}>
      <Box sx={{ width: '100%', height: 140, background: 'linear-gradient(90deg, #181818 0%, #23234a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
        <Avatar src={imageUrl} alt="Profile" sx={{ width: 96, height: 96, bgcolor: 'primary.main', border: '4px solid #181818', boxShadow: 2 }} />
      </Box>
      <CardContent sx={{ bgcolor: 'rgba(36,36,48,0.95)', pt: 3, pb: 2, px: 2 }}>
        <Stack spacing={1.5}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography variant="subtitle2" color="primary.main" fontWeight={600} minWidth={80}>Experience:</Typography>
            <Typography variant="body2" color="#fff">{experience}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography variant="subtitle2" color="primary.main" fontWeight={600} minWidth={80}>Location:</Typography>
            <Typography variant="body2" color="#fff">{location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Typography variant="subtitle2" color="primary.main" fontWeight={600} minWidth={80}>Role:</Typography>
            <Typography variant="body2" color="#fff">{role}</Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions sx={{ bgcolor: 'rgba(24,24,32,0.85)', borderTop: '1px solid rgba(127,0,255,0.18)', px: 2.5, py: 1.5, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {whatsapp && (
            <IconButton href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" color="success" title="WhatsApp">
              <WhatsAppIcon />
            </IconButton>
          )}
          <IconButton href={`mailto:${email}`} color="primary" title="Email">
            <EmailIcon />
          </IconButton>
          <IconButton href={`tel:${phone}`} color="primary" title="Call">
            <PhoneIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default IdCard; 