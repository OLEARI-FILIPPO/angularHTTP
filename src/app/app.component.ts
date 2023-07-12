import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularhttp';

  private user: User =  {
    'id': 5,
    'name': 'Leanne Graham 5',
    'username': 'Bret 5',
    'email': 'Sincere5@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

  private patchUser: any =  {
    'id': 5,
    'name': 'Leanne Graham 50',
    'username': 'Bret 50'
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {
    //this.onUpdatePatchUser()
    //this.onDeleteUser()
    this.onGetUsers()
    //this.onGetUser()
    //this.onCreateUser()
  }

  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('done getting users')
    );
  }

  onGetUser(): void{
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done getting user')
    );
  }

  onCreateUser(): void{
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done creating user')
    );
  }

  onUpdateUser(): void{
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done updating user')
    );
  }

  onUpdatePatchUser(): void{
    this.userService.updatePatchUser(this.patchUser).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done updating Patch user')
    );
  }

  onDeleteUser(): void{
    this.userService.deleteUser(5).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done deleting user')
    );
  }
}
