import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  NativeSelect,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function Form({
  name,
  setName,
  age,
  setAge,
  grade,
  setGrade,
  setStudents,
}) {
  const [errors, setErrors] = useState({});

  const handleClear = () => {
    setName('');
    setAge('');
    setGrade('');
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const numericAge = Number(age);
    const newErrors = {};

    if (!trimmedName) {
      newErrors.name = 'Name is required';
    }

    if (
      age === '' ||
      !Number.isFinite(numericAge) ||
      !Number.isInteger(numericAge) ||
      numericAge < 1
    ) {
      newErrors.age = 'Enter a valid positive whole-number age';
    }

    if (!grade) {
      newErrors.grade = 'Please select a grade';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const student = {
      studentId: crypto.randomUUID(),
      name: trimmedName,
      age: numericAge,
      grade: `Class ${grade}`,
    };

    setStudents((prevStudents) => [...prevStudents, student]);

    handleClear();
  };

  return (
    <Box className="form-wrapper">
      <Paper elevation={3} className="form-paper">
        <Box className="form-header">
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: '#0B1A30',
              mb: 1,
            }}
          >
            Student Entry Form
          </Typography>

          <Typography variant="body1" sx={{ color: '#757575' }}>
            Add students and review the list below.
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box className="form-grid">
            <Box>
              <Typography variant="body2" className="field-label">
                Name
              </Typography>

              <TextField
                fullWidth
                name="name"
                placeholder="e.g. MS Dhoni"
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: '' }));
                }}
                error={Boolean(errors.name)}
                helperText={errors.name || ' '}
              />
            </Box>

            <Box>
              <Typography variant="body2" className="field-label">
                Age
              </Typography>

              <TextField
                fullWidth
                name="age"
                placeholder="e.g. 14"
                variant="outlined"
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setErrors((prev) => ({ ...prev, age: '' }));
                }}
                error={Boolean(errors.age)}
                helperText={errors.age || ' '}
                slotProps={{
                  htmlInput: {
                    min: 1,
                    step: 1,
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" className="field-label">
                Grade
              </Typography>

              <FormControl fullWidth error={Boolean(errors.grade)}>
                <NativeSelect
                  value={grade}
                  onChange={(e) => {
                    setGrade(e.target.value);
                    setErrors((prev) => ({ ...prev, grade: '' }));
                  }}
                  inputProps={{
                    name: 'grade',
                    id: 'grade',
                  }}
                  disableUnderline={false}
                >
                  <option value="">Select grade</option>
                  <option value="8">Class 8</option>
                  <option value="5">Class 5</option>
                </NativeSelect>

                <FormHelperText>{errors.grade || ' '}</FormHelperText>
              </FormControl>
            </Box>
          </Box>

          <Box className="form-actions">
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#1A62E3',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#1552C7',
                },
              }}
            >
              Add Student
            </Button>

            <Button
              type="button"
              variant="outlined"
              onClick={handleClear}
              sx={{
                color: '#333',
                borderColor: '#E0E0E0',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#BDBDBD',
                  bgcolor: '#F5F5F5',
                },
              }}
            >
              Clear
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
