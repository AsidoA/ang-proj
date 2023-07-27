import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private afs:AngularFirestore,private toastr:ToastrService) { }

  saveData(data){
    this.afs.collection('categories').add(data).then(docRef=>{
      console.log(docRef);
      this.toastr.success('Click on youre profile to see the car you added.. !');
    }).catch(err=>{console.log(err)});
  }

  loadData():Observable<Object>{
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(action =>{
        return action.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  deleteData(id){
    this.afs.doc(`categories/${id}`).delete().then(docRef=>{
      this.toastr.success('Data Deleted ..!');
    })
  }
}

