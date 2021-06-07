import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FilmService} from '../shared/film.service';
import {Film} from '../model/Film';
import {Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.css']
})
export class AllFilmsComponent implements OnInit {
  filmsList: Film[];
  @Input() titleFilmFromBody: string;
  search: string;
  critere = '1';
  categorieId: number;
  username: string;

  constructor(private filmService: FilmService, private router: Router, private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((data: Film[]) => this.filmsList = data);
    // this.filmService.getAllFilms().subscribe((data: Film[]) => console.log('kamatcho', data));
    this.username = sessionStorage.getItem('username');
    console.log('usernameAllFilm', this.username);
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

  selectOption(event){
    this.search = '';
    // this.critere = event.target.options[event.target.options.selectedIndex].text;
     // console.log('cc', this.critere+ " "+ this.search);
/*     if (this.critere === '1' && this.search !== 'undefined'){
       this.filmService.getFilmBytitle(this.search).subscribe(
         (data: Film[]) => {
           this.filmsList = (data);
           console.log('film title', data);
         }
       );
     }else {
       this.filmService.getAllFilms().subscribe((data: Film[]) => this.filmsList = data);
     }*/

  }

  lauchSearch(){
    // tslint:disable-next-line:radix
    if (this.search != 'undefined' && this.critere != 'undefined'){
      // tslint:disable-next-line:radix
      switch (parseInt(this.critere)) {
        case 1 : {
          this.filmService.getFilmBytitle(this.search).subscribe(
            (data: Film[]) => {
              this.filmsList = (data);
              console.log('film title', data);
            }
          );
        }
                 break;
        case 2 : { // Catégories

          console.log(' kkkk categorieId', 'iciii ' + this.search );
          this.categorieService.getCategoryByTitle(this.search).subscribe(
           (data) => {
             this.putCategoryId(data[0].id);
           }
         );

          this.filmService.getFilmByCategoryId(this.categorieId).subscribe(
            (data: Film[]) => {
              this.filmsList = (data);
            }
          );
          break;
        }
        case 3 : {
          this.filmService.getFilmByQuality(this.search).subscribe(
            (data: Film[]) => {
              this.filmsList = (data);
            }
          );
          break;
        }

      }
    }

  }

  putCategoryId(id){
    this.categorieId = id;
  }

}
