import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Film} from '../model/Film';
import {Categorie} from '../model/Categorie';
import {CategorieService} from '../shared/categorie.service';
import {HttpClient} from '@angular/common/http';
import {FilmService} from '../shared/film.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {
  filmToEdit: Film;
  oldFilm: Film;
  categorieId: string;
  oldCategorie: string;
  itemSelected: string;
  url: any;
  quality: string;
  categoriesList: Categorie[];
  selectedIndex: number;


  constructor(private categorieService: CategorieService, private httpService: HttpClient,
              private filmService: FilmService, private domSanitizer: DomSanitizer, private router: Router,
              private route: ActivatedRoute) { }
  async ngOnInit() {
    this.categorieService.getAllCategories().subscribe(
      (data: Categorie[]) => {
        this.categoriesList = data;
      }
    );
    this.filmService.getFilmById(this.route.snapshot.params.id).subscribe(
      data => {
        this.filmToEdit = data;
        this.oldFilm = data;
        this.filmMethod(data);
        this.urlMethod(data.url);
        this.getOldCategorie(data);
      }
    );
    this.filmToEdit = new Film();
    this.filmToEdit.title = this.oldFilm.title;

  }

  selectOption(id) {
    this.categorieId = this.itemSelected;
  }

  urlMethod(fromdata: string){
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(fromdata);
    // this.url = this.sanitizer.bypassSecurityTrustUrl(fromdata);
  }

  filmMethod(fromdata: Film){
    this.filmToEdit = fromdata;
    this.oldFilm = fromdata;
    if (fromdata.quality === '2160p - 4k'){
      this.selectedIndex = 1;
    }else if (fromdata.quality === '1440p - HD'){
      this.selectedIndex = 2;
    }else if (fromdata.quality === '1080p - HD'){
      this.selectedIndex = 3;
    }else if (fromdata.quality === '720p'){
      this.selectedIndex = 4;
    }else if (fromdata.quality === '480p'){
      this.selectedIndex = 5;
    }else if (fromdata.quality === '360p'){
      this.selectedIndex = 6;
    }else if (fromdata.quality === '240p'){
      this.selectedIndex = 7;
    }
    else if (fromdata.quality === '144'){
      this.selectedIndex = 8;
    }
  }

  getOldCategorie(film){
    this.categorieService.getCategoryById(film.categorieId).subscribe(
      (data: Categorie) => this.oldCategorie = data.title
    );
  }

  selectQualityOption(id) {
    /*  console.log('item 1 ', id.target.options[id.target.options.selectedIndex].text);
      console.log('item 2 ', this.itemSelected);*/
    this.quality = id.target.options[id.target.options.selectedIndex].text;
    console.log('item 1 ', id.target.options[id.target.options.selectedIndex].text);
  }

  isChecked(data) {
    // console.log('translate ', data.target.checked);
    this.filmToEdit.trans = data.target.checked;
  }

  editFilm(fdata: NgForm) {

    console.log('urlll', this.filmService.getVideoId(this.filmToEdit.url));
    this.filmToEdit.url = 'https://www.youtube.com/embed/' + this.filmService.getVideoId(this.filmToEdit.url);
    this.filmToEdit.quality = this.quality;
    this.filmToEdit.duration = '00:00:00';
    // this.filmToUpload.quality = '1080p';


    this.filmService.editFilm(this.filmToEdit).subscribe(
      (data) => this.router.navigate(['/films'])
    );
  }

}
