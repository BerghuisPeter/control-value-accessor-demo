import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-mon-custom-input',
  templateUrl: './mon-custom-input.component.html',
  styleUrls: ['./mon-custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MonCustomInputComponent),
    multi: true
  }]
})
export class MonCustomInputComponent implements ControlValueAccessor {

  @Input()
  disabled?: boolean;

  @Input()
  public ariaLabel?: string;

  @Input()
  public required?: boolean;

  inputValue: string;

  constructor() {
    this.disabled = false;
    this.required = false;
    this.inputValue = '';
  }

  // component to exterior
  public onTouched = () => {};
  // component to exterior
  public onChange = (_: string) => {
  };

  public onBlur() {
    console.log('onBlur (component to exterior)');
    this.onTouched();
  }

  onInputChange() {
    this.onChange(this.inputValue);
    console.log('onChange called (component to exterior)');
  }

  // ControlValueAccessor function
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // ControlValueAccessor function
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // ControlValueAccessor function
  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState (parent to component)');
    this.disabled = isDisabled;
  }

  // ControlValueAccessor function
  writeValue(obj: any): void {
    console.log('writeValue (parent to component)');
    this.inputValue = obj;
  }


  public clearInput(): void {
    this.inputValue = '';
    this.onChange('');
  }

}
