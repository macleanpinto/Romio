import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
    selector: 'block-app',
    styleUrls: ['block.component.scss'],
    templateUrl: 'block.component.html',
    encapsulation: ViewEncapsulation.None
})
export class BlockComponent implements OnInit {
    private seats = [{
        seats: [
            {
                no: '1A',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1B',
                pname: 'RI',
                disabled: false
            },
            {
                no: '1C',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1D',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1E',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1F',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1G',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1H',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1I',
                pname: 'RI',
                disabled: true
            },
            {
                no: '1J',
                pname: 'RI',
                disabled: true
            },
        ]


    }, {
        seats: [
            {
                no: '2A',
                pname: 'RI',
                disabled: true
            },
            {
                disabled: true
            },
            {
                no: '2B',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2C',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2D',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2E',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2F',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2G',
                pname: 'RI',
                disabled: true
            },
            {
                no: '2H',
                pname: 'RI',
                disabled: false
            },
            {
                no: '2I',
                pname: 'RI',
                disabled: false
            },
            {
                no: '2J',
                pname: 'RI',
                disabled: false
            },
        ]


    }];
    constructor() { }
    public ngOnInit() {
    }
}


