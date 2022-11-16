import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import StudentList from './studentList';

test('renders dropdown componet', () => {
  const StudentListMock = ["User1", "User2", "user3", "User4"];
  const onChangeMock = jest.fn();
  //test the comboBox is working
  render(<StudentList students={StudentListMock} onChangeHandler={onChangeMock}/>);
  const selectElement = screen.getByRole('combobox', { name: /select a student/i })
  expect(selectElement).toBeInTheDocument();

  //test all element of the list and the placeholder option
  const options = screen.getAllByRole('option');
  expect(options).toHaveLength(5);
  expect(options[0]).toHaveTextContent("Select a Student");

  //test onChange Event
  fireEvent.change(selectElement, { target: { value: 'User1' } })
  expect(onChangeMock).toBeCalled();

});
