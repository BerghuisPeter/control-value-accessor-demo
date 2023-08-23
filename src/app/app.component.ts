import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFormControl: FormControl;
  ngModelValue: string;

  constructor() {
    this.myFormControl = new FormControl<string>('');
    this.ngModelValue = '';
  }

  public formControlValueChange() {
    this.myFormControl.setValue('hello world!');
  }

  public toggleDisableState() {
    this.myFormControl.disabled ? this.myFormControl.enable() : this.myFormControl.disable();
  }

  public ngModelValueChange() {
    this.ngModelValue = 'hello world!';
  }
}
