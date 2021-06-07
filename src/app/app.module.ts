import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { AllFilmsComponent } from './all-films/all-films.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderUserComponent } from './header-user/header-user.component';
import { UploadFilmComponent } from './upload-film/upload-film.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { SafePipe } from './safe.pipe';
import { FilmCategoryComponent } from './film-category/film-category.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CreateAccountComponent,
    AuthentificationComponent,
    FilmItemComponent,
    AllFilmsComponent,
    HeaderUserComponent,
    UploadFilmComponent,
    ShowDetailComponent,
    ContentBodyComponent,
    EditFilmComponent,
    SafePipe,
    FilmCategoryComponent,
    RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
