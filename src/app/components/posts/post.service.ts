import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostI } from 'src/app/shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  racesCollection: AngularFirestoreCollection<PostI>;

  constructor(private afs: AngularFirestore) { }

  public getAllPosts(): Observable<PostI[]>{
    return this.afs.collection('posts').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PostI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  public getOnePost(id: PostI): Observable<PostI>{
    return this.afs.doc<PostI>(`posts/${id}`).valueChanges();
  }
}
