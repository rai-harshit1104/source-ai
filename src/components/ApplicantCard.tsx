import { Card, CardContent, CardHeader, Avatar, Typography, Chip, Stack, CardActions, IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface ApplicantCardProps {
  avatar: string;
  name: string;
  role: string;
  location: string;
  experience: number;
  skills: string[];
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
}

export default function ApplicantCard({
  avatar,
  name,
  role,
  location,
  experience,
  skills,
  summary,
  email,
  phone,
  linkedin,
}: ApplicantCardProps) {
  return (
    <Card sx={{ borderRadius: 3, bgcolor: 'background.paper', boxShadow: 3, minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
      <CardHeader
        avatar={<Avatar src={avatar} alt={name} sx={{ width: 56, height: 56, bgcolor: 'primary.main', fontWeight: 700 }} />}
        title={<Typography variant="h6" fontWeight={700}>{name}</Typography>}
        subheader={<>
          <Typography variant="body2" color="text.secondary">{role}</Typography>
          <Typography variant="body2" color="text.secondary">{location}</Typography>
        </>}
        sx={{ pb: 0, mb: 1 }}
      />
      <CardContent sx={{ pt: 1.5, pb: 2, px: 0 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {experience} years experience
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1.5 }}>
          {skills.map((skill, idx) => (
            <Chip key={idx} label={skill} color="secondary" size="small" sx={{ mb: 0.5 }} />
          ))}
        </Stack>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 1.5, pt: 0 }}>
        <Box>
          <IconButton aria-label="email" href={`mailto:${email}`} size="small" color="primary">
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="phone" href={`tel:${phone}`} size="small" color="primary">
            <PhoneIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" href={linkedin} target="_blank" rel="noopener" size="small" color="primary">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
} 