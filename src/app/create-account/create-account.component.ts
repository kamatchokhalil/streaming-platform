import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/User';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthentificationComponent} from '../authentification/authentification.component';





@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit, OnDestroy {

  user: User;
  maxLength: number;

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.user = new User();
    this.maxLength = 15;
  }

  sendData() {
    this.userService.addUser(this.user).subscribe(
      () => [this.modalService.dismissAll(), window.alert('Bienvenu ' + this.user.username)]
    );
  }

  ngOnDestroy(): void {
  }

}
