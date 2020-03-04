import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { FilFormReactiveComponent } from './components/fil-form-reactive/fil-form-reactive.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe,
    FilmFormComponent,
    FilFormReactiveComponent,
    ListFilmComponent,
    CreateFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  exports: [
    FilmComponent,
    FilmFormComponent,
    CapitalizeFirstPipe,
    FilFormReactiveComponent,
    ListFilmComponent
  ]
})
export class SharedModule { }
