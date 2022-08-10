import { createAction, props } from "@ngrx/store";
import { Student } from "src/model/student.model";

export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: Student }>()

);

export const addStudentSuccess = createAction(
  '[Student] Add Student Success',
);
export const addStudentFailure = createAction(
  '[Student] Add Student Failure',
  props<{ error: string }>()
);

export const getStudents = createAction(
  '[Student] Get Students'
);

export const getStudentsSuccess = createAction(
  '[Student] Get Students Success',
  props<{ students: Student[] }>()
);
export const getStudentsFailre = createAction(
  '[Student] Get Students Failure',
  props<{ error: string }>()
);
export const deleteStudent = createAction(
  '[Todo] Delete Students',
  props<{ id: string }>()
);
export const deleteStudentFails = createAction(
  '[Todo] Delete Students Fails',
  props<{ error: string }>()
);
export const deleteStudentSuccess = createAction(
  '[Todo] Delete Students Success'
);
