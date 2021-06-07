import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExamProject';
  username: string;
  filmTitle: string;
  @Output() notifListEvent = new EventEmitter();

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  getData(titre: string){
    this.filmTitle = titre;
    return titre;
  }
}
