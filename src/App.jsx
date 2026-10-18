import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import StudentsList from './component/StudentsList';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [students, setStudents] = useState([]);

  const handleRemoveStudent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.studentId !== studentId)
    );
  };

  return (
    <div className="app">
      <Form
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        grade={grade}
        setGrade={setGrade}
        setStudents={setStudents}
      />

      <StudentsList students={students} onRemoveStudent={handleRemoveStudent} />
    </div>
  );
}
