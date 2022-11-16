import React, { useEffect, useState } from 'react';
import StudentList   from '../../components/studentList/studentList';
import { StudentService } from '../../services';
import Alert from 'react-bootstrap/Alert';
import { getInstructionalTime } from "../../helpers/helper";

const HomeViewModel = () => {
    const [studentList, setStudentList] = useState<string[]>([]);
    const [instructionalTime, setInstructionalTime] = useState<number>(0);
    const [studentName, setStudentName] = useState<string>("");

    const studentService = StudentService.getInstance();

    useEffect(() => {
        const getData = async() => {
            const response = await studentService.getStudents();
            setStudentList(response); 
        }
        getData()
    }, [studentService]);

    const onChangeHandler = async(value:string) =>{
        if (value !== "-1"){
            const schedule = await studentService.getMeetings(value);
            setStudentName(value);
            setInstructionalTime(getInstructionalTime(schedule))
        } else
            setInstructionalTime(0)
    }

    return (
        <>
            <div className="container mb-5">
                <StudentList students={studentList} onChangeHandler={onChangeHandler}/>
                { (instructionalTime !== 0) && (
                    <Alert variant="success" className="mt-5">
                        <h3> {studentName} spends {instructionalTime}% of their time in instructional meetings </h3>
                    </Alert>
                )}
            </div>
            
        </>
    );
}

export default HomeViewModel;