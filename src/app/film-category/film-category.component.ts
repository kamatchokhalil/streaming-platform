import { Component, OnInit } from '@angular/core';
import {Film} from '../model/Film';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'app-film-category',
  templateUrl: './film-category.component.html',
  styleUrls: ['./film-category.component.css']
})
export class FilmCategoryComponent implements OnInit {
  filmsList: Film[];
  constructor(private route: ActivatedRoute, private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.getFilmByCategoryId(this.route.snapshot.params.id).subscribe((data: Film[]) => this.filmsList = data);
  }

  deleteFilm(film) {
    const r = confirm('Voulez vous supprimer ce film ?');
    if (r === true){
      this.filmService.deleteFilm(film.id).subscribe(
        (data) => {
          console.log('from delete film', data);
          this.router.navigate(['/films']);
          window.location.href = 'http://localhost:4200/films';
        }
      );
    }
  }
}
