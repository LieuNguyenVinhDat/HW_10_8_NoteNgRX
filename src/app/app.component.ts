import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { StudentState } from 'src/states/student.state';
import * as StudentActions from 'src/actions/student.action';
import { Student } from 'src/model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  studentState$ = this.store.select('student');
  students$ = this.store.select((state) => state.student.students);

  currentStudent: Student = {
    id: '',
    name: '',
    dob: '',
    text:'',
    description: '',
  }


  constructor(private store: Store<{ student: StudentState }>) { }
  title = 'Firebase01';

  ngOnInit(): void {

    this.studentState$.subscribe((state) => {
      console.log(state);
    });

    // this.store.dispatch(StudentActions.addStudent({
    //   student: {
    //     id: Date.now().toString(),
    //     name: 'John',
    //     email: 'lieulieu@gmail.com',
    //     dob: '1/1/2000',
    //     phone: { code: '+84', number: '1234567' },
    //   },
    // })
    // );
    this.store.dispatch(StudentActions.getStudents());
  }

  addStudent() {
    this.store.dispatch(StudentActions.addStudent({student:this.currentStudent}));
  }
  deleteStudent(id: string): void {
 this.store.dispatch(StudentActions.deleteStudent({ id }));

  }

}
