import { Component } from '@angular/core';

@Component({
  selector: 'form',
  styleUrls: ['form.component.scss'],
  templateUrl: 'form.component.html'
})
export class FormComponent {
  private visible: Boolean = false;

  private onClick($event) {
    if ($event.target.value == "newrequest") {
      this.visible = true;
    }
    else {
      this.visible = false;
    }
  }
}
