import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Categorie} from '../model/Categorie';
import {CategorieService} from '../shared/categorie.service';
import {Film} from '../model/Film';
import {FilmService} from '../shared/film.service';
import {MyServiceService} from '../shared/my-service.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  username: string;
  categoriesList: Categorie[];
  filmList: Film[];
  filmSearch: Film;
  title: string
  @Output() searchEvent = new EventEmitter();
  constructor(private categorieService: CategorieService, private filmService: FilmService, private myservice: MyServiceService) {
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.categorieService.getAllCategories().subscribe(data => this.categoriesList = data);
    this.filmService.getAllFilms().subscribe(data => this.filmList = data);
    // this.filmService.getFilmBytitle(this.title).subscribe(data => this.filmSearch = data);
  }

  destroySession() {
    window.sessionStorage.clear();
    window.location.reload();
  }

  sendData() {
    this.searchEvent.emit(this.title);
    // this.myservice.itemToLookFor(this.title);
  }

}
