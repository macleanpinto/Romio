import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'seat',
    styleUrls: ['seat.component.scss'],
    templateUrl: 'seat.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SeatComponent implements OnInit {
    private id="1A";
    constructor() { }
    public ngOnInit() {
    }
}


