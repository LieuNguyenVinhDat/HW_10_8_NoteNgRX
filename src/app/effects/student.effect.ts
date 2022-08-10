import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { StudentService } from "src/app/services/student.service";
import * as StudentActions from "src/actions/student.action";
import { switchMap, map, catchError, from, of } from "rxjs";
import { Student } from "src/model/student.model";

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private studentService: StudentService) { }

  addStudent$ = createEffect (() => this.actions$.pipe(
    ofType(StudentActions.addStudent),
    switchMap((action) => from(this.studentService.addNew(action.student))),
    map(() => StudentActions.addStudentSuccess()),
    catchError((error) => {
      return of(StudentActions.addStudentFailure({ error: error}));
    }
  )));

getStudents$ = createEffect(() => this.actions$.pipe(
  ofType(StudentActions.getStudents),
  switchMap(() => from(this.studentService.getAll())),
  map ((snapshot) => {

     let students = snapshot.map((doc) => <Student>doc.data())
      return StudentActions.getStudentsSuccess({ students: students });
  }),
  catchError((error) => {
    return of(StudentActions.getStudentsFailre({ error: error }));
  })));


deleteStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.deleteStudent),
      switchMap((action) =>
        from(this.studentService.deletestudent(action.id)).pipe(
          map(() => StudentActions.deleteStudentSuccess()),
          catchError((error) => {
            return of(StudentActions.deleteStudentFails({ error: error }));
          })
        )
      )
    )
  );
}
