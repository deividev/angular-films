import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { FilFormReactiveComponent } from './components/fil-form-reactive/fil-form-reactive.component';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe,
    FilmFormComponent,
    FilFormReactiveComponent
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
    FilFormReactiveComponent
  ]
})
export class SharedModule { }
