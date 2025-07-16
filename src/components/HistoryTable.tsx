import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Chip, Box, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material';

const statusColors: Record<string, 'success' | 'warning' | 'error'> = {
  Selected: 'success',
  Pending: 'warning',
  Rejected: 'error',
};

interface HistoryRow {
  name: string;
  role: string;
  date: string;
  status: string;
}

interface HistoryTableProps {
  data: HistoryRow[];
}

export default function HistoryTable({ data }: HistoryTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const roles = Array.from(new Set(data.map(row => row.role)));
  const statuses = Array.from(new Set(data.map(row => row.status)));

  const filteredData = data.filter(row =>
    (!roleFilter || row.role === roleFilter) &&
    (!statusFilter || row.status === statusFilter)
  );

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', mb: 2, p: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ p: 2, alignItems: 'center', justifyContent: 'flex-end', mb: 2 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Role</InputLabel>
          <Select value={roleFilter} label="Role" onChange={e => setRoleFilter(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            {roles.map(role => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} label="Status" onChange={e => setStatusFilter(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <TableContainer sx={{ px: 1, pb: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Applicant Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
              <TableRow key={idx} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={statusColors[row.status] || 'default'} size="small" />
                </TableCell>
              </TableRow>
            ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">No history found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
} 