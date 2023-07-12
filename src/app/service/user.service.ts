import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl
  readonly moreParams = ['test', 'test2']

  constructor(private http: HttpClient) { }

  //Observable: vuol dire che mi aspetto che stiamo facendo una chiamata sulla rete
  // e la funzione ritornerà un valore non nell'immediato (perchè aspetta la risposta dall'API)

  getUsers(): Observable<User[]>{
    //PARAMS
    //let myParams = new HttpParams().set('page', '5').set('sort', 'true')
    const theParams = {['testList']: this.moreParams}   //key value -> accedo a 'this.moreParams' attraverso la chiave 'testList'
    //let myParams = new HttpParams({fromObject: theParams}) //'fromObject': prende il valore da un array e lo usa come parametro
    let myParams = new HttpParams({fromString: 'name:TestString&id=58'}) //'fromString': prende il valore da una stringa, lo estrae e lo inserisce nell'url

    //myParams.append('name', 'test') //cos' non funziona perchè va riassegnato a 'myParams' (vedi sotto)
    //myParams = myParams.append('name', 'test') //cos' non funziona perchè va riassegnato a 'myParams' (vedi sotto)
    
    //HEADERS
    //let myHeaders = new HttpHeaders({'myheader': 'header Value'})
    //let myHeaders = new HttpHeaders({'myheader': ['header Value',  'header value 2']})    //array di string come valore
    //myHeaders = myHeaders.set('id', '1234')   //così aggiungo un nuovo header
    //myHeaders = myHeaders.append('myheader', '1234')   //così aggiungo contenuto all'header
    return this.http.get<User[]>(`${this.apiUrl}/users`, {params: myParams} /*{headers: myHeaders}*/);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  updatePatchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}

