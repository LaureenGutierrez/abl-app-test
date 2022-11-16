import React from 'react';
import Form from 'react-bootstrap/Form';

export interface IStudentListProps {
    students: string[],
    onChangeHandler: (value:string) => void,
} 

const StudentList = ({students, onChangeHandler}: IStudentListProps) => {
    
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value);
    }

    return (
        <Form.Select aria-label="Select a Student" onChange={onChange}>
          <option value="-1">Select a Student</option>
          {students.map((name:string, ) => (
            <option value={name} key={name}>{name}</option>
          ))}
        </Form.Select>

    );
}

export default StudentList;
