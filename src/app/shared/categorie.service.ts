import {Injectable} from '@angular/core';
import {Film} from '../model/Film';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = 'http://localhost:3000/Categorie/';

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get<Categorie[]>(this.url);
  }
  getCategoryById(id){
    return this.http.get<Categorie>(this.url + id);
  }

  getCategoryByTitle(title){
    return this.http.get<Categorie>(this.url + '?title=' + title);
  }
}
