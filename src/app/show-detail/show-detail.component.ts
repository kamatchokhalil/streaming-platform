import { Component, OnInit } from '@angular/core';
import {FilmService} from '../shared/film.service';
import {Film} from '../model/Film';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  filmItem: Film;
  url: any;
  constructor(private route: ActivatedRoute, private filmService: FilmService, private sanitizer: DomSanitizer) {}

 async ngOnInit() {
      this.filmService.getFilmById(this.route.snapshot.params.id).subscribe(
        data => {
          this.filmItem = data;
          this.filmMethod(data);
          this.urlMethod(data.url);
        }
      );
      console.log('kamatcho', this.route.snapshot);
  }


  urlMethod(fromdata: string){
     this.url = this.sanitizer.bypassSecurityTrustResourceUrl(fromdata);
    // this.url = this.sanitizer.bypassSecurityTrustUrl(fromdata);
  }

  filmMethod(fromdata: Film){
    this.filmItem = fromdata;
  }

}
