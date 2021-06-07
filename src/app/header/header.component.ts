import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult = '';
  display = false;
  @Output() eventCreateAccount = new EventEmitter<boolean>();
  constructor(private modalService: NgbModal) { }
  username: string;

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }


  createAcount(){
    this.display = !this.display;
    this.eventCreateAccount.emit(!this.display);
  }

  open(content) {
    this.modalService.open(content);
  }


}
