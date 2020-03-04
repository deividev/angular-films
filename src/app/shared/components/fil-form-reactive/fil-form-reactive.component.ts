import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

const URL_VALID =
  /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

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
      image: ['', [Validators.required, this.validateUrl]],
      imdbUrl: ['', [Validators.required, this.validateUrl]],
    }, {validators: this.sameUrl});
  }

  onSave(form) {
    this.save.emit(this.formGroup.value);
    form.reset();
  }

  private validateUrl(control: AbstractControl): { [key: string]: any } {
    const url = control.value;
    //const correct = url.test();
    const correct = URL_VALID.test(url);
    return
     correct ? { url: true } : null;
  }

  private sameUrl(group: FormGroup) {
    const imdb = group.get('imdbUrl').value;
    const image = group.get('image').value;
    return imdb == image ? null : {sameUrl: true};
    debugger
  }
}
