import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../shared/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  user: User;
  dataOfUser: User;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user = new User();
  }

  authentification(){
    this.userService.auth(this.user.username, this.user.password).subscribe(
      (data: User) => {
                        sessionStorage.setItem('username', (data[0].username));
                        // console.log('kamatcho', data[0].username);
                        window.location.reload();
                        },
      (error) => console.log('kama', error)
    );
    this.modalService.dismissAll();
  }

}
