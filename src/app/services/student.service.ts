import { Injectable } from '@angular/core';
import { collectionSnapshots, deleteDoc, Firestore, getDocs } from '@angular/fire/firestore';
import { Student } from 'src/model/student.model';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private db:Firestore) { }

  addNew(student: Student) {
    if (!student.id) {
      throw new Error('Student id is required');
    }

    return setDoc(doc(this.db,'students/' + student.id),student);

}

getAll(){

  return collectionSnapshots(collection(this.db, 'students'));
  // return getDocs (collection(this.db,'students'))

}

update(student: Student) {
  return setDoc(doc(this.db, 'students/' + student.id), student);
}

deletestudent(studentId:string) {
  return deleteDoc(doc(this.db, 'students/' + studentId));
}

}
