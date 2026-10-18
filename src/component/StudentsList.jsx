import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function StudentsList({ students, onRemoveStudent }) {
  return (
    <Box className="students-wrapper">
      <Paper elevation={3} sx={{ width: '100%' }}>
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#0B1A30',
            }}
          >
            Students List
          </Typography>

          <Typography variant="body2" sx={{ color: '#757575', mt: 1 }}>
            Total students: {students.length}
          </Typography>
        </Box>

        <TableContainer>
          <Table aria-label="students table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>

                <TableCell align="right">
                  <strong>Age</strong>
                </TableCell>

                <TableCell align="right">
                  <strong>Grade</strong>
                </TableCell>

                <TableCell align="center">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {students.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                    No students added yet.
                  </TableCell>
                </TableRow>
              ) : (
                students.map((student) => (
                  <TableRow key={student.studentId} hover>
                    <TableCell component="th" scope="row">
                      {student.name}
                    </TableCell>

                    <TableCell align="right">{student.age}</TableCell>

                    <TableCell align="right">{student.grade}</TableCell>

                    <TableCell align="center">
                      <Button
                        color="error"
                        variant="outlined"
                        size="small"
                        onClick={() => onRemoveStudent(student.studentId)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
