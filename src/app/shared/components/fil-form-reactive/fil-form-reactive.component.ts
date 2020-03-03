import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fil-form-reactive',
  templateUrl: './fil-form-reactive.component.html',
  styleUrls: ['./fil-form-reactive.component.scss']
})
export class FilFormReactiveComponent implements OnInit {
  @Output() save = new EventEmitter();

  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura'];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      imdbUrl: ['', Validators.required],
      });
  }

  onSave(form) {
    this.save.emit(form.value);
    form.reset();
  }
}
