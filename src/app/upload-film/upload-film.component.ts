import {Component, OnInit, SecurityContext, ViewChild} from '@angular/core';
import {CategorieService} from '../shared/categorie.service';
import {Categorie} from '../model/Categorie';
import {Film} from '../model/Film';
import {HttpClient} from '@angular/common/http';
import {FilmService} from '../shared/film.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-upload-film',
  templateUrl: './upload-film.component.html',
  styleUrls: ['./upload-film.component.css']
})
export class UploadFilmComponent implements OnInit {

  categoriesList: Categorie[];
  itemSelected: string;
  filmToUpload: Film;
  categorieId: string;
  quality: string;
  translateValue = false;
  selectedFile: File = null;
  test: SafeUrl;
  dateTime = new Date()

  constructor(private categorieService: CategorieService, private httpService: HttpClient,
              private filmService: FilmService, private domSanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe(
      (data: Categorie[]) => {
        this.categoriesList = data;
      }
    );
    this.filmToUpload = new Film();

    // console.log('selected', this.isChecked);
  }

  selectOption(id) {
    /*  console.log('item 1 ', id.target.options[id.target.options.selectedIndex].text);
      console.log('item 2 ', this.itemSelected);*/
    this.categorieId = this.itemSelected;
  }

  selectQualiryOption(id) {
    /*  console.log('item 1 ', id.target.options[id.target.options.selectedIndex].text);
      console.log('item 2 ', this.itemSelected);*/
    this.quality = id.target.options[id.target.options.selectedIndex].text;
    console.log('item 1 ', id.target.options[id.target.options.selectedIndex].text);
  }
  isChecked(data) {
    // console.log('translate ', data.target.checked);
    this.translateValue = data.target.checked;
  }

  onFileSelected(event) {
    /*    console.log(event);
        console.log('kamatcho', event.target.files[0]);
        console.log('nom', event.target.files[0].name);*/
    this.selectedFile = <File> event.target.files[0];
    // console.log('foo', this.selectedFile.name);
    URL = window.URL || window.webkitURL;
    const objectURL = URL.createObjectURL(event.target.files[0]);
    this.test = objectURL;
  }

  getDuration(){
    const vid = document.createElement('video');
    // tslint:disable-next-line:only-arrow-functions
    vid.ondurationchange = function() {

      return vid.duration;
    };
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('video', this.selectedFile, this.selectedFile.name);
    console.log('urlVideo', this.selectedFile);
    this.httpService.post('sasas', fd).subscribe(res => {
      console.log(res);
    });
  }

  addFilm(fdata: NgForm) {
    const fd = new FormData();
    fd.append('video', this.selectedFile, this.selectedFile.name);
    this.filmToUpload.trans = this.translateValue;
    this.filmToUpload.quality = this.quality;
    this.filmToUpload.duration = '00:00:00';
    this.filmToUpload.rate = 0;
    this.filmToUpload.nbrVues = 0;
    // this.filmToUpload.quality = '1080p';
    if (typeof this.test === 'string') {
      this.filmToUpload.url = this.test;
    }
    console.log('tttt', fd);
    if (this.filmToUpload.dateSortie === 'undefined'){
      this.filmToUpload.dateSortie = this.dateTime.getDate().toString();
    }

    this.filmService.addFilm(this.filmToUpload).subscribe(
      (data) => this.router.navigate(['/films'])
    );
  }
}
