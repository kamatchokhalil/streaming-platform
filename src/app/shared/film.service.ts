import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../model/Film';
import {CategorieService} from './categorie.service';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url = 'http://localhost:3000/Films/';
  constructor(private http: HttpClient, private categoryService: CategorieService) { }
  getAllFilms(){
    return this.http.get<Film[]>(this.url);
  }
  getFilmById(id: number){
    return this.http.get<Film>(this.url + id);
  }
  getFilmBytitle(title: string){
    return this.http.get<Film[]>('http://localhost:3000/Films?title=' + title);
  }
  getFilmByCategoryId(categoryId: number){
    return this.http.get<Film[]>(this.url + '?categorieId=' + categoryId);
  }
  getFilmByQuality(qualite: string){
    return this.http.get<Film[]>(this.url + '?quality=' + qualite);
  }
  addFilm(film: Film){
    return this.http.post(this.url, film);
  }
  deleteFilm(id: number){
    return this.http.delete(this.url + id);
  }
  editFilm(film: Film){
    return this.http.put(this.url + film.id, film);
  }
  getVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
  incrementNbrVues(film: Film){
    film.nbrVues++;
    return this.http.put(this.url + film.id, film).subscribe(
      (data) => console.log('service called', data)
    );
  }
}
