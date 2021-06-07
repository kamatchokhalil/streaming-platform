import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllFilmsComponent} from './all-films/all-films.component';
import {UploadFilmComponent} from './upload-film/upload-film.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {ContentBodyComponent} from './content-body/content-body.component';
import {EditFilmComponent} from './edit-film/edit-film.component';
import {HeaderComponent} from './header/header.component';
import {FilmCategoryComponent} from './film-category/film-category.component';
import {RouteNotFoundComponent} from './route-not-found/route-not-found.component';


const routes: Routes = [
  {path: '', component: ContentBodyComponent},
  {path: 'films', component: AllFilmsComponent},
  {path: 'upload', component: UploadFilmComponent},
  {path: 'edit/:id', component: EditFilmComponent},
  {path: 'films/:id', component: ShowDetailComponent},
  /*{path: ':id', component: ShowDetailComponent},*/
  {path: 'category/:id', component: FilmCategoryComponent},
  {path: '**', component: RouteNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
