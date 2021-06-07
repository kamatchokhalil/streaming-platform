import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../model/Film';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css'],
})
export class FilmItemComponent implements OnInit {

  @Input() itemOfFilmsList: Film;
  @Input() titleFromAllFilms: string;
  url: any;
  currentRate = 3.50;
  @Output() deleteFilmEvent = new EventEmitter<Film>()
  @Input() searchText: string;
  @Input() criteria: string;
  @Input() username: string;

  constructor(private sanitizer: DomSanitizer, private router: Router, private filmService: FilmService) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.itemOfFilmsList.url);
//    this.username = sessionStorage.getItem('username');
    console.log('usernameItem', this.username);
  }

  editFilm(film: Film){
    this.router.navigate(['/edit', film.id]);
  }
  deleteFilm(){
    this.deleteFilmEvent.emit(this.itemOfFilmsList);
  }

  callServiceFilm(){
    this.filmService.incrementNbrVues(this.itemOfFilmsList);
  }
}
