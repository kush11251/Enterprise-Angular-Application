// primary button component
import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  template: '<button><ng-content></ng-content></button>'
})
export class PrimaryButtonComponent {}