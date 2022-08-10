import { createReducer, on } from "@ngrx/store";
import { StudentState } from "src/states/student.state";
import * as StudentActions from "src/actions/student.action";
import { state } from "@angular/animations";

const initialState: StudentState = {
  students: [],
  isLoading: false,
  error: "",
  isSuccess: false
}


export const studentReducer = createReducer(
  initialState,
  on(StudentActions.addStudent, (state) => ({
    ...state,
    isLoading: true,

  })),

  on(StudentActions.addStudentSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: ""
  })),

  on(StudentActions.addStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(StudentActions.getStudents, state => ({
    ...state,
    isLoading: true,
    error: ""
  })),

  on(StudentActions.getStudentsSuccess, (state, { students }) => ({
    ...state,
    isLoading: false,
    students: students
  })),

  on(StudentActions.getStudentsFailre, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),




);
