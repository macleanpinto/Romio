import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

@Component({
  selector: 'rebate_rules',
  styleUrls: ['rebate_rules.component.scss'],
  templateUrl: 'rebate_rules.component.html'
})
export class RebateRulesComponent {
  private startdate: DateModel;
  private enddate: DateModel;
  private startoptions: DatePickerOptions;
  private endoptions: DatePickerOptions;
  //private options :  NgDateRangePickerOptions ;

  constructor() {
    this.startoptions = new DatePickerOptions({ style: 'normal' });
    this.endoptions = new DatePickerOptions({ style: 'normal' });
  }
  /* ngOnInit() {
    this.options = { theme: 'default' };
  } */

  private startDateChanged($event) {

    if ($event.type == "dateChanged") {
      let date: Date = new Date($event.data.formatted);
      this.endoptions = new DatePickerOptions({ style: 'normal', minDate:date});
        console.log(this.endoptions.minDate);
    }

  }
}
