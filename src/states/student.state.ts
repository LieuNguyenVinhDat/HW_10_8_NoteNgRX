import { Student } from "src/model/student.model"

export interface StudentState{
  students : Student[],
  isLoading: boolean,
  error: string,
  isSuccess: boolean
}
