'use client';
import HistoryTable from '@/components/HistoryTable';
import { Box, Container, Typography } from '@mui/material';

const mockHistory = [
  { name: 'John Doe', role: 'Software Engineer', date: '2024-07-01', status: 'Selected' },
  { name: 'Jane Smith', role: 'Product Manager', date: '2024-07-02', status: 'Pending' },
  { name: 'Max Mustermann', role: 'UX Designer', date: '2024-07-03', status: 'Rejected' },
  { name: 'Alice Lee', role: 'Data Scientist', date: '2024-07-04', status: 'Selected' },
  { name: 'Bob Brown', role: 'DevOps Engineer', date: '2024-07-05', status: 'Pending' },
];

export default function HistoryPage() {
  return (
    <Container  sx={{ pt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Search History
      </Typography>
      <Box>
        <HistoryTable data={mockHistory} />
      </Box>
    </Container>
  );
} 